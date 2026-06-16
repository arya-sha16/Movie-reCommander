import { movies } from './movies-db.js';

// Application State
const state = {
  watchlist: JSON.parse(localStorage.getItem('mc_watchlist')) || ['interstellar', 'the-synthetic'],
  progress: JSON.parse(localStorage.getItem('mc_progress')) || {
    "shadow-protocol": { remaining: "15m remaining", progress: 66, title: "Shadow Protocol", subtitle: "S1 : E4 • 15m remaining" },
    "dune-chronicles": { remaining: "2h 10m remaining", progress: 25, title: "Dune Chronicles", subtitle: "2h 10m remaining" },
    "atlantis-rising": { remaining: "8m remaining", progress: 80, title: "Atlantis Rising", subtitle: "S2 : E12 • 8m remaining" }
  },
  searchQuery: "",
  notificationsCount: 3
};

// Notification Database
let notifications = [
  { id: 1, type: 'recommend', text: 'Neural Engine Recommendations Updated', time: 'Just now', icon: 'auto_awesome' },
  { id: 2, type: 'watchlist', text: 'Interstellar Journey is still in your watchlist', time: '2 hours ago', icon: 'bookmark' },
  { id: 3, type: 'stream', text: 'New Release: Kingdom of Aether is streaming now', time: 'Yesterday', icon: 'stream' }
];

// Helper to save state
function saveWatchlist() {
  localStorage.setItem('mc_watchlist', JSON.stringify(state.watchlist));
}

function saveProgress() {
  localStorage.setItem('mc_progress', JSON.stringify(state.progress));
}

// Router Implementation
const routes = {
  'home': renderHome,
  'movie': renderMovieDetail,
  'search': renderSearch,
  'watchlist': renderWatchlist,
  'movies': renderGenreMovies,
  'series': renderSeries
};

function router() {
  const hash = window.location.hash.slice(1) || 'home';
  
  // Parse route parameters (e.g., movie/interstellar or search?q=inception)
  let routeName = hash;
  let param = "";
  
  if (hash.includes('/')) {
    const parts = hash.split('/');
    routeName = parts[0];
    param = parts[1];
  } else if (hash.includes('?')) {
    const parts = hash.split('?');
    routeName = parts[0];
    param = new URLSearchParams(parts[1]).get('q') || "";
  }
  
  // Update header active links styling
  updateNavLinks(routeName);
  
  // Close any floating overlays
  document.getElementById('notification-dropdown').classList.remove('active');
  
  // Run matching route renderer
  const renderer = routes[routeName] || renderHome;
  renderer(param);
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateNavLinks(activeRoute) {
  // Clear classes
  ['nav-home', 'nav-movies', 'nav-series', 'nav-watchlist'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = "font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer";
  });
  ['mobile-nav-home', 'mobile-nav-movies', 'mobile-nav-series', 'mobile-nav-watchlist'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = "flex flex-col items-center text-on-surface-variant";
  });

  // Set active class
  let targetId = "";
  let mobileTargetId = "";
  if (activeRoute === 'home') {
    targetId = 'nav-home';
    mobileTargetId = 'mobile-nav-home';
  } else if (activeRoute === 'movies') {
    targetId = 'nav-movies';
    mobileTargetId = 'mobile-nav-movies';
  } else if (activeRoute === 'series') {
    targetId = 'nav-series';
    mobileTargetId = 'mobile-nav-series';
  } else if (activeRoute === 'watchlist') {
    targetId = 'nav-watchlist';
    mobileTargetId = 'mobile-nav-watchlist';
  }
  
  const el = document.getElementById(targetId);
  if (el) el.className = "font-label-md text-label-md uppercase tracking-wider text-primary font-bold border-b-2 border-primary pb-1 cursor-pointer";
  
  const mobEl = document.getElementById(mobileTargetId);
  if (mobEl) mobEl.className = "flex flex-col items-center text-primary";
}

// Show Toast message
function showToast(message, isSuccess = true) {
  const toast = document.getElementById('toast-alert');
  const toastMsg = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');
  
  toastMsg.innerText = message;
  if (isSuccess) {
    toast.style.background = "#5d3fd3";
    toastIcon.innerText = "check_circle";
  } else {
    toast.style.background = "#b8003f";
    toastIcon.innerText = "cancel";
  }
  
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 3000);
}

// Watchlist Toggling
function toggleWatchlist(movieId) {
  const index = state.watchlist.indexOf(movieId);
  let message = "";
  if (index === -1) {
    state.watchlist.push(movieId);
    message = "Added to Watchlist";
  } else {
    state.watchlist.splice(index, 1);
    message = "Removed from Watchlist";
  }
  saveWatchlist();
  showToast(message);
  
  // Re-render current page if it is watchlist or detail view to update button state
  const hash = window.location.hash.slice(1) || 'home';
  if (hash === 'watchlist' || hash.startsWith('movie/')) {
    router();
  }
}

// View Renderers

// 1. HOME VIEW RENDERER
function renderHome() {
  const container = document.getElementById('app-view');
  
  // Get main featured hero movie (Nebula)
  const heroMovie = movies.find(m => m.id === 'nebula-the-last-frontier') || movies[0];
  const watchlistIcon = state.watchlist.includes(heroMovie.id) ? 'check' : 'add';
  const watchlistText = state.watchlist.includes(heroMovie.id) ? 'In Watchlist' : 'Add to Watchlist';

  // Build Continue Watching shelf
  let continueWatchingCards = "";
  Object.keys(state.progress).forEach(id => {
    const prog = state.progress[id];
    const movie = movies.find(m => m.id === id);
    const posterSrc = movie ? movie.backdrop : "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500";
    
    continueWatchingCards += `
      <div class="min-w-[300px] md:min-w-[400px] group cursor-pointer" onclick="window.location.hash='#movie/${id}'">
        <div class="relative aspect-video rounded-xl overflow-hidden mb-sm border border-white/5 transition-all duration-300 group-hover:scale-[1.02] movie-card-glow">
          <img class="w-full h-full object-cover" src="${posterSrc}" alt="${prog.title}"/>
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="material-symbols-outlined text-primary text-5xl fill-icon">play_circle</span>
          </div>
          <div class="absolute bottom-0 left-0 w-full h-1 bg-surface-variant">
            <div class="h-full bg-gradient-to-r from-primary-container to-secondary-container" style="width: ${prog.progress}%"></div>
          </div>
        </div>
        <div>
          <h3 class="font-bold text-on-surface group-hover:text-primary transition-colors">${prog.title}</h3>
          <p class="text-label-sm text-on-surface-variant">${prog.subtitle}</p>
        </div>
      </div>
    `;
  });

  // Recommended shelf
  let recommendedCards = "";
  // Pulling specific ids from the mockup (Synthetic, Midnight Drive, Redline, Cosmic Echo, Lost City, Stage Fright)
  const recIds = ['the-synthetic', 'midnight-drive', 'redline-district', 'cosmic-echo', 'the-lost-city', 'stage-fright'];
  const recommendedList = movies.filter(m => recIds.includes(m.id));
  
  recommendedList.forEach(m => {
    recommendedCards += `
      <div class="group cursor-pointer" onclick="window.location.hash='#movie/${m.id}'">
        <div class="relative aspect-[2/3] rounded-xl overflow-hidden mb-sm border border-white/10 movie-card-glow transition-all duration-300 group-hover:scale-105">
          <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-md">
            <span class="text-label-sm font-label-sm text-secondary bg-secondary/15 w-fit px-2 py-0.5 rounded mb-1">4K UHD</span>
            <div class="flex items-center text-primary font-bold gap-1 text-sm">
              <span class="material-symbols-outlined text-sm fill-icon">star</span>
              ${m.rating}
            </div>
          </div>
        </div>
        <h3 class="font-bold text-on-surface text-sm truncate">${m.title}</h3>
        <p class="text-label-sm text-on-surface-variant">${m.genre[0]} • ${m.year}</p>
      </div>
    `;
  });

  // Render main template HTML
  container.innerHTML = `
    <!-- Hero Section -->
    <section class="relative w-full h-[921px] md:h-screen flex items-end">
      <div class="absolute inset-0 z-0">
        <img class="w-full h-full object-cover" src="${heroMovie.backdrop}" alt="${heroMovie.title}"/>
        <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/40 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-transparent to-transparent"></div>
      </div>
      <div class="relative z-10 px-margin-mobile md:px-margin-desktop pb-xl md:pb-32 w-full max-w-4xl">
        <div class="flex items-center gap-sm mb-md">
          <span class="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest">Trending Now</span>
          <span class="text-on-surface-variant font-label-sm text-label-sm uppercase tracking-widest">${heroMovie.year} • ${heroMovie.genre.join(' • ')} • ${heroMovie.duration}</span>
        </div>
        <h1 class="font-display-sm md:font-display-lg text-display-sm md:text-display-lg mb-md leading-tight text-on-surface">${heroMovie.title}</h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant mb-lg line-clamp-3 md:line-clamp-none max-w-2xl">
          ${heroMovie.synopsis}
        </p>
        <div class="flex flex-wrap items-center gap-md">
          <button id="hero-play-btn" class="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg flex items-center gap-2 font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary-container/30">
            <span class="material-symbols-outlined fill-icon">play_arrow</span>
            Watch Now
          </button>
          <button id="hero-watchlist-btn" class="glass-panel text-on-surface px-8 py-4 rounded-lg flex items-center gap-2 font-bold hover:bg-surface-variant/50 active:scale-95 transition-all">
            <span class="material-symbols-outlined">${watchlistIcon}</span>
            ${watchlistText}
          </button>
        </div>
      </div>
    </section>
    
    <main class="relative z-20 -mt-20 md:-mt-32 pb-xl bg-gradient-to-b from-transparent to-[#0A0A0B]">
      <!-- Continue Watching -->
      <section class="px-margin-mobile md:px-margin-desktop mb-xl">
        <div class="flex justify-between items-end mb-md">
          <h2 class="font-headline-lg-mobile md:font-headline-lg text-on-surface">Continue Watching</h2>
          <a class="text-primary font-label-md text-label-md hover:underline" href="#watchlist">View All</a>
        </div>
        <div class="flex gap-gutter overflow-x-auto hide-scrollbar pb-4 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
          ${continueWatchingCards}
        </div>
      </section>
      
      <!-- Recommended for You -->
      <section class="px-margin-mobile md:px-margin-desktop mb-xl">
        <div class="flex justify-between items-end mb-md">
          <h2 class="font-headline-lg-mobile md:font-headline-lg text-on-surface">Recommended for You</h2>
          <div class="flex gap-sm">
            <button id="scroll-left-rec" class="w-10 h-10 flex items-center justify-center border border-outline-variant/30 rounded-full hover:bg-surface-variant/30 transition-colors">
              <span class="material-symbols-outlined">chevron_left</span>
            </button>
            <button id="scroll-right-rec" class="w-10 h-10 flex items-center justify-center border border-outline-variant/30 rounded-full hover:bg-surface-variant/30 transition-colors">
              <span class="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div id="rec-grid-scroll" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-gutter overflow-x-auto hide-scrollbar">
          ${recommendedCards}
        </div>
      </section>
      
      <!-- New Releases (Bento Style) -->
      <section class="px-margin-mobile md:px-margin-desktop mb-xl">
        <h2 class="font-headline-lg-mobile md:font-headline-lg text-on-surface mb-md">New Releases</h2>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter h-auto md:h-[600px]">
          <!-- Featured New -->
          <div class="md:col-span-8 group cursor-pointer relative overflow-hidden rounded-2xl border border-white/5" onclick="window.location.hash='#movie/kingdom-of-aether'">
            <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkoMpJdfzhNqiek_wlyjO7MsvKmAG1taA9byW3WmQNvgXmn-Ff1nr8wCkRJYoCo3qi0_mLc0cqf_rN9WeIlbbRjQ33BQnrsid0B4N5ely7SBe57nNlT6Stt5PbPq_Yc1Y-6h2J00Gy4su9eyvHKL-SwWWMbKagZOGUV2Y6OBHImNfLEKVskYNxvhX6liiZPZnKUjF9dhOd9_R3edO-rlgAXiKM9IOntfawYnHWuzHQ32rCc3-1qnrZgS8IW1yT_brU0CxRFYvE83fo" alt="Kingdom of Aether"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-lg flex flex-col justify-end">
              <span class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-bold w-fit mb-sm">NEW EXCLUSIVE</span>
              <h3 class="font-headline-lg text-on-surface mb-xs">Kingdom of Aether</h3>
              <p class="text-on-surface-variant max-w-md mb-md">The battle for the floating islands begins. Stream the epic finale of the trilogy now.</p>
              <button class="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold w-fit hover:scale-105 transition-all">Watch Premiere</button>
            </div>
          </div>
          <!-- Side Grid -->
          <div class="md:col-span-4 flex flex-col gap-gutter">
            <div class="flex-1 group cursor-pointer relative overflow-hidden rounded-2xl border border-white/5" onclick="window.location.hash='#movie/nitro-rush'">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR_WL7Euwipq_HrDhF0uMLU3Wa_TlClLD0ICNAQmWpKz7yTaFxAiKQB-He78_HldzHK9p9e3NUsRP14NWlKK7ZWShvFHcsKj0YwBxSQrrra8rKiUPaYkDZOEwJdLgHtQjX1oG4zNO8cRzRTr-fsGbkEmEt79lwgEE8jnmSDBjBQdV4fB0Fpy4gG5rM-tr0z4b5c273ElXyTK67Rgc3OvHfYT6p-SP-BUCtPUd51nuDYWNH-vcfjG2S-iEseOabwEMongyUbBMlDlWY" alt="Nitro Rush"/>
              <div class="absolute inset-0 bg-black/40 p-md flex flex-col justify-end">
                <h4 class="font-bold text-on-surface">Nitro Rush</h4>
                <p class="text-label-sm text-on-surface-variant">Action • 1h 45m</p>
              </div>
            </div>
            <div class="flex-1 group cursor-pointer relative overflow-hidden rounded-2xl border border-white/5" onclick="window.location.hash='#movie/beyond-the-void'">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMzkk8sJJlPL82IoK_VWrrxVEYuoIqLiT6x9Rg4smhuxXERHrNeR-ToCw3hOZ2TGNqOwIUdreeopZC03Pao0vg2wSH3H0hKNmUC6Zsynt62UpkZKnc2dS8-ljuif5xqCe7goRVBmFVKlukoFyQb8wbHfGvdpsi63fBbOtQ_LPF_3w-myfNga-18l0NBorXNnBxNlo_gUY1j6KJRrUb7WMQZCZdUJARQcHq5xq4LWMJGBLi8_yZw1In8v0sVF8ruzOkcWvDgRS7hoYW" alt="Beyond the Void"/>
              <div class="absolute inset-0 bg-black/40 p-md flex flex-col justify-end">
                <h4 class="font-bold text-on-surface">Beyond the Void</h4>
                <p class="text-label-sm text-on-surface-variant">Documentary • 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;

  // Attach button triggers
  document.getElementById('hero-play-btn').addEventListener('click', () => {
    window.location.hash = `#movie/${heroMovie.id}?play=true`;
  });
  
  document.getElementById('hero-watchlist-btn').addEventListener('click', () => {
    toggleWatchlist(heroMovie.id);
  });

  // Shelf scrolling hooks
  document.getElementById('scroll-left-rec').addEventListener('click', () => {
    document.getElementById('rec-grid-scroll').scrollBy({ left: -300, behavior: 'smooth' });
  });
  document.getElementById('scroll-right-rec').addEventListener('click', () => {
    document.getElementById('rec-grid-scroll').scrollBy({ left: 300, behavior: 'smooth' });
  });
}

// 2. MOVIE DETAIL VIEW RENDERER
function renderMovieDetail(movieId) {
  const container = document.getElementById('app-view');
  
  // Extract id and optional query params (like play=true)
  let cleanId = movieId;
  let autoplay = false;
  if (movieId.includes('?')) {
    const parts = movieId.split('?');
    cleanId = parts[0];
    autoplay = new URLSearchParams(parts[1]).get('play') === 'true';
  }

  const movie = movies.find(m => m.id === cleanId);
  if (!movie) {
    container.innerHTML = `
      <div class="pt-32 pb-xl text-center">
        <h2 class="text-2xl font-bold">Movie Not Found</h2>
        <a href="#home" class="text-primary mt-4 inline-block hover:underline">Return Home</a>
      </div>
    `;
    return;
  }

  const watchlistIcon = state.watchlist.includes(movie.id) ? 'check' : 'bookmark';
  const watchlistText = state.watchlist.includes(movie.id) ? 'In Watchlist' : 'Add to Watchlist';

  // Get similar movies ("More Like This" shelf)
  const similarMovies = movies.filter(m => m.id !== movie.id && m.genre.some(g => movie.genre.includes(g))).slice(0, 6);
  let similarCards = "";
  similarMovies.forEach(m => {
    similarCards += `
      <div class="min-w-[200px] flex flex-col gap-sm cursor-pointer group" onclick="window.location.hash='#movie/${m.id}'">
        <div class="aspect-[2/3] rounded-xl overflow-hidden relative border border-white/5 transition-all group-hover:scale-105 movie-card-glow">
          <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-base">
            <span class="text-secondary text-label-sm font-label-sm">${m.genre[0].toUpperCase()} • ${m.year}</span>
          </div>
        </div>
        <p class="text-white font-medium">${m.title}</p>
      </div>
    `;
  });

  // Cast cards
  let castCards = "";
  const actors = movie.cast || [];
  actors.forEach(a => {
    castCards += `
      <div class="bg-surface-container-low p-base rounded-xl border border-white/5 flex items-center gap-md hover:bg-surface-container transition-colors cursor-pointer">
        <img class="w-12 h-12 rounded-lg object-cover" src="${a.image}" alt="${a.name}"/>
        <div>
          <p class="text-white font-semibold text-body-md">${a.name}</p>
          <p class="text-on-surface-variant text-label-sm">${a.character}</p>
        </div>
      </div>
    `;
  });

  // Render HTML Structure
  container.innerHTML = `
    <main class="pt-20">
      <!-- Simulated / Real Video Player Section -->
      <section id="player-container" class="relative w-full aspect-video md:h-[819px] overflow-hidden bg-black group">
        
        <!-- Video element or Backdrop poster -->
        <div id="video-frame" class="absolute inset-0 z-0 flex items-center justify-center">
          ${autoplay ? `
            <video id="main-video" class="w-full h-full object-cover" autoplay playsinline>
              <source src="${movie.videoUrl}" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
          ` : `
            <img id="video-backdrop" class="w-full h-full object-cover opacity-60" src="${movie.backdrop}" alt="${movie.title}"/>
            <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          `}
        </div>

        <!-- Play overlay button (Only show if not playing) -->
        <div id="play-overlay" class="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110 ${autoplay ? 'hidden' : ''}">
          <button id="detail-play-btn" class="bg-primary-container/20 backdrop-blur-md p-lg rounded-full border border-primary/30 text-primary hover:bg-primary-container/40 transition-all active:scale-90 flex items-center justify-center">
            <span class="material-symbols-outlined !text-[64px] fill-icon">play_arrow</span>
          </button>
        </div>

        <!-- Video Info overlay (hides while playing video) -->
        <div id="video-info-overlay" class="absolute bottom-0 left-0 w-full p-margin-desktop z-20 pointer-events-none transition-opacity duration-300 ${autoplay ? 'opacity-0' : ''}">
          <div class="flex flex-col gap-sm">
            <div class="flex gap-xs">
              ${movie.genre.map(g => `<span class="bg-primary/20 text-primary px-sm py-1 rounded text-label-sm font-label-sm border border-primary/20 uppercase">${g}</span>`).join('')}
              <span class="bg-secondary/20 text-secondary px-sm py-1 rounded text-label-sm font-label-sm border border-secondary/20 uppercase">4K UHD</span>
              <span class="bg-surface-variant/50 text-on-surface px-sm py-1 rounded text-label-sm font-label-sm border border-white/10 uppercase">${movie.duration}</span>
            </div>
            <h1 class="font-display-sm text-display-sm md:font-display-lg md:text-display-lg text-white max-w-3xl drop-shadow-lg">${movie.title}</h1>
          </div>
        </div>

        <!-- Working Video Control overlay (shows on hover when playing) -->
        <div id="video-controls" class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto flex flex-col gap-2 ${autoplay ? '' : 'hidden'}">
          <!-- Progress timeline bar -->
          <div class="relative w-full h-1 bg-white/20 cursor-pointer rounded-full" id="progress-timeline">
            <div id="progress-fill" class="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary w-0 shadow-[0_0_10px_rgba(202,190,255,0.8)]"></div>
          </div>
          
          <div class="flex items-center justify-between text-white text-xs">
            <div class="flex items-center gap-4">
              <button id="player-play-toggle" class="hover:text-primary">
                <span class="material-symbols-outlined text-md fill-icon" id="play-toggle-icon">pause</span>
              </button>
              <button id="player-rewind" class="hover:text-primary">
                <span class="material-symbols-outlined text-md">replay_10</span>
              </button>
              <button id="player-forward" class="hover:text-primary">
                <span class="material-symbols-outlined text-md">forward_10</span>
              </button>
              <div class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">volume_up</span>
                <input type="range" min="0" max="1" step="0.1" value="0.8" id="volume-slider" class="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary"/>
              </div>
              <span id="player-time">0:00 / 0:00</span>
            </div>
            
            <div class="flex items-center gap-4">
              <button id="player-speed" class="font-label-sm hover:text-primary text-label-sm border border-white/20 px-2 py-0.5 rounded">1.0x</button>
              <button id="player-fullscreen" class="hover:text-primary">
                <span class="material-symbols-outlined text-md">fullscreen</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Top Close Player button -->
        <button id="close-player-btn" class="absolute top-6 left-6 z-40 bg-black/60 hover:bg-black/80 hover:text-primary text-white p-2 rounded-full border border-white/10 flex items-center justify-center active:scale-95 duration-200 hidden">
          <span class="material-symbols-outlined text-md">arrow_back</span>
        </button>

        <!-- Static Progress Bar (shown when player is not actively used/shown) -->
        <div id="static-progress" class="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30 ${autoplay ? 'hidden' : ''}">
          <div class="h-full bg-gradient-to-r from-primary to-secondary w-1/3 shadow-[0_0_10px_rgba(202,190,255,0.8)]"></div>
        </div>
      </section>

      <!-- Movie Details Content -->
      <section class="px-margin-desktop py-xl grid grid-cols-1 lg:grid-cols-12 gap-xl relative z-10">
        <!-- Left Column: Info -->
        <div class="lg:col-span-8 flex flex-col gap-lg">
          <!-- Where to Watch -->
          <div class="glass-panel p-md rounded-xl">
            <h3 class="font-label-md text-label-md text-on-surface-variant uppercase mb-md tracking-widest flex items-center gap-base">
              <span class="material-symbols-outlined text-secondary">stream</span>
              Where to Watch for Free
            </h3>
            <div class="flex flex-wrap gap-lg">
              <div class="flex flex-col items-center gap-xs cursor-pointer group">
                <div class="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center border border-white/5 group-hover:border-secondary group-hover:scale-110 transition-all">
                  <span class="material-symbols-outlined text-secondary text-headline-lg">road</span>
                </div>
                <span class="font-label-sm text-label-sm text-on-surface-variant">Roku</span>
              </div>
              <div class="flex flex-col items-center gap-xs cursor-pointer group">
                <div class="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center border border-white/5 group-hover:border-secondary group-hover:scale-110 transition-all">
                  <span class="material-symbols-outlined text-secondary text-headline-lg">tv_gen</span>
                </div>
                <span class="font-label-sm text-label-sm text-on-surface-variant">Tubi TV</span>
              </div>
              <div class="flex flex-col items-center gap-xs cursor-pointer group">
                <div class="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center border border-white/5 group-hover:border-secondary group-hover:scale-110 transition-all">
                  <span class="material-symbols-outlined text-secondary text-headline-lg">satellite_alt</span>
                </div>
                <span class="font-label-sm text-label-sm text-on-surface-variant">Pluto TV</span>
              </div>
            </div>
          </div>
          
          <!-- Synopsis -->
          <div class="flex flex-col gap-md">
            <h2 class="font-headline-lg text-headline-lg text-white">The Story</h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-4xl leading-relaxed">
              ${movie.synopsis}
            </p>
          </div>
          
          <!-- Cast Bento -->
          <div class="flex flex-col gap-md">
            <h2 class="font-headline-lg text-headline-lg text-white">Cast</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-md">
              ${castCards}
            </div>
          </div>
        </div>
        
        <!-- Right Column: Ratings & Actions -->
        <div class="lg:col-span-4 flex flex-col gap-lg">
          <div class="glass-panel p-lg rounded-2xl flex flex-col gap-md sticky top-28">
            <div class="flex items-center justify-between">
              <div class="flex flex-col">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">IMDb Rating</span>
                <div class="flex items-center gap-xs">
                  <span class="material-symbols-outlined text-secondary fill-icon">star</span>
                  <span class="font-display-sm text-display-sm text-white">${movie.rating}</span>
                  <span class="text-on-surface-variant self-end pb-1">/10</span>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Metascore</span>
                <div class="bg-primary-container px-base py-xs rounded font-bold text-on-primary-container text-headline-lg-mobile mt-1">
                  ${movie.metascore}
                </div>
              </div>
            </div>
            
            <hr class="border-white/10"/>
            
            <div class="flex flex-col gap-sm">
              <button id="detail-watchlist-toggle" class="w-full bg-primary-container text-on-primary-container font-semibold py-md rounded-xl hover:bg-primary-container/90 transition-all flex items-center justify-center gap-base active:scale-[0.98]">
                <span class="material-symbols-outlined fill-icon">${watchlistIcon}</span>
                ${watchlistText}
              </button>
              <button id="detail-share-btn" class="w-full bg-surface-variant text-on-surface font-semibold py-md rounded-xl hover:bg-surface-container-high transition-all border border-white/5 flex items-center justify-center gap-base active:scale-[0.98]">
                <span class="material-symbols-outlined">share</span>
                Share with Friends
              </button>
            </div>
            
            <div class="flex flex-col gap-base mt-md">
              <h4 class="font-label-md text-label-md text-white">Director</h4>
              <p class="text-on-surface-variant">${movie.director}</p>
            </div>
            <div class="flex flex-col gap-base">
              <h4 class="font-label-md text-label-md text-white">Writers</h4>
              <p class="text-on-surface-variant">${movie.writers}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- More Like This -->
      <section class="px-margin-desktop pb-xl overflow-hidden relative z-10">
        <h2 class="font-headline-lg text-headline-lg text-white mb-lg">More Like This</h2>
        <div class="flex gap-gutter overflow-x-auto pb-lg hide-scrollbar" id="shelf-similar">
          ${similarCards}
        </div>
      </section>
    </main>
  `;

  // Play button triggers
  const playBtn = document.getElementById('detail-play-btn');
  const closePlayerBtn = document.getElementById('close-player-btn');
  const playOverlay = document.getElementById('play-overlay');
  const videoInfoOverlay = document.getElementById('video-info-overlay');
  const videoFrame = document.getElementById('video-frame');
  const staticProgress = document.getElementById('static-progress');
  const videoControls = document.getElementById('video-controls');

  function startPlayer() {
    playOverlay.classList.add('hidden');
    videoInfoOverlay.classList.add('opacity-0');
    staticProgress.classList.add('hidden');
    closePlayerBtn.classList.remove('hidden');
    videoControls.classList.remove('hidden');

    // Insert real HTML5 video
    videoFrame.innerHTML = `
      <video id="main-video" class="w-full h-full object-cover" autoplay playsinline>
        <source src="${movie.videoUrl}" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    `;
    
    setTimeout(() => {
      attachVideoEvents();
    }, 100);
  }

  function stopPlayer() {
    closePlayerBtn.classList.add('hidden');
    videoControls.classList.add('hidden');
    playOverlay.classList.remove('hidden');
    videoInfoOverlay.classList.remove('opacity-0');
    staticProgress.classList.remove('hidden');

    // Restore backdrop poster
    videoFrame.innerHTML = `
      <img id="video-backdrop" class="w-full h-full object-cover opacity-60" src="${movie.backdrop}" alt="${movie.title}"/>
      <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
    `;
  }

  playBtn.addEventListener('click', startPlayer);
  closePlayerBtn.addEventListener('click', stopPlayer);

  // Watchlist Toggle
  document.getElementById('detail-watchlist-toggle').addEventListener('click', () => {
    toggleWatchlist(movie.id);
  });

  // Share copy url simulation
  document.getElementById('detail-share-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href);
    showToast("Link copied to clipboard!");
  });

  // Shelf mousewheel scrolling support
  const shelf = document.getElementById('shelf-similar');
  shelf.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    shelf.scrollLeft += evt.deltaY;
  });

  // Setup video controls events
  function attachVideoEvents() {
    const video = document.getElementById('main-video');
    if (!video) return;

    const playToggle = document.getElementById('player-play-toggle');
    const playToggleIcon = document.getElementById('play-toggle-icon');
    const timeline = document.getElementById('progress-timeline');
    const fill = document.getElementById('progress-fill');
    const timeDisplay = document.getElementById('player-time');
    const volumeSlider = document.getElementById('volume-slider');
    const speedBtn = document.getElementById('player-speed');
    const fsBtn = document.getElementById('player-fullscreen');

    playToggle.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playToggleIcon.innerText = 'pause';
      } else {
        video.pause();
        playToggleIcon.innerText = 'play_arrow';
      }
    });

    document.getElementById('player-rewind').addEventListener('click', () => {
      video.currentTime = Math.max(0, video.currentTime - 10);
    });

    document.getElementById('player-forward').addEventListener('click', () => {
      video.currentTime = Math.min(video.duration, video.currentTime + 10);
    });

    volumeSlider.addEventListener('input', (e) => {
      video.volume = e.target.value;
    });

    video.addEventListener('timeupdate', () => {
      const pct = (video.currentTime / video.duration) * 100;
      fill.style.width = `${pct}%`;

      // Update time text
      const curMin = Math.floor(video.currentTime / 60);
      const curSec = Math.floor(video.currentTime % 60).toString().padStart(2, '0');
      const durMin = Math.floor(video.duration / 60) || 0;
      const durSec = Math.floor(video.duration % 60 || 0).toString().padStart(2, '0');
      
      timeDisplay.innerText = `${curMin}:${curSec} / ${durMin}:${durSec}`;

      // Save continue watching progress
      if (pct > 5 && pct < 95) {
        state.progress[movie.id] = {
          remaining: `${Math.round((video.duration - video.currentTime) / 60)}m remaining`,
          progress: Math.round(pct),
          title: movie.title,
          subtitle: `${movie.duration.split(' ')[0]} • ${Math.round((video.duration - video.currentTime) / 60)}m remaining`
        };
        saveProgress();
      }
    });

    // Timeline seeking
    timeline.addEventListener('click', (e) => {
      const rect = timeline.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      video.currentTime = pct * video.duration;
    });

    // Speed setting
    const speeds = [1.0, 1.25, 1.5, 2.0];
    let currentSpeedIdx = 0;
    speedBtn.addEventListener('click', () => {
      currentSpeedIdx = (currentSpeedIdx + 1) % speeds.length;
      video.playbackRate = speeds[currentSpeedIdx];
      speedBtn.innerText = `${speeds[currentSpeedIdx]}x`;
    });

    // Fullscreen toggling
    fsBtn.addEventListener('click', () => {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
      }
    });
  }

  // If autoplay requested, start immediately
  if (autoplay) {
    startPlayer();
  }
}

// 3. SEARCH & RECOMMENDATIONS VIEW RENDERER
function renderSearch(query) {
  const container = document.getElementById('app-view');
  state.searchQuery = query;

  // Perform search matching
  const queryLower = query.toLowerCase();
  const searchResults = movies.filter(m => 
    m.title.toLowerCase().includes(queryLower) ||
    m.genre.some(g => g.toLowerCase().includes(queryLower)) ||
    m.synopsis.toLowerCase().includes(queryLower)
  );

  // Results Grid HTML
  let resultsGrid = "";
  if (searchResults.length > 0) {
    searchResults.forEach(m => {
      resultsGrid += `
        <div class="group relative cursor-pointer" onclick="window.location.hash='#movie/${m.id}'">
          <div class="aspect-[2/3] rounded-xl overflow-hidden glass-card transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2 movie-poster-shadow">
            <img class="w-full h-full object-cover transition-all duration-500" src="${m.poster}" alt="${m.title}"/>
            <div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
              <p class="font-label-sm text-label-sm text-primary mb-1 uppercase">${m.year} • ${m.genre[0]}</p>
              <h3 class="font-headline-lg-mobile text-headline-lg-mobile text-white leading-tight">${m.title}</h3>
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="font-label-md text-label-md text-on-surface">${m.title}</span>
            <span class="font-label-sm text-label-sm text-secondary">${m.rating}</span>
          </div>
        </div>
      `;
    });
  } else {
    resultsGrid = `
      <div class="col-span-full py-xl text-center">
        <p class="text-on-surface-variant mb-4">No matching movies found for "${query}".</p>
        <button onclick="window.location.hash='#home'" class="bg-primary-container text-white px-6 py-2 rounded-full font-label-md">Return to Discovery</button>
      </div>
    `;
  }

  // Refine tags list
  const refineTagsList = ["Mind-Bending", "Christopher Nolan", "Heist Movies", "Visual Spectacle", "Existential Thriller", "Sci-Fi", "Action"];
  let refineTagsHtml = "";
  refineTagsList.forEach(t => {
    refineTagsHtml += `
      <button class="refine-tag-btn px-6 py-2 rounded-full border border-outline-variant/30 text-on-surface-variant hover:border-primary hover:text-primary transition-all font-label-md text-label-md" data-tag="${t}">
        ${t}
      </button>
    `;
  });

  container.innerHTML = `
    <main class="pt-32 pb-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto relative z-10">
      <!-- Search Header -->
      <header class="mb-lg">
        <p class="font-label-md text-label-md text-primary mb-2 uppercase tracking-widest">Search Results for</p>
        <h1 class="font-display-sm text-display-sm md:font-display-lg md:text-display-lg text-on-surface tracking-tighter">"${query}"</h1>
        <div class="flex gap-4 mt-4">
          <span class="px-4 py-1 rounded-full bg-secondary-container/20 text-secondary-fixed text-xs font-label-md border border-secondary-fixed/30">${searchResults.length} Movies Found</span>
          <span class="px-4 py-1 rounded-full bg-primary-container/20 text-primary text-xs font-label-md border border-primary/30">Intelligence Filtered</span>
        </div>
      </header>

      <!-- Search Results Grid -->
      <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-gutter mb-xl">
        ${resultsGrid}
      </section>

      <!-- AI Neural Recommendation Section (Mockup spec) -->
      <section class="mt-xl relative overflow-hidden rounded-3xl p-md md:p-xl border border-primary/20 bg-surface-container-lowest ai-glow">
        <div class="relative z-10">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-lg gap-4">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="material-symbols-outlined text-secondary animate-pulse fill-icon">auto_awesome</span>
                <span class="font-label-md text-label-md text-secondary uppercase tracking-[0.2em]">Neural Recommendation Engine</span>
              </div>
              <h2 class="font-display-sm text-display-sm text-white tracking-tighter">Your Next Mission</h2>
              <p class="font-body-md text-body-md text-on-surface-variant mt-2 max-w-lg">Based on your interest in <span class="text-primary font-bold">${query || "movies"}</span>, our AI recommends these mind-bending explorations into consciousness and reality.</p>
            </div>
            <button class="px-8 py-3 rounded-full bg-primary-container text-white font-label-md text-label-md hover:scale-105 transition-all shadow-lg shadow-primary-container/30 active:scale-95" onclick="window.location.hash='#movie/blade-runner-2049'">
              DISCOVER ALL
            </button>
          </div>
          
          <!-- Bento Grid Layout for AI Recs -->
          <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-gutter h-auto md:h-[600px]">
            <!-- Feature Rec (Blade Runner 2049) -->
            <div class="md:col-span-2 md:row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl" onclick="window.location.hash='#movie/blade-runner-2049'">
              <img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCydFeAm8Zf-OF4Z94kdgHE9BT8x4_0GO0sYquVvbTYBYsNGS2QJR4akCjCwbalMAo8rxufqpP_w6su9IyHG8GSYkDkHJcYcO9-kGBb3Q8RG2NOZWU8skFfOGmCuLwralfGn6qrAAmZs56yFiQMJW74g9bbCZ5M0ywhcEMHoqVIimB5qfrU5euTk1NNhRU4GrzqWlF_NHv4n_xNMo3GxLtd_1lOGcazuLdBGZXFYqKR6UfSRgI0ozvOBC9cCCYL0wQIlB4Wc1yaR487" alt="Blade Runner 2049"/>
              <div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent p-md flex flex-col justify-end">
                <div class="bg-primary/20 backdrop-blur-md border border-primary/30 rounded-lg px-4 py-2 w-fit mb-4">
                  <span class="font-label-sm text-label-sm text-primary uppercase">98% Match Logic</span>
                </div>
                <h3 class="font-display-sm text-display-sm text-white mb-2">Blade Runner 2049</h3>
                <p class="font-body-md text-body-md text-on-surface-variant line-clamp-2">A visually breathtaking exploration of identity and humanity in a decaying future. Perfect for fans of complex world-building.</p>
              </div>
            </div>
            
            <!-- Small Rec 1 (The Prestige) -->
            <div class="md:col-span-2 group relative rounded-2xl overflow-hidden cursor-pointer glass-card" onclick="window.location.hash='#movie/the-prestige'">
              <div class="flex h-full">
                <div class="w-1/3 h-full">
                  <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYReq-NvNlWtgRJWE10L_ad_LENYVng9XB8YANOAj3KVrIka31ewp6YeL4PNopktOnkTiMaW1Ef7d_n1KtrSQHLUu_z1gOI9BEMS0C9LEdq8nVjsJ9YeGnxKxzJuuzgbhQwteIpLCa6g-Tq3vU0htoONsbwQAfaCCfUT7Fs6KGPUsOjIL4Qm5qo3QgGRi4UFkzOSUBeCZ_bsJTJe_5xkZB4iK3jPE3nDRr-alD6FKPtCCu-SonmQdBDY9419VFLSZ00YZLg3XOh-0D" alt="The Prestige"/>
                </div>
                <div class="w-2/3 p-6 flex flex-col justify-center">
                  <span class="font-label-sm text-label-sm text-secondary mb-2 uppercase">Recommended Director</span>
                  <h4 class="font-headline-lg-mobile text-headline-lg-mobile text-white mb-2">The Prestige</h4>
                  <p class="font-body-md text-body-md text-on-surface-variant line-clamp-1">Another Nolan masterpiece of illusion.</p>
                  <div class="flex gap-2 mt-4">
                    <div class="w-2 h-2 rounded-full bg-primary"></div>
                    <div class="w-2 h-2 rounded-full bg-primary/40"></div>
                    <div class="w-2 h-2 rounded-full bg-primary/40"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Small Rec 2 (Source Code) -->
            <div class="md:col-span-1 group relative rounded-2xl overflow-hidden cursor-pointer glass-card" onclick="window.location.hash='#movie/source-code'">
              <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyDrUbwNE8T1x536M-jZ760Gn3-XnyXGTPartWtVVipCKjK3eQcR05VeiN7amcXrcl3VYV0UTQ9OlptxPhmHZtLc1ST6hIFd0hzFYVeYdmky7nndn4B8ezeK32UY8UGwqWJ0uOHURb0-hVyknkwrDkcgmOVChn1NycE_8teTr_ck_YQsDcGy9nziQXKjmVmZahsAlyjf-6E7JrZnMt77GXXwoywD5ZfrPkBBUFTUkgyMsm2-hVNnBtuV-_Mm2xz2iwvZmWGj4msMIU" alt="Source Code"/>
              <div class="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
                <h4 class="font-label-md text-label-md text-white">Source Code</h4>
              </div>
            </div>
            
            <!-- Small Rec 3 (Coherence) -->
            <div class="md:col-span-1 group relative rounded-2xl overflow-hidden cursor-pointer glass-card" onclick="window.location.hash='#movie/coherence'">
              <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM2IrMWn6Nr6HsBdoQrQE1Za593svGHd-DO4LWgf5CrfMiRiX_5i4RqiorawVJGxB5SGOIjn1DcCk6-qsHAv_onLbLKYBdjHTVX0b6c2dnOqBubYtuSbErdqd04d2xvK2n-y0ynCe6rPcxSDLkxewI0dy61ENnth1FNnt_bY9oTT29C7k-mKmek2Z99eCzKa9AxJOopDBioFFFOjhrQdclFtjmf-EqiwbzxxQ9plX60CC7Eye1l2nWBToZKSsLakymtIl6O3a-orwr" alt="Coherence"/>
              <div class="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
                <h4 class="font-label-md text-label-md text-white">Coherence</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Refine Tags for refinement -->
      <section class="mt-xl">
        <h3 class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-6">Refine Results</h3>
        <div class="flex flex-wrap gap-4">
          ${refineTagsHtml}
        </div>
      </section>
    </main>
  `;

  // Attach search refinement event listeners
  document.querySelectorAll('.refine-tag-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tag = e.target.getAttribute('data-tag');
      
      // Update form values
      document.getElementById('search-input').value = tag;
      document.getElementById('mobile-search-input').value = tag;
      
      // Navigate to refined search
      window.location.hash = `#search?q=${encodeURIComponent(tag)}`;
    });
  });
}

// 4. WATCHLIST VIEW RENDERER
function renderWatchlist() {
  const container = document.getElementById('app-view');
  
  const watchlistMovies = movies.filter(m => state.watchlist.includes(m.id));
  let gridCards = "";

  if (watchlistMovies.length > 0) {
    watchlistMovies.forEach(m => {
      gridCards += `
        <div class="group relative cursor-pointer" onclick="window.location.hash='#movie/${m.id}'">
          <div class="aspect-[2/3] rounded-xl overflow-hidden glass-card transition-all duration-300 group-hover:scale-105 movie-poster-shadow">
            <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
              <span class="text-secondary text-label-sm font-label-sm">${m.genre[0].toUpperCase()} • ${m.year}</span>
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="font-label-md text-label-md text-on-surface">${m.title}</span>
            <button class="text-outline hover:text-tertiary transition-colors flex items-center" onclick="event.stopPropagation(); window.toggleWatchlistGlobal('${m.id}')">
              <span class="material-symbols-outlined text-md">delete</span>
            </button>
          </div>
        </div>
      `;
    });
  } else {
    gridCards = `
      <div class="col-span-full py-xl text-center">
        <span class="material-symbols-outlined text-outline text-5xl mb-4">bookmark_border</span>
        <p class="text-on-surface-variant">Your Watchlist is empty.</p>
        <p class="text-outline text-xs mt-1 mb-6">Find movies and add them to save for later.</p>
        <button onclick="window.location.hash='#home'" class="bg-primary-container text-white px-6 py-2 rounded-full font-label-md hover:scale-105 transition-all">Start Discovering</button>
      </div>
    `;
  }

  container.innerHTML = `
    <main class="pt-32 pb-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto relative z-10">
      <header class="mb-lg">
        <p class="font-label-md text-label-md text-primary mb-2 uppercase tracking-widest">Saved Collection</p>
        <h1 class="font-display-sm text-display-sm md:font-display-lg md:text-display-lg text-on-surface tracking-tighter">Your Watchlist</h1>
      </header>
      <section class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-gutter">
        ${gridCards}
      </section>
    </main>
  `;
}

// 5. GENRE MOVIES VIEW RENDERER
function renderGenreMovies() {
  const container = document.getElementById('app-view');
  
  // List all movies
  let gridCards = "";
  movies.forEach(m => {
    gridCards += `
      <div class="group relative cursor-pointer" onclick="window.location.hash='#movie/${m.id}'">
        <div class="aspect-[2/3] rounded-xl overflow-hidden glass-card transition-all duration-300 group-hover:scale-105 movie-poster-shadow">
          <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
            <span class="text-secondary text-label-sm font-label-sm">${m.genre[0].toUpperCase()} • ${m.year}</span>
          </div>
        </div>
        <div class="mt-4 flex items-center justify-between">
          <span class="font-label-md text-label-md text-on-surface">${m.title}</span>
          <span class="font-label-sm text-label-sm text-secondary">${m.rating}</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <main class="pt-32 pb-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto relative z-10">
      <header class="mb-lg">
        <p class="font-label-md text-label-md text-primary mb-2 uppercase tracking-widest">Cinematic Catalogue</p>
        <h1 class="font-display-sm text-display-sm md:font-display-lg md:text-display-lg text-on-surface tracking-tighter">All Movies</h1>
      </header>
      <section class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-gutter">
        ${gridCards}
      </section>
    </main>
  `;
}

// 6. SERIES VIEW RENDERER
function renderSeries() {
  const container = document.getElementById('app-view');
  
  // Filter for items labeled Series or having episodic tags (like Shadow Protocol, Redline District)
  const seriesList = movies.filter(m => m.id === 'shadow-protocol' || m.id === 'redline-district' || m.id === 'atlantis-rising');
  let gridCards = "";
  
  seriesList.forEach(m => {
    gridCards += `
      <div class="group relative cursor-pointer" onclick="window.location.hash='#movie/${m.id}'">
        <div class="aspect-[2/3] rounded-xl overflow-hidden glass-card transition-all duration-300 group-hover:scale-105 movie-poster-shadow">
          <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
            <span class="text-secondary text-label-sm font-label-sm">${m.genre[0].toUpperCase()} • ${m.year}</span>
          </div>
        </div>
        <div class="mt-4 flex items-center justify-between">
          <span class="font-label-md text-label-md text-on-surface">${m.title}</span>
          <span class="font-label-sm text-label-sm text-secondary">${m.rating}</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <main class="pt-32 pb-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto relative z-10">
      <header class="mb-lg">
        <p class="font-label-md text-label-md text-primary mb-2 uppercase tracking-widest">Serial Discoveries</p>
        <h1 class="font-display-sm text-display-sm md:font-display-lg md:text-display-lg text-on-surface tracking-tighter">TV Series & Shows</h1>
      </header>
      <section class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-gutter">
        ${gridCards}
      </section>
    </main>
  `;
}

// Global Hooks
window.toggleWatchlistGlobal = toggleWatchlist;

// Event Listeners setup
document.addEventListener('DOMContentLoaded', () => {
  // Navigation scrolling transitions
  const nav = document.getElementById('top-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('shadow-xl', 'bg-surface/95');
      nav.classList.remove('bg-surface/80');
    } else {
      nav.classList.remove('shadow-xl', 'bg-surface/95');
      nav.classList.add('bg-surface/80');
    }
  });

  // Notifications dropdown toggling
  const notifBtn = document.getElementById('notification-btn');
  const notifDropdown = document.getElementById('notification-dropdown');
  const notifBadge = document.getElementById('notif-badge');
  const clearNotif = document.getElementById('notif-clear');
  const notifList = document.getElementById('notif-list');

  notifBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    notifDropdown.classList.toggle('active');
    
    // Clear badge visually
    if (notifBadge) notifBadge.classList.add('hidden');
  });

  clearNotif.addEventListener('click', (e) => {
    e.stopPropagation();
    notifList.innerHTML = `<p class="text-xs text-on-surface-variant text-center py-4">No notifications</p>`;
    state.notificationsCount = 0;
  });

  document.addEventListener('click', () => {
    notifDropdown.classList.remove('active');
  });

  // Desktop Search Submission
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
      window.location.hash = `#search?q=${encodeURIComponent(query)}`;
    }
  });

  // Mobile Search Overlay toggling
  const mobSearchBtn = document.getElementById('mobile-search-btn');
  const mobSearchBar = document.getElementById('mobile-search-bar');
  const mobSearchInput = document.getElementById('mobile-search-input');
  const mobSearchSubmit = document.getElementById('mobile-search-submit');

  mobSearchBtn.addEventListener('click', () => {
    const isActive = mobSearchBar.classList.contains('opacity-100');
    if (isActive) {
      mobSearchBar.classList.add('opacity-0', '-translate-y-full', 'pointer-events-none');
      mobSearchBar.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
    } else {
      mobSearchBar.classList.remove('opacity-0', '-translate-y-full', 'pointer-events-none');
      mobSearchBar.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
      mobSearchInput.focus();
    }
  });

  mobSearchSubmit.addEventListener('click', () => {
    const query = mobSearchInput.value.trim();
    if (query) {
      window.location.hash = `#search?q=${encodeURIComponent(query)}`;
      mobSearchBar.classList.add('opacity-0', '-translate-y-full', 'pointer-events-none');
      mobSearchBar.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
    }
  });

  mobSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      mobSearchSubmit.click();
    }
  });

  // Profile click simulation (redirect to watchlist as bookmark page)
  document.getElementById('profile-btn').addEventListener('click', () => {
    window.location.hash = '#watchlist';
  });

  // Initial Router invoke
  window.addEventListener('hashchange', router);
  router();
});

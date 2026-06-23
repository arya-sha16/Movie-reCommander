import { movies } from './movies-db.js';

// Application State
const state = {
  profile: localStorage.getItem('nm_profile') || null,
  watchlist: [],
  searchQuery: "",
  notificationsCount: 3,
  currentModalMovieId: null,
  activeTab: 'episodes',
  selectedSeason: 1,
};

// Notification database
const notifications = [
  { id: 1, type: 'recommend', text: 'New titles added to our database', time: 'Just now', icon: 'auto_awesome' },
  { id: 2, type: 'watchlist', text: 'Interstellar is still in My List', time: '2 hours ago', icon: 'bookmark' },
  { id: 3, type: 'stream', text: 'Dune: Part Two now on Max', time: 'Yesterday', icon: 'stream' }
];

const profileAvatars = {
  'Commander': { color: '#E50914', char: 'C' },
  'Guest': { color: '#00A8E8', char: 'G' },
  'Kids': { color: '#FFC72C', char: 'K' }
};

// --- Profile Management ---

function checkProfile() {
  const profileSelector = document.getElementById('profile-selector-view');
  if (!state.profile) {
    profileSelector.style.display = 'flex';
    document.getElementById('top-nav').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
  } else {
    profileSelector.style.display = 'none';
    document.getElementById('top-nav').style.display = 'flex';
    document.querySelector('footer').style.display = 'flex';
    loadProfileState();
  }
}

function loadProfileState() {
  state.watchlist = JSON.parse(localStorage.getItem(`nm_watchlist_${state.profile}`)) ||
    (state.profile === 'Commander' ? ['interstellar', 'ex-machina', 'cyberpunk-edgerunners'] : []);

  const avatar = document.getElementById('nav-avatar');
  if (avatar && profileAvatars[state.profile]) {
    avatar.innerText = profileAvatars[state.profile].char;
    avatar.style.backgroundColor = profileAvatars[state.profile].color;
  }
}

function saveProfileState() {
  localStorage.setItem(`nm_watchlist_${state.profile}`, JSON.stringify(state.watchlist));
}

function switchProfile(profileName) {
  state.profile = profileName;
  localStorage.setItem('nm_profile', profileName);
  checkProfile();
  closeDetailModal();
  window.location.hash = '#home';
  router();
}

function signOut() {
  localStorage.removeItem('nm_profile');
  state.profile = null;
  checkProfile();
}

// --- Navigation helper ---

function updateNavLinks(activeRoute) {
  ['nav-home', 'nav-movies', 'nav-series', 'nav-watchlist'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = "text-on-surface-variant hover:text-neutral-300 transition-colors font-normal cursor-pointer";
  });
  ['mobile-nav-home', 'mobile-nav-movies', 'mobile-nav-series', 'mobile-nav-watchlist'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = "flex flex-col items-center text-neutral-400";
  });

  let targetId = "";
  let mobileTargetId = "";
  if (activeRoute === 'home') { targetId = 'nav-home'; mobileTargetId = 'mobile-nav-home'; }
  else if (activeRoute === 'movies') { targetId = 'nav-movies'; mobileTargetId = 'mobile-nav-movies'; }
  else if (activeRoute === 'series') { targetId = 'nav-series'; mobileTargetId = 'mobile-nav-series'; }
  else if (activeRoute === 'watchlist') { targetId = 'nav-watchlist'; mobileTargetId = 'mobile-nav-watchlist'; }

  const el = document.getElementById(targetId);
  if (el) el.className = "text-on-surface hover:text-white transition-colors font-bold border-b-2 border-primary pb-1 cursor-pointer";
  const mobEl = document.getElementById(mobileTargetId);
  if (mobEl) mobEl.className = "flex flex-col items-center text-primary";
}

// --- Toast alert ---

function showToast(message, isSuccess = true) {
  const toast = document.getElementById('toast-alert');
  const toastMsg = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');
  toastMsg.innerText = message;
  if (isSuccess) {
    toast.style.background = "#E50914";
    toastIcon.innerText = "check_circle";
  } else {
    toast.style.background = "#242424";
    toastIcon.innerText = "cancel";
  }
  toast.classList.add('active');
  setTimeout(() => { toast.classList.remove('active'); }, 3000);
}

// --- Watchlist Action ---

function toggleWatchlist(movieId) {
  const index = state.watchlist.indexOf(movieId);
  let message = "";
  if (index === -1) {
    state.watchlist.push(movieId);
    message = "Added to My List";
  } else {
    state.watchlist.splice(index, 1);
    message = "Removed from My List";
  }
  saveProfileState();
  showToast(message);
  const hash = window.location.hash.slice(1) || 'home';
  if (hash === 'watchlist') router();
  if (state.currentModalMovieId === movieId) updateModalWatchlistButton(movieId);
}

// --- Streaming Platform Badges ---

function renderStreamingBadges(movie) {
  if (!movie.streamingOn || movie.streamingOn.length === 0) {
    return `<p class="text-neutral-500 text-sm italic">No streaming info available</p>`;
  }
  return movie.streamingOn.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer"
      class="streaming-badge group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-700 hover:border-white/60 bg-neutral-900 hover:bg-neutral-800 transition-all duration-200 active:scale-95 shadow-md"
      style="border-left: 3px solid ${s.color};"
      title="Watch on ${s.platform}">
      <span class="platform-logo text-xs font-black" style="color: ${s.color};">${s.logo}</span>
      <span class="text-sm font-semibold text-white group-hover:text-white truncate">${s.platform}</span>
      <span class="material-symbols-outlined text-neutral-500 group-hover:text-white text-sm ml-auto transition-colors">open_in_new</span>
    </a>
  `).join('');
}

// --- Detail Modal Controls ---

function openDetailModal(movieId) {
  state.currentModalMovieId = movieId;
  state.activeTab = 'episodes';
  state.selectedSeason = 1;
  const modal = document.getElementById('netflix-modal');
  renderModalContent();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
  const modal = document.getElementById('netflix-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
  state.currentModalMovieId = null;
  const hash = window.location.hash.slice(1);
  if (hash.startsWith('movie/')) window.location.hash = '#home';
}

function updateModalWatchlistButton(movieId) {
  const btn = document.getElementById('modal-watchlist-btn');
  if (!btn) return;
  const isIncluded = state.watchlist.includes(movieId);
  btn.innerHTML = `
    <span class="material-symbols-outlined !text-xl">${isIncluded ? 'check' : 'add'}</span>
    <span>${isIncluded ? 'My List' : 'Add to List'}</span>
  `;
}

function renderModalContent() {
  const container = document.querySelector('.netflix-modal-content');
  const movie = movies.find(m => m.id === state.currentModalMovieId);
  if (!movie) return;

  const isIncluded = state.watchlist.includes(movie.id);

  container.innerHTML = `
    <!-- Close button -->
    <button class="modal-close-btn" id="modal-close-trigger">
      <span class="material-symbols-outlined text-xl">close</span>
    </button>
    
    <!-- Hero Banner image -->
    <div class="relative w-full aspect-[16/9] md:aspect-[21/9]">
      <img class="w-full h-full object-cover" src="${movie.backdrop}" alt="${movie.title}"/>
      <div class="absolute inset-0 modal-banner-gradient"></div>
      <div class="absolute bottom-6 left-6 md:left-12 right-6 z-10 flex flex-col gap-3">
        <h2 class="font-title text-2xl md:text-4xl font-extrabold text-white drop-shadow-md select-none">${movie.title}</h2>
        <div class="flex items-center gap-3">
          <button id="modal-watchlist-btn" class="border border-neutral-500 hover:border-white hover:bg-white/10 text-white px-4 py-2.5 rounded font-semibold flex items-center gap-2 transition-all text-sm active:scale-95">
            <span class="material-symbols-outlined !text-xl">${isIncluded ? 'check' : 'add'}</span>
            <span>${isIncluded ? 'My List' : 'Add to List'}</span>
          </button>
          <button id="modal-like-btn" class="w-10 h-10 border border-neutral-500 hover:border-white rounded-full flex items-center justify-center text-white active:scale-95 transition-all">
            <span class="material-symbols-outlined text-lg">thumb_up</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Body contents -->
    <div class="p-6 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 text-on-surface">
      <!-- Left Column -->
      <div class="md:col-span-8 flex flex-col gap-6">
        <div class="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium text-on-surface-variant">
          <span class="text-green-500 font-bold">⭐ ${movie.rating} IMDb</span>
          <span>${movie.year}</span>
          <span class="border border-neutral-700 px-1.5 py-0.5 rounded text-[10px] uppercase">${movie.type === 'series' ? 'TV-MA' : 'PG-13'}</span>
          <span>${movie.duration}</span>
        </div>
        
        <p class="text-sm md:text-base leading-relaxed text-neutral-300">${movie.synopsis}</p>

        <!-- WHERE TO WATCH Section -->
        <div class="mt-2">
          <div class="flex items-center gap-2 mb-4">
            <span class="material-symbols-outlined text-primary text-xl">live_tv</span>
            <h3 class="text-white font-bold text-base uppercase tracking-wider">Where to Watch</h3>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${renderStreamingBadges(movie)}
          </div>
        </div>

        <!-- Dynamic Tabs Section -->
        <div class="mt-2 border-b border-neutral-800 flex gap-4 text-sm font-semibold">
          ${movie.type === 'series' ? `<button class="modal-tab-btn ${state.activeTab === 'episodes' ? 'active' : ''}" data-tab="episodes">Episodes</button>` : ''}
          <button class="modal-tab-btn ${state.activeTab === 'similar' || (movie.type !== 'series' && state.activeTab === 'episodes') ? 'active' : ''}" data-tab="similar">More Like This</button>
          <button class="modal-tab-btn ${state.activeTab === 'about' ? 'active' : ''}" data-tab="about">About</button>
        </div>
        <div id="modal-tab-content" class="mt-4"></div>
      </div>

      <!-- Right Column -->
      <div class="md:col-span-4 flex flex-col gap-5 text-sm">
        <div>
          <span class="text-neutral-500 font-semibold block mb-1">Cast:</span>
          <p class="text-neutral-300 leading-snug">${movie.cast ? movie.cast.map(c => c.name).join(', ') : 'Various Artists'}</p>
        </div>
        <div>
          <span class="text-neutral-500 font-semibold block mb-1">Genres:</span>
          <p class="text-neutral-300 leading-snug">${movie.genre.join(', ')}</p>
        </div>
        <div>
          <span class="text-neutral-500 font-semibold block mb-1">Director:</span>
          <p class="text-neutral-300 leading-snug">${movie.director}</p>
        </div>
        <!-- Available on (mini badges) -->
        <div>
          <span class="text-neutral-500 font-semibold block mb-2">Available on:</span>
          <div class="flex flex-wrap gap-2">
            ${movie.streamingOn ? movie.streamingOn.map(s => `
              <span class="text-[11px] font-bold px-2 py-1 rounded-full" style="background:${s.color}22; color:${s.color}; border: 1px solid ${s.color}44;">${s.platform}</span>
            `).join('') : '<span class="text-neutral-600 text-xs">—</span>'}
          </div>
        </div>
      </div>
    </div>
  `;

  if (movie.type !== 'series' && state.activeTab === 'episodes') state.activeTab = 'similar';
  renderTabContent();

  document.getElementById('modal-close-trigger').addEventListener('click', closeDetailModal);
  document.getElementById('modal-watchlist-btn').addEventListener('click', () => toggleWatchlist(movie.id));

  const likeBtn = document.getElementById('modal-like-btn');
  likeBtn.addEventListener('click', () => {
    const icon = likeBtn.querySelector('span');
    if (icon.innerText === 'thumb_up') {
      icon.innerText = 'task_alt';
      icon.classList.add('fill-icon');
      showToast("Added to Liked Collection");
    } else {
      icon.innerText = 'thumb_up';
      icon.classList.remove('fill-icon');
      showToast("Removed from Liked Collection");
    }
  });

  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      state.activeTab = e.target.getAttribute('data-tab');
      document.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderTabContent();
    });
  });
}

function renderTabContent() {
  const tabContent = document.getElementById('modal-tab-content');
  const movie = movies.find(m => m.id === state.currentModalMovieId);
  if (!movie || !tabContent) return;

  if (state.activeTab === 'episodes' && movie.type === 'series') {
    let seasonOptions = "";
    movie.seasons.forEach(s => {
      seasonOptions += `<option value="${s.seasonNumber}" ${state.selectedSeason === s.seasonNumber ? 'selected' : ''}>Season ${s.seasonNumber}</option>`;
    });

    const activeSeason = movie.seasons.find(s => s.seasonNumber === state.selectedSeason) || movie.seasons[0];
    let episodesHtml = "";
    activeSeason.episodes.forEach(ep => {
      episodesHtml += `
        <div class="flex flex-col sm:flex-row items-start gap-4 py-4 border-b border-neutral-800 px-2 rounded">
          <div class="relative w-full sm:w-40 aspect-video rounded overflow-hidden flex-shrink-0 bg-neutral-900 border border-neutral-800">
            <img class="w-full h-full object-cover" src="${ep.thumbnail || movie.backdrop}" alt="${ep.title}"/>
          </div>
          <div class="flex-grow">
            <div class="flex justify-between items-baseline mb-1">
              <h4 class="text-sm font-bold text-white">${ep.episodeNumber}. ${ep.title}</h4>
              <span class="text-xs text-neutral-500 ml-2 flex-shrink-0">${ep.runtime}</span>
            </div>
            <p class="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-3">${ep.synopsis}</p>
            <div class="flex flex-wrap gap-2">
              ${movie.streamingOn ? movie.streamingOn.map(s => `
                <a href="${s.url}" target="_blank" rel="noopener noreferrer"
                  class="flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full border transition-all hover:scale-105 active:scale-95"
                  style="border-color:${s.color}66; color:${s.color}; background:${s.color}11;">
                  Watch on ${s.platform}
                  <span class="material-symbols-outlined" style="font-size:12px;">open_in_new</span>
                </a>
              `).join('') : ''}
            </div>
          </div>
        </div>
      `;
    });

    tabContent.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <select id="season-selector" class="bg-neutral-900 text-white border border-neutral-800 rounded px-3 py-1 text-sm font-semibold outline-none focus:border-primary">
          ${seasonOptions}
        </select>
        <span class="text-xs text-neutral-500">${activeSeason.episodes.length} Episodes</span>
      </div>
      <div class="flex flex-col max-h-[400px] overflow-y-auto pr-1 hide-scrollbar">
        ${episodesHtml}
      </div>
    `;
    document.getElementById('season-selector').addEventListener('change', (e) => {
      state.selectedSeason = parseInt(e.target.value);
      renderTabContent();
    });

  } else if (state.activeTab === 'similar') {
    const similarMovies = movies.filter(m => m.id !== movie.id && m.genre.some(g => movie.genre.includes(g))).slice(0, 6);
    let cards = "";
    similarMovies.forEach(sm => {
      cards += `
        <div class="bg-neutral-900 rounded overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-all cursor-pointer flex flex-col h-full group" onclick="window.openMovieDetailModal('${sm.id}')">
          <div class="relative aspect-video">
            <img class="w-full h-full object-cover" src="${sm.backdrop}" alt="${sm.title}"/>
            <div class="absolute top-2 right-2 bg-black/60 px-1.5 py-0.5 rounded text-[10px] font-bold text-neutral-300">${sm.year}</div>
          </div>
          <div class="p-3 flex-grow flex flex-col justify-between">
            <div>
              <h4 class="text-sm font-bold text-white line-clamp-1 mb-1">${sm.title}</h4>
              <p class="text-xs text-neutral-400 line-clamp-2 mb-2 leading-relaxed">${sm.synopsis}</p>
            </div>
            <div class="flex flex-wrap gap-1.5 mt-1">
              ${sm.streamingOn ? sm.streamingOn.slice(0,2).map(s => `
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded" style="background:${s.color}22; color:${s.color};">${s.platform}</span>
              `).join('') : ''}
            </div>
          </div>
        </div>
      `;
    });
    tabContent.innerHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">${cards}</div>`;

  } else if (state.activeTab === 'about') {
    let castList = "";
    if (movie.cast) {
      movie.cast.forEach(a => {
        castList += `
          <div class="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded p-2 hover:bg-neutral-800/50 transition-colors">
            <img class="w-10 h-10 object-cover rounded-sm" src="${a.image}" alt="${a.name}"/>
            <div>
              <p class="text-xs font-bold text-white">${a.name}</p>
              <p class="text-[10px] text-neutral-500">${a.character}</p>
            </div>
          </div>
        `;
      });
    }
    tabContent.innerHTML = `
      <div class="flex flex-col gap-6 text-sm">
        <div class="flex flex-col gap-1.5">
          <h4 class="text-neutral-500 font-semibold text-xs uppercase tracking-wider">Creators / Team</h4>
          <p class="text-neutral-300">Director: <span class="text-white font-medium">${movie.director}</span></p>
          <p class="text-neutral-300">Writers: <span class="text-white font-medium">${movie.writers}</span></p>
        </div>
        <div class="flex flex-col gap-3">
          <h4 class="text-neutral-500 font-semibold text-xs uppercase tracking-wider">Full Cast</h4>
          <div class="grid grid-cols-2 gap-3">${castList || '<p class="text-neutral-400">Cast details not available.</p>'}</div>
        </div>
      </div>
    `;
  }
}

window.openMovieDetailModal = (id) => openDetailModal(id);

// --- View Renderers ---

// 1. HOME VIEW
function renderHome() {
  const container = document.getElementById('app-view');
  const heroMovie = movies.find(m => m.id === 'dune-part-two') || movies[0];
  const watchlistIcon = state.watchlist.includes(heroMovie.id) ? 'check' : 'add';
  const watchlistText = state.watchlist.includes(heroMovie.id) ? 'My List' : 'Add to List';

  // Trending Shelf
  let trendingCards = "";
  movies.filter(m => m.rating >= 8.4).forEach(m => {
    trendingCards += buildPosterCard(m);
  });

  // Action Shelf
  let actionCards = "";
  movies.filter(m => m.genre.includes('Action')).forEach(m => { actionCards += buildPosterCard(m); });

  // Sci-Fi Shelf
  let scifiCards = "";
  movies.filter(m => m.genre.includes('Sci-Fi')).forEach(m => { scifiCards += buildPosterCard(m); });

  // My List Shelf
  let myListCards = "";
  movies.filter(m => state.watchlist.includes(m.id)).forEach(m => { myListCards += buildPosterCard(m); });

  container.innerHTML = `
    <!-- Hero Section -->
    <section class="relative w-full h-[60vh] md:h-[85vh] flex items-end bg-black">
      <div class="absolute inset-0 z-0">
        <img class="w-full h-full object-cover opacity-70" src="${heroMovie.backdrop}" alt="${heroMovie.title}"/>
        <div class="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent"></div>
      </div>
      <div class="relative z-10 px-6 md:px-12 pb-12 w-full max-w-2xl select-none">
        <div class="flex items-center gap-3 mb-3">
          <span class="bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wider">Trending Now</span>
          <span class="text-neutral-300 text-xs font-semibold">${heroMovie.year} • ${heroMovie.genre.join(' • ')}</span>
        </div>
        <h1 class="font-title text-3xl md:text-6xl font-black mb-4 leading-tight tracking-tight text-white drop-shadow-lg">${heroMovie.title}</h1>
        <p class="text-xs md:text-sm text-neutral-300 mb-5 line-clamp-3 md:line-clamp-none max-w-xl leading-relaxed">${heroMovie.synopsis}</p>
        <!-- Streaming mini badges on hero -->
        <div class="flex flex-wrap gap-2 mb-6">
          ${heroMovie.streamingOn ? heroMovie.streamingOn.map(s => `
            <span class="text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm" style="background:${s.color}33; color:${s.color}; border: 1px solid ${s.color}55;">${s.platform}</span>
          `).join('') : ''}
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <button id="hero-watch-btn" class="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded flex items-center gap-2 font-bold hover:scale-105 active:scale-95 transition-all text-sm shadow-md shadow-primary/30">
            <span class="material-symbols-outlined text-lg">live_tv</span>
            Where to Watch
          </button>
          <button id="hero-info-btn" class="bg-neutral-600/60 hover:bg-neutral-600/80 text-white px-6 py-2.5 rounded flex items-center gap-2 font-bold hover:scale-105 active:scale-95 transition-all text-sm">
            <span class="material-symbols-outlined text-lg">info</span>
            More Info
          </button>
        </div>
      </div>
    </section>
    
    <!-- Home Shelves -->
    <main class="relative z-20 px-6 md:px-12 pb-16 flex flex-col gap-10 mt-6">
      <!-- Popular on whereMoviFound -->
      <section>
        <div class="flex justify-between items-end mb-3">
          <h2 class="text-lg md:text-xl font-bold font-title text-white tracking-wide">Popular on whereMoviFound</h2>
        </div>
        <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-2">${trendingCards}</div>
      </section>

      <!-- Action & Adventure -->
      <section>
        <div class="flex justify-between items-end mb-3">
          <h2 class="text-lg md:text-xl font-bold font-title text-white tracking-wide">Action & Adventure</h2>
        </div>
        <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-2">${actionCards}</div>
      </section>

      <!-- Sci-Fi Masterpieces -->
      <section>
        <div class="flex justify-between items-end mb-3">
          <h2 class="text-lg md:text-xl font-bold font-title text-white tracking-wide">Sci-Fi Masterpieces</h2>
        </div>
        <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-2">${scifiCards}</div>
      </section>

      <!-- My List -->
      ${myListCards ? `
        <section>
          <div class="flex justify-between items-end mb-3">
            <h2 class="text-lg md:text-xl font-bold font-title text-white tracking-wide">My List</h2>
            <a class="text-primary font-bold text-xs hover:underline" href="#watchlist">View All</a>
          </div>
          <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-2">${myListCards}</div>
        </section>
      ` : ''}
    </main>
  `;

  document.getElementById('hero-watch-btn').onclick = () => openDetailModal(heroMovie.id);
  document.getElementById('hero-info-btn').onclick = () => openDetailModal(heroMovie.id);
}

function buildPosterCard(m) {
  const platformDots = m.streamingOn ? m.streamingOn.slice(0, 3).map(s =>
    `<span class="w-2 h-2 rounded-full flex-shrink-0" style="background:${s.color};" title="${s.platform}"></span>`
  ).join('') : '';
  return `
    <div class="flex-shrink-0 w-36 md:w-48 group cursor-pointer" onclick="window.openMovieDetailModal('${m.id}')">
      <div class="relative aspect-[2/3] rounded-sm overflow-hidden mb-2 border border-neutral-800 transition-all duration-300 group-hover:scale-105 shadow-lg">
        <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}"/>
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
          <span class="text-[10px] font-bold text-green-400 mb-0.5">⭐ ${m.rating}</span>
          <span class="text-[10px] text-neutral-300 font-semibold truncate">${m.genre[0]} • ${m.year}</span>
        </div>
      </div>
      <h3 class="font-bold text-white text-xs md:text-sm group-hover:text-primary transition-colors truncate mb-1">${m.title}</h3>
      <div class="flex items-center gap-1.5">${platformDots}</div>
    </div>
  `;
}

// 2. SEARCH VIEW
function renderSearch(query) {
  const container = document.getElementById('app-view');
  state.searchQuery = query;
  const queryLower = query.toLowerCase();
  const searchResults = movies.filter(m =>
    m.title.toLowerCase().includes(queryLower) ||
    m.genre.some(g => g.toLowerCase().includes(queryLower)) ||
    m.synopsis.toLowerCase().includes(queryLower) ||
    (m.streamingOn && m.streamingOn.some(s => s.platform.toLowerCase().includes(queryLower)))
  );

  let resultsGrid = "";
  if (searchResults.length > 0) {
    searchResults.forEach(m => {
      resultsGrid += `
        <div class="group relative cursor-pointer flex flex-col gap-2" onclick="window.openMovieDetailModal('${m.id}')">
          <div class="aspect-[2/3] rounded-sm overflow-hidden border border-neutral-800 transition-all duration-300 group-hover:scale-105 shadow-lg">
            <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}"/>
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
              <p class="text-[10px] text-primary mb-0.5 font-bold uppercase">${m.year} • ${m.genre[0]}</p>
              <h3 class="font-bold text-white text-xs md:text-sm truncate leading-tight">${m.title}</h3>
            </div>
          </div>
          <div class="flex items-center justify-between text-xs px-0.5">
            <span class="font-semibold text-neutral-300 truncate w-3/4">${m.title}</span>
            <span class="text-green-500 font-bold">${m.rating}</span>
          </div>
          <div class="flex flex-wrap gap-1 px-0.5">
            ${m.streamingOn ? m.streamingOn.slice(0,2).map(s => `
              <span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style="background:${s.color}22; color:${s.color};">${s.platform}</span>
            `).join('') : ''}
          </div>
        </div>
      `;
    });
  } else {
    resultsGrid = `
      <div class="col-span-full py-20 text-center">
        <p class="text-neutral-400 text-sm mb-4">No matching titles found for "${query}".</p>
        <button onclick="window.location.hash='#home'" class="bg-primary text-white px-6 py-2 rounded font-semibold text-sm hover:bg-primary-hover">Return Home</button>
      </div>
    `;
  }

  container.innerHTML = `
    <main class="pt-24 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto select-none">
      <header class="mb-8">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">Search results for</p>
        <h1 class="font-title text-2xl md:text-4xl font-extrabold text-white tracking-tight">"${query}"</h1>
        <p class="text-neutral-500 text-xs mt-2">You can also search by streaming platform (e.g. "Netflix", "Max")</p>
      </header>
      <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">${resultsGrid}</section>
    </main>
  `;
}

// 3. WATCHLIST VIEW
function renderWatchlist() {
  const container = document.getElementById('app-view');
  const watchlistMovies = movies.filter(m => state.watchlist.includes(m.id));
  let gridCards = "";
  if (watchlistMovies.length > 0) {
    watchlistMovies.forEach(m => {
      gridCards += `
        <div class="group relative cursor-pointer flex flex-col gap-2" onclick="window.openMovieDetailModal('${m.id}')">
          <div class="aspect-[2/3] rounded-sm overflow-hidden border border-neutral-800 transition-all duration-300 group-hover:scale-105 shadow-lg">
            <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}"/>
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
              <span class="text-[10px] text-neutral-300 font-semibold truncate">${m.genre[0]} • ${m.year}</span>
            </div>
          </div>
          <div class="flex items-center justify-between text-xs px-0.5">
            <span class="font-semibold text-neutral-300 truncate w-3/4">${m.title}</span>
            <button class="text-neutral-500 hover:text-primary transition-colors flex items-center" onclick="event.stopPropagation(); window.toggleWatchlistGlobal('${m.id}')" title="Remove from My List">
              <span class="material-symbols-outlined text-lg">delete</span>
            </button>
          </div>
          <div class="flex flex-wrap gap-1 px-0.5">
            ${m.streamingOn ? m.streamingOn.slice(0,3).map(s => `
              <span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style="background:${s.color}22; color:${s.color};">${s.platform}</span>
            `).join('') : ''}
          </div>
        </div>
      `;
    });
  } else {
    gridCards = `
      <div class="col-span-full py-20 text-center">
        <span class="material-symbols-outlined text-neutral-600 text-5xl mb-3">bookmark_border</span>
        <p class="text-neutral-400 text-sm">Your List is empty.</p>
        <p class="text-neutral-500 text-xs mt-1 mb-6">Find movies and add them to My List to save for later.</p>
        <button onclick="window.location.hash='#home'" class="bg-primary text-white px-6 py-2 rounded font-semibold text-sm hover:bg-primary-hover">Browse Titles</button>
      </div>
    `;
  }

  container.innerHTML = `
    <main class="pt-24 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto select-none">
      <header class="mb-8">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">Saved collection</p>
        <h1 class="font-title text-2xl md:text-4xl font-extrabold text-white tracking-tight">My List</h1>
      </header>
      <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">${gridCards}</section>
    </main>
  `;
}

// 4. MOVIES VIEW
function renderGenreMovies() {
  const container = document.getElementById('app-view');
  const moviesList = movies.filter(m => m.type === 'movie');
  let gridCards = "";
  moviesList.forEach(m => {
    gridCards += `
      <div class="group relative cursor-pointer flex flex-col gap-2" onclick="window.openMovieDetailModal('${m.id}')">
        <div class="aspect-[2/3] rounded-sm overflow-hidden border border-neutral-800 transition-all duration-300 group-hover:scale-105 shadow-lg">
          <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}"/>
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
            <span class="text-[10px] text-neutral-300 font-semibold truncate">${m.genre[0]} • ${m.year}</span>
          </div>
        </div>
        <div class="flex items-center justify-between text-xs px-0.5">
          <span class="font-semibold text-neutral-300 truncate w-3/4">${m.title}</span>
          <span class="text-green-500 font-bold">${m.rating}</span>
        </div>
        <div class="flex flex-wrap gap-1 px-0.5">
          ${m.streamingOn ? m.streamingOn.slice(0,2).map(s => `
            <span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style="background:${s.color}22; color:${s.color};">${s.platform}</span>
          `).join('') : ''}
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <main class="pt-24 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto select-none">
      <header class="mb-8">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">Cinematic Catalog</p>
        <h1 class="font-title text-2xl md:text-4xl font-extrabold text-white tracking-tight">Movies</h1>
      </header>
      <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">${gridCards}</section>
    </main>
  `;
}

// 5. SERIES VIEW
function renderSeries() {
  const container = document.getElementById('app-view');
  const seriesList = movies.filter(m => m.type === 'series');
  let gridCards = "";
  seriesList.forEach(m => {
    gridCards += `
      <div class="group relative cursor-pointer flex flex-col gap-2" onclick="window.openMovieDetailModal('${m.id}')">
        <div class="aspect-[2/3] rounded-sm overflow-hidden border border-neutral-800 transition-all duration-300 group-hover:scale-105 shadow-lg">
          <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}"/>
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
            <span class="text-[10px] text-neutral-300 font-semibold truncate">${m.genre[0]} • ${m.year}</span>
          </div>
        </div>
        <div class="flex items-center justify-between text-xs px-0.5">
          <span class="font-semibold text-neutral-300 truncate w-3/4">${m.title}</span>
          <span class="text-green-500 font-bold">${m.rating}</span>
        </div>
        <div class="flex flex-wrap gap-1 px-0.5">
          ${m.streamingOn ? m.streamingOn.slice(0,2).map(s => `
            <span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style="background:${s.color}22; color:${s.color};">${s.platform}</span>
          `).join('') : ''}
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <main class="pt-24 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto select-none">
      <header class="mb-8">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">Serial Broadcasts</p>
        <h1 class="font-title text-2xl md:text-4xl font-extrabold text-white tracking-tight">TV Series</h1>
      </header>
      <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">${gridCards}</section>
    </main>
  `;
}

// --- Router ---

const routes = { 'home': renderHome, 'search': renderSearch, 'watchlist': renderWatchlist, 'movies': renderGenreMovies, 'series': renderSeries };

function router() {
  if (!state.profile) { checkProfile(); return; }
  const hash = window.location.hash.slice(1) || 'home';
  let routeName = hash;
  let param = "";
  if (hash.includes('/')) { const parts = hash.split('/'); routeName = parts[0]; param = parts[1]; }
  else if (hash.includes('?')) { const parts = hash.split('?'); routeName = parts[0]; param = new URLSearchParams(parts[1]).get('q') || ""; }
  updateNavLinks(routeName);
  document.getElementById('notification-dropdown').classList.remove('active');

  if (routeName === 'movie') {
    let cleanMovieId = param;
    if (param.includes('?')) cleanMovieId = param.split('?')[0];
    if (!containerHasView()) renderHome();
    openDetailModal(cleanMovieId);
  } else {
    closeDetailModal();
    const renderer = routes[routeName] || renderHome;
    renderer(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function containerHasView() {
  const c = document.getElementById('app-view');
  return c && c.children.length > 0;
}

window.toggleWatchlistGlobal = toggleWatchlist;

// --- Init ---

document.addEventListener('DOMContentLoaded', () => {
  checkProfile();

  document.querySelectorAll('.profile-card').forEach(card => {
    card.addEventListener('click', () => {
      switchProfile(card.getAttribute('data-profile'));
    });
  });

  const nav = document.getElementById('top-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('solid', window.scrollY > 30);
  });

  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    window.location.hash = val ? `#search?q=${encodeURIComponent(val)}` : '#home';
  });

  document.getElementById('notif-clear').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('notif-list').innerHTML = `<p class="text-xs text-neutral-500 text-center py-4 select-none">No new notifications</p>`;
    const badge = document.getElementById('notif-badge');
    if (badge) badge.classList.add('hidden');
  });

  document.getElementById('dropdown-switch-profile').addEventListener('click', signOut);
  document.getElementById('dropdown-signout').addEventListener('click', signOut);

  const notifBtn = document.getElementById('notification-btn');
  const notifDropdown = document.getElementById('notification-dropdown');
  notifBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    notifDropdown.classList.toggle('active');
    const badge = document.getElementById('notif-badge');
    if (badge) badge.classList.add('hidden');
  });
  document.addEventListener('click', () => notifDropdown.classList.remove('active'));

  window.addEventListener('hashchange', router);
  if (state.profile) router();
});

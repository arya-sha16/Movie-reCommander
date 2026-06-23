import { movies } from './movies-db.js';

// Application State
const state = {
  profile: localStorage.getItem('nm_profile') || null, // Active Profile
  watchlist: [],
  progress: {},
  searchQuery: "",
  notificationsCount: 3,
  currentModalMovieId: null,
  activeTab: 'episodes', // 'episodes' | 'similar' | 'about'
  selectedSeason: 1,
  currentVideoPlayer: {
    movieId: null,
    episodeNumber: null,
    currentMirror: "Server 1 (Default HD)"
  }
};

// Notification database
const notifications = [
  { id: 1, type: 'recommend', text: 'Neural Engine Recommendations Updated', time: 'Just now', icon: 'auto_awesome' },
  { id: 2, type: 'watchlist', text: 'Interstellar is still in My List', time: '2 hours ago', icon: 'bookmark' },
  { id: 3, type: 'stream', text: 'New Release: Kingdom of Aether is streaming now', time: 'Yesterday', icon: 'stream' }
];

// Fallback user assets for profiles
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
  // Load Watchlist and Progress for current profile
  state.watchlist = JSON.parse(localStorage.getItem(`nm_watchlist_${state.profile}`)) || 
                    (state.profile === 'Commander' ? ['interstellar', 'ex-machina', 'cyberpunk-edgerunners'] : []);
  
  state.progress = JSON.parse(localStorage.getItem(`nm_progress_${state.profile}`)) || 
                    (state.profile === 'Commander' ? {
                      "breaking-bad": { episode: 1, remaining: "15m remaining", progress: 66, title: "Breaking Bad", subtitle: "S1 : E1 • 15m remaining" },
                      "dune": { remaining: "2h 10m remaining", progress: 25, title: "Dune", subtitle: "2h 10m remaining" }
                    } : {});

  // Update profile avatar in Navbar
  const avatar = document.getElementById('nav-avatar');
  if (avatar && profileAvatars[state.profile]) {
    avatar.innerText = profileAvatars[state.profile].char;
    avatar.style.backgroundColor = profileAvatars[state.profile].color;
  }
}

function saveProfileState() {
  localStorage.setItem(`nm_watchlist_${state.profile}`, JSON.stringify(state.watchlist));
  localStorage.setItem(`nm_progress_${state.profile}`, JSON.stringify(state.progress));
}

function switchProfile(profileName) {
  state.profile = profileName;
  localStorage.setItem('nm_profile', profileName);
  checkProfile();
  
  // Close any modals/players
  closeDetailModal();
  closeVideoPlayer();

  // Reset to home
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
    if (el) {
      el.className = "text-on-surface-variant hover:text-neutral-300 transition-colors font-normal cursor-pointer";
    }
  });
  ['mobile-nav-home', 'mobile-nav-movies', 'mobile-nav-series', 'mobile-nav-watchlist'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = "flex flex-col items-center text-neutral-400";
  });

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
  setTimeout(() => {
    toast.classList.remove('active');
  }, 3000);
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
  
  // Re-render components/shelves if current route is watchlist
  const hash = window.location.hash.slice(1) || 'home';
  if (hash === 'watchlist') {
    router();
  }

  // Update modal watchlist button state if open
  if (state.currentModalMovieId === movieId) {
    updateModalWatchlistButton(movieId);
  }
}

// --- Detail Modal Controls ---

function openDetailModal(movieId) {
  state.currentModalMovieId = movieId;
  state.activeTab = 'episodes';
  state.selectedSeason = 1;
  
  const modal = document.getElementById('netflix-modal');
  renderModalContent();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Lock scroll
}

function closeDetailModal() {
  const modal = document.getElementById('netflix-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto'; // Unlock scroll
  state.currentModalMovieId = null;

  // Revert URL hash to previous view without triggering full reload if possible, 
  // or default back to home/movies/series based on path
  const hash = window.location.hash.slice(1);
  if (hash.startsWith('movie/')) {
    // Navigate back to home or previous tab
    window.location.hash = '#home';
  }
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
  const playUrlHash = `#movie/${movie.id}?play=true`;

  container.innerHTML = `
    <!-- Close button -->
    <button class="modal-close-btn" id="modal-close-trigger">
      <span class="material-symbols-outlined text-xl">close</span>
    </button>
    
    <!-- Hero Banner image -->
    <div class="relative w-full aspect-[16/9] md:aspect-[21/9]">
      <img class="w-full h-full object-cover" src="${movie.backdrop}" alt="${movie.title}"/>
      <div class="absolute inset-0 modal-banner-gradient"></div>
      
      <!-- Logo / Title & Controls bottom overlay -->
      <div class="absolute bottom-6 left-6 md:left-12 right-6 z-10 flex flex-col gap-3">
        <h2 class="font-title text-2xl md:text-4xl font-extrabold text-white drop-shadow-md select-none">${movie.title}</h2>
        <div class="flex items-center gap-3">
          <button id="modal-play-btn" class="bg-white hover:bg-neutral-200 text-black px-6 py-2.5 rounded font-bold flex items-center gap-2 transition-all text-sm active:scale-95">
            <span class="material-symbols-outlined text-lg fill-icon">play_arrow</span>
            Play
          </button>
          
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
      <!-- Left Column: Specs, Synopsis, Episodes -->
      <div class="md:col-span-8 flex flex-col gap-6">
        <div class="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium text-on-surface-variant">
          <span class="text-green-500 font-bold">98% Match</span>
          <span>${movie.year}</span>
          <span class="border border-neutral-700 px-1.5 py-0.5 rounded text-[10px] uppercase">${movie.type === 'series' ? 'TV-MA' : 'PG-13'}</span>
          <span>${movie.duration}</span>
          <span class="border border-neutral-700 px-1.5 py-0.2 rounded text-[10px] uppercase font-bold text-white tracking-wider">HD</span>
        </div>
        
        <p class="text-sm md:text-base leading-relaxed text-neutral-300">
          ${movie.synopsis}
        </p>

        <!-- Dynamic Tabs Section (Episodes | More Like This | Details) -->
        <div class="mt-6 border-b border-neutral-800 flex gap-4 text-sm font-semibold">
          ${movie.type === 'series' ? `<button class="modal-tab-btn ${state.activeTab === 'episodes' ? 'active' : ''}" data-tab="episodes">Episodes</button>` : ''}
          <button class="modal-tab-btn ${state.activeTab === 'similar' || (movie.type !== 'series' && state.activeTab === 'episodes') ? 'active' : ''}" data-tab="similar">More Like This</button>
          <button class="modal-tab-btn ${state.activeTab === 'about' ? 'active' : ''}" data-tab="about">About</button>
        </div>

        <div id="modal-tab-content" class="mt-4">
          <!-- Loaded dynamically -->
        </div>
      </div>

      <!-- Right Column: Cast, Genres, Tags -->
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
          <span class="text-neutral-500 font-semibold block mb-1">This video is:</span>
          <p class="text-neutral-300 leading-snug">Suspenseful, Exciting, Mind-Bending, Visual Spectacle</p>
        </div>
      </div>
    </div>
  `;

  // Force tab correction if movie is not a series
  if (movie.type !== 'series' && state.activeTab === 'episodes') {
    state.activeTab = 'similar';
  }

  renderTabContent();

  // Attach event hooks
  document.getElementById('modal-close-trigger').addEventListener('click', closeDetailModal);
  
  document.getElementById('modal-play-btn').addEventListener('click', () => {
    // If it is a series, play Episode 1, otherwise play movie
    if (movie.type === 'series' && movie.seasons && movie.seasons[0].episodes[0]) {
      startVideoPlayer(movie.id, 1);
    } else {
      startVideoPlayer(movie.id);
    }
  });

  document.getElementById('modal-watchlist-btn').addEventListener('click', () => {
    toggleWatchlist(movie.id);
  });

  // Like button visual toggle
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

  // Tabs clicking
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      state.activeTab = e.target.getAttribute('data-tab');
      // Update UI active styling
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
    // Series Episodes Selector & Grid
    let seasonOptions = "";
    movie.seasons.forEach(s => {
      seasonOptions += `<option value="${s.seasonNumber}" ${state.selectedSeason === s.seasonNumber ? 'selected' : ''}>Season ${s.seasonNumber}</option>`;
    });

    const activeSeason = movie.seasons.find(s => s.seasonNumber === state.selectedSeason) || movie.seasons[0];
    let episodesHtml = "";
    
    activeSeason.episodes.forEach(ep => {
      episodesHtml += `
        <div class="flex flex-col sm:flex-row items-center gap-4 py-4 border-b border-neutral-800 hover:bg-neutral-800/20 px-2 rounded cursor-pointer transition-colors" onclick="window.playEpisodeFromModal('${movie.id}', ${ep.episodeNumber})">
          <!-- Thumbnail with index overlay -->
          <div class="relative w-full sm:w-40 aspect-video rounded overflow-hidden flex-shrink-0 bg-neutral-900 border border-neutral-800">
            <img class="w-full h-full object-cover" src="${ep.thumbnail || movie.backdrop}" alt="${ep.title}"/>
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <span class="material-symbols-outlined text-white text-3xl fill-icon">play_circle</span>
            </div>
            <div class="absolute bottom-1 right-1 bg-black/80 px-1 py-0.5 rounded text-[10px] text-neutral-300 font-bold">${ep.runtime}</div>
          </div>
          <!-- Episode Info -->
          <div class="flex-grow">
            <div class="flex justify-between items-baseline mb-1">
              <h4 class="text-sm font-bold text-white">${ep.episodeNumber}. ${ep.title}</h4>
            </div>
            <p class="text-xs text-neutral-400 line-clamp-2 leading-relaxed">${ep.synopsis}</p>
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
    // Similar recommendation cards
    const similarMovies = movies.filter(m => m.id !== movie.id && m.genre.some(g => movie.genre.includes(g))).slice(0, 6);
    let cards = "";

    similarMovies.forEach(sm => {
      cards += `
        <div class="bg-neutral-900 rounded overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all cursor-pointer flex flex-col h-full group" onclick="window.openMovieDetailModal('${sm.id}')">
          <div class="relative aspect-video">
            <img class="w-full h-full object-cover" src="${sm.backdrop}" alt="${sm.title}"/>
            <div class="absolute top-2 right-2 bg-black/60 px-1.5 py-0.5 rounded text-[10px] font-bold text-neutral-300">${sm.year}</div>
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="material-symbols-outlined text-white text-3xl fill-icon">play_circle</span>
            </div>
          </div>
          <div class="p-3 flex-grow flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-green-500 font-bold text-xs">92% Match</span>
                <span class="text-[10px] border border-neutral-800 px-1 py-0.2 rounded font-semibold text-neutral-400">PG-13</span>
              </div>
              <h4 class="text-sm font-bold text-white line-clamp-1 mb-1">${sm.title}</h4>
              <p class="text-xs text-neutral-400 line-clamp-2 mb-2 leading-relaxed">${sm.synopsis}</p>
            </div>
          </div>
        </div>
      `;
    });

    tabContent.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        ${cards}
      </div>
    `;

  } else if (state.activeTab === 'about') {
    // Show details summary
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
          <div class="grid grid-cols-2 gap-3">
            ${castList || '<p class="text-neutral-400">Cast details not available.</p>'}
          </div>
        </div>
      </div>
    `;
  }
}

// Global scope hooks for modal clicks inside dynamic templates
window.openMovieDetailModal = (id) => {
  openDetailModal(id);
};

window.playEpisodeFromModal = (movieId, epNumber) => {
  startVideoPlayer(movieId, epNumber);
};

// --- Full-Screen Video Player & Mirrors ---

function startVideoPlayer(movieId, episodeNumber = null) {
  state.currentVideoPlayer.movieId = movieId;
  state.currentVideoPlayer.episodeNumber = episodeNumber;
  state.currentVideoPlayer.currentMirror = "Server 1 (Default HD)";

  const playerContainer = document.getElementById('fullscreen-player');
  playerContainer.classList.add('active');
  playerContainer.classList.remove('hidden');

  // Trigger buffering overlay
  triggerBuffering("Connecting to Server 1 (Default HD)...");

  // Load stream
  loadPlayerVideo();
  renderMirrorsList();
}

function loadPlayerVideo() {
  const videoFrame = document.getElementById('player-video-frame');
  const movie = movies.find(m => m.id === state.currentVideoPlayer.movieId);
  if (!movie) return;

  // Determine stream source URL
  let streamUrl = movie.videoUrl;
  let label = movie.title;
  
  if (state.currentVideoPlayer.episodeNumber && movie.type === 'series') {
    const ep = movie.seasons
      .flatMap(s => s.episodes)
      .find(e => e.episodeNumber === state.currentVideoPlayer.episodeNumber);
    if (ep) {
      streamUrl = ep.videoUrl;
      label = `${movie.title} - S1 : E${ep.episodeNumber} • ${ep.title}`;
    }
  }

  videoFrame.innerHTML = `
    <video id="player-video-element" class="w-full h-full object-contain" autoplay playsinline>
      <source src="${streamUrl}" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
  `;

  // Attach controls hooks
  setTimeout(() => {
    attachPlayerEvents(label);
  }, 100);
}

function renderMirrorsList() {
  const mirrorsList = document.getElementById('mirrors-list');
  const servers = [
    "Server 1 (Default HD)",
    "Server 2 (Fembed Speed)",
    "Server 3 (Mixdrop Cloud)",
    "Server 4 (Backup Direct)"
  ];
  
  let html = "";
  servers.forEach(s => {
    const isActive = state.currentVideoPlayer.currentMirror === s;
    html += `
      <button class="mirror-btn ${isActive ? 'active' : ''}" onclick="window.switchVideoMirror('${s}')">
        ${s}
      </button>
    `;
  });

  mirrorsList.innerHTML = html;
}

function triggerBuffering(text, duration = 1200) {
  const buff = document.getElementById('player-buffering');
  const buffText = document.getElementById('player-buffering-text');
  
  buffText.innerText = text;
  buff.classList.add('active');
  
  const video = document.getElementById('player-video-element');
  if (video) video.pause();

  setTimeout(() => {
    buff.classList.remove('active');
    if (video) {
      video.play().catch(e => console.log("Auto-play blocked, waiting for user interaction."));
    }
  }, duration);
}

window.switchVideoMirror = (mirrorName) => {
  if (state.currentVideoPlayer.currentMirror === mirrorName) return;
  state.currentVideoPlayer.currentMirror = mirrorName;
  
  renderMirrorsList();
  triggerBuffering(`Switching to ${mirrorName}...`);

  // Close mirrors selector panel
  document.getElementById('player-mirrors-panel').classList.remove('active');
};

function closeVideoPlayer() {
  const playerContainer = document.getElementById('fullscreen-player');
  playerContainer.classList.remove('active');
  playerContainer.classList.add('hidden');

  // Clear video source
  const videoFrame = document.getElementById('player-video-frame');
  videoFrame.innerHTML = "";

  state.currentVideoPlayer.movieId = null;
  state.currentVideoPlayer.episodeNumber = null;
}

function attachPlayerEvents(titleLabel) {
  const video = document.getElementById('player-video-element');
  if (!video) return;

  const playBtn = document.getElementById('player-play-btn');
  const playIcon = document.getElementById('player-play-icon');
  const skipBack = document.getElementById('player-skip-back');
  const skipForward = document.getElementById('player-skip-forward');
  const muteBtn = document.getElementById('player-mute-btn');
  const volumeIcon = document.getElementById('player-volume-icon');
  const volumeSlider = document.getElementById('player-volume-slider');
  const timeDisplay = document.getElementById('player-time-display');
  const progressBar = document.getElementById('player-progress-bar');
  const progressFill = document.getElementById('player-progress-fill');
  const progressHandle = document.getElementById('player-progress-handle');
  const speedBtn = document.getElementById('player-speed-btn');
  const fsBtn = document.getElementById('player-fs-btn');
  const fsIcon = document.getElementById('player-fs-icon');

  // Exit
  document.getElementById('player-exit-btn').onclick = closeVideoPlayer;

  // Mirror toggle
  const mirrorToggle = document.getElementById('player-mirrors-toggle');
  const mirrorPanel = document.getElementById('player-mirrors-panel');
  mirrorToggle.onclick = (e) => {
    e.stopPropagation();
    mirrorPanel.classList.toggle('active');
  };
  
  document.addEventListener('click', () => {
    mirrorPanel.classList.remove('active');
  });

  // Play/Pause
  playBtn.onclick = () => {
    if (video.paused) {
      video.play();
      playIcon.innerText = "pause";
    } else {
      video.pause();
      playIcon.innerText = "play_arrow";
    }
  };

  // Back/Forward 10s
  skipBack.onclick = () => {
    video.currentTime = Math.max(0, video.currentTime - 10);
  };
  skipForward.onclick = () => {
    video.currentTime = Math.min(video.duration, video.currentTime + 10);
  };

  // Volume
  muteBtn.onclick = () => {
    if (video.muted) {
      video.muted = false;
      volumeIcon.innerText = video.volume > 0.5 ? "volume_up" : "volume_down";
      volumeSlider.value = video.volume;
    } else {
      video.muted = true;
      volumeIcon.innerText = "volume_off";
      volumeSlider.value = 0;
    }
  };

  volumeSlider.oninput = (e) => {
    video.volume = e.target.value;
    video.muted = e.target.value === "0";
    if (video.muted) {
      volumeIcon.innerText = "volume_off";
    } else {
      volumeIcon.innerText = video.volume > 0.5 ? "volume_up" : "volume_down";
    }
  };

  // Time & progress tracker
  video.ontimeupdate = () => {
    const pct = (video.currentTime / video.duration) * 100;
    progressFill.style.width = `${pct}%`;
    progressHandle.style.left = `${pct}%`;

    const curMin = Math.floor(video.currentTime / 60);
    const curSec = Math.floor(video.currentTime % 60).toString().padStart(2, '0');
    const durMin = Math.floor(video.duration / 60) || 0;
    const durSec = Math.floor(video.duration % 60 || 0).toString().padStart(2, '0');
    timeDisplay.innerText = `${curMin}:${curSec} / ${durMin}:${durSec}`;

    // Track progress in state (Save to Continue Watching)
    if (pct > 3 && pct < 97) {
      const movie = movies.find(m => m.id === state.currentVideoPlayer.movieId);
      if (movie) {
        let titleText = movie.title;
        let subtitleText = `${movie.duration.split(' ')[0]} • ${Math.round((video.duration - video.currentTime) / 60)}m remaining`;
        let episodeNum = null;
        
        if (state.currentVideoPlayer.episodeNumber && movie.type === 'series') {
          episodeNum = state.currentVideoPlayer.episodeNumber;
          titleText = movie.title;
          subtitleText = `S1 : E${episodeNum} • ${Math.round((video.duration - video.currentTime) / 60)}m remaining`;
        }

        state.progress[movie.id] = {
          episode: episodeNum,
          remaining: `${Math.round((video.duration - video.currentTime) / 60)}m remaining`,
          progress: Math.round(pct),
          title: titleText,
          subtitle: subtitleText
        };
        saveProfileState();
      }
    }
  };

  // Seeking on progress click
  progressBar.onclick = (e) => {
    const rect = progressBar.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    video.currentTime = pct * video.duration;
  };

  // Speeds
  const speeds = [1.0, 1.25, 1.5, 2.0];
  let currentSpeedIdx = 0;
  speedBtn.onclick = () => {
    currentSpeedIdx = (currentSpeedIdx + 1) % speeds.length;
    video.playbackRate = speeds[currentSpeedIdx];
    speedBtn.innerText = `${speeds[currentSpeedIdx]}x`;
  };

  // Fullscreen
  fsBtn.onclick = () => {
    const player = document.getElementById('fullscreen-player');
    if (!document.fullscreenElement) {
      player.requestFullscreen().then(() => {
        fsIcon.innerText = "fullscreen_exit";
      }).catch(err => {
        console.error("Fullscreen request failed", err);
      });
    } else {
      document.exitFullscreen().then(() => {
        fsIcon.innerText = "fullscreen";
      });
    }
  };

  // Sync fullscreen icon if exited via Esc key
  document.onfullscreenchange = () => {
    if (!document.fullscreenElement) {
      fsIcon.innerText = "fullscreen";
    }
  };
}

// --- View Renderers ---

// 1. HOME VIEW RENDERER
function renderHome() {
  const container = document.getElementById('app-view');
  
  // Get trending hero movie
  const heroMovie = movies.find(m => m.id === 'dune-part-two') || movies[0];
  const watchlistIcon = state.watchlist.includes(heroMovie.id) ? 'check' : 'add';
  const watchlistText = state.watchlist.includes(heroMovie.id) ? 'My List' : 'Add to List';

  // Build shelves
  let continueWatchingCards = "";
  Object.keys(state.progress).forEach(id => {
    const prog = state.progress[id];
    const movie = movies.find(m => m.id === id);
    if (!movie) return;
    
    continueWatchingCards += `
      <div class="flex-shrink-0 w-64 md:w-80 group cursor-pointer" onclick="window.openMovieDetailModal('${id}')">
        <div class="relative aspect-video rounded-sm overflow-hidden mb-2 border border-neutral-800 transition-all duration-300 group-hover:scale-105 shadow-md">
          <img class="w-full h-full object-cover" src="${movie.backdrop}" alt="${prog.title}"/>
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="material-symbols-outlined text-primary text-5xl fill-icon">play_circle</span>
          </div>
          <!-- Progress bar -->
          <div class="absolute bottom-0 left-0 w-full h-1 bg-neutral-800">
            <div class="h-full bg-primary" style="width: ${prog.progress}%"></div>
          </div>
        </div>
        <div>
          <h3 class="font-bold text-white text-sm group-hover:text-primary transition-colors truncate">${prog.title}</h3>
          <p class="text-xs text-neutral-400 mt-0.5">${prog.subtitle}</p>
        </div>
      </div>
    `;
  });

  // Trending Shelf
  let trendingCards = "";
  const trendingList = movies.filter(m => m.rating >= 8.4);
  trendingList.forEach(m => {
    trendingCards += `
      <div class="flex-shrink-0 w-36 md:w-48 group cursor-pointer" onclick="window.openMovieDetailModal('${m.id}')">
        <div class="relative aspect-[2/3] rounded-sm overflow-hidden mb-2 border border-neutral-800 transition-all duration-300 group-hover:scale-105 shadow-lg">
          <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
            <span class="text-[10px] font-bold text-green-500 mb-0.5">${m.rating} Rating</span>
            <span class="text-[10px] text-neutral-300 font-semibold truncate">${m.genre[0]} • ${m.year}</span>
          </div>
        </div>
        <h3 class="font-bold text-white text-xs md:text-sm group-hover:text-primary transition-colors truncate">${m.title}</h3>
      </div>
    `;
  });

  // Action Shelf
  let actionCards = "";
  const actionList = movies.filter(m => m.genre.includes('Action'));
  actionList.forEach(m => {
    actionCards += `
      <div class="flex-shrink-0 w-36 md:w-48 group cursor-pointer" onclick="window.openMovieDetailModal('${m.id}')">
        <div class="relative aspect-[2/3] rounded-sm overflow-hidden mb-2 border border-neutral-800 transition-all duration-300 group-hover:scale-105 shadow-lg">
          <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
            <span class="text-[10px] text-neutral-300 font-semibold truncate">${m.genre[0]} • ${m.year}</span>
          </div>
        </div>
        <h3 class="font-bold text-white text-xs md:text-sm group-hover:text-primary transition-colors truncate">${m.title}</h3>
      </div>
    `;
  });

  // Sci-Fi Shelf
  let scifiCards = "";
  const scifiList = movies.filter(m => m.genre.includes('Sci-Fi'));
  scifiList.forEach(m => {
    scifiCards += `
      <div class="flex-shrink-0 w-36 md:w-48 group cursor-pointer" onclick="window.openMovieDetailModal('${m.id}')">
        <div class="relative aspect-[2/3] rounded-sm overflow-hidden mb-2 border border-neutral-800 transition-all duration-300 group-hover:scale-105 shadow-lg">
          <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
            <span class="text-[10px] text-neutral-300 font-semibold truncate">${m.genre[0]} • ${m.year}</span>
          </div>
        </div>
        <h3 class="font-bold text-white text-xs md:text-sm group-hover:text-primary transition-colors truncate">${m.title}</h3>
      </div>
    `;
  });

  // My List Shelf
  let myListCards = "";
  const myList = movies.filter(m => state.watchlist.includes(m.id));
  myList.forEach(m => {
    myListCards += `
      <div class="flex-shrink-0 w-36 md:w-48 group cursor-pointer" onclick="window.openMovieDetailModal('${m.id}')">
        <div class="relative aspect-[2/3] rounded-sm overflow-hidden mb-2 border border-neutral-800 transition-all duration-300 group-hover:scale-105 shadow-lg">
          <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
            <span class="text-[10px] text-neutral-300 font-semibold truncate">${m.genre[0]} • ${m.year}</span>
          </div>
        </div>
        <h3 class="font-bold text-white text-xs md:text-sm group-hover:text-primary transition-colors truncate">${m.title}</h3>
      </div>
    `;
  });

  container.innerHTML = `
    <!-- Hero Header Banner Section -->
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
        <p class="text-xs md:text-sm text-neutral-300 mb-6 line-clamp-3 md:line-clamp-none max-w-xl leading-relaxed">
          ${heroMovie.synopsis}
        </p>
        <div class="flex flex-wrap items-center gap-3">
          <button id="hero-play-btn" class="bg-white hover:bg-neutral-200 text-black px-6 py-2.5 rounded flex items-center gap-2 font-bold hover:scale-105 active:scale-95 transition-all text-sm shadow-md">
            <span class="material-symbols-outlined fill-icon text-lg">play_arrow</span>
            Play
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
      
      <!-- Continue Watching (Only render if has items) -->
      ${continueWatchingCards ? `
        <section>
          <div class="flex justify-between items-end mb-3">
            <h2 class="text-lg md:text-xl font-bold font-title text-white tracking-wide">Continue Watching for ${state.profile}</h2>
          </div>
          <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            ${continueWatchingCards}
          </div>
        </section>
      ` : ''}

      <!-- Popular on NetMirror -->
      <section>
        <div class="flex justify-between items-end mb-3">
          <h2 class="text-lg md:text-xl font-bold font-title text-white tracking-wide">Popular on Movifound</h2>
        </div>
        <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          ${trendingCards}
        </div>
      </section>

      <!-- Action & Adventure -->
      <section>
        <div class="flex justify-between items-end mb-3">
          <h2 class="text-lg md:text-xl font-bold font-title text-white tracking-wide">Action & Adventure</h2>
        </div>
        <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          ${actionCards}
        </div>
      </section>

      <!-- Sci-Fi Masterpieces -->
      <section>
        <div class="flex justify-between items-end mb-3">
          <h2 class="text-lg md:text-xl font-bold font-title text-white tracking-wide">Sci-Fi Masterpieces</h2>
        </div>
        <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          ${scifiCards}
        </div>
      </section>

      <!-- My List (Only render if has items) -->
      ${myListCards ? `
        <section>
          <div class="flex justify-between items-end mb-3">
            <h2 class="text-lg md:text-xl font-bold font-title text-white tracking-wide">My List</h2>
            <a class="text-primary font-bold text-xs hover:underline" href="#watchlist">View All</a>
          </div>
          <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            ${myListCards}
          </div>
        </section>
      ` : ''}
    </main>
  `;

  // Attach button triggers
  document.getElementById('hero-play-btn').onclick = () => {
    startVideoPlayer(heroMovie.id);
  };
  
  document.getElementById('hero-info-btn').onclick = () => {
    openDetailModal(heroMovie.id);
  };
}

// 2. SEARCH VIEW RENDERER
function renderSearch(query) {
  const container = document.getElementById('app-view');
  state.searchQuery = query;

  // Filter matching
  const queryLower = query.toLowerCase();
  const searchResults = movies.filter(m => 
    m.title.toLowerCase().includes(queryLower) ||
    m.genre.some(g => g.toLowerCase().includes(queryLower)) ||
    m.synopsis.toLowerCase().includes(queryLower)
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
        </div>
      `;
    });
  } else {
    resultsGrid = `
      <div class="col-span-full py-20 text-center">
        <p class="text-neutral-400 text-sm mb-4">No matching titles found for "${query}".</p>
        <button onclick="window.location.hash='#home'" class="bg-primary text-white px-6 py-2 rounded font-semibold text-sm hover:bg-primary-hover">Return to Discovery</button>
      </div>
    `;
  }

  container.innerHTML = `
    <main class="pt-24 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto select-none">
      <header class="mb-8">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">Search results for</p>
        <h1 class="font-title text-2xl md:text-4xl font-extrabold text-white tracking-tight">"${query}"</h1>
      </header>

      <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        ${resultsGrid}
      </section>
    </main>
  `;
}

// 3. WATCHLIST VIEW RENDERER (MY LIST)
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
      <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        ${gridCards}
      </section>
    </main>
  `;
}

// 4. MOVIES VIEW RENDERER
function renderGenreMovies() {
  const container = document.getElementById('app-view');
  
  // Filter for items of type 'movie'
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
      </div>
    `;
  });

  container.innerHTML = `
    <main class="pt-24 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto select-none">
      <header class="mb-8">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">Cinematic Catalog</p>
        <h1 class="font-title text-2xl md:text-4xl font-extrabold text-white tracking-tight">Movies</h1>
      </header>
      <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        ${gridCards}
      </section>
    </main>
  `;
}

// 5. SERIES VIEW RENDERER
function renderSeries() {
  const container = document.getElementById('app-view');
  
  // Filter for items of type 'series'
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
      </div>
    `;
  });

  container.innerHTML = `
    <main class="pt-24 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto select-none">
      <header class="mb-8">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">Serial Broadcasts</p>
        <h1 class="font-title text-2xl md:text-4xl font-extrabold text-white tracking-tight">TV Series</h1>
      </header>
      <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        ${gridCards}
      </section>
    </main>
  `;
}

// --- Router Definition ---

const routes = {
  'home': renderHome,
  'search': renderSearch,
  'watchlist': renderWatchlist,
  'movies': renderGenreMovies,
  'series': renderSeries
};

function router() {
  if (!state.profile) {
    checkProfile();
    return;
  }

  const hash = window.location.hash.slice(1) || 'home';
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
  
  updateNavLinks(routeName);

  // Close notifications panel if open
  document.getElementById('notification-dropdown').classList.remove('active');

  // Handle Netflix Modal overlays correctly
  if (routeName === 'movie') {
    // Determine target movie
    let cleanMovieId = param;
    let autoplay = false;
    if (param.includes('?')) {
      const parts = param.split('?');
      cleanMovieId = parts[0];
      autoplay = new URLSearchParams(parts[1]).get('play') === 'true';
    }

    // Keep home or current page rendered in background
    const prevView = containerHasView() ? null : renderHome();
    
    // Launch Modal
    openDetailModal(cleanMovieId);

    // If autoplay was requested, directly open player
    if (autoplay) {
      const movieObj = movies.find(m => m.id === cleanMovieId);
      if (movieObj) {
        if (movieObj.type === 'series' && movieObj.seasons && movieObj.seasons[0].episodes[0]) {
          startVideoPlayer(movieObj.id, 1);
        } else {
          startVideoPlayer(movieObj.id);
        }
      }
    }
  } else {
    // Normal Route View
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

// Global Hooks
window.toggleWatchlistGlobal = toggleWatchlist;

// --- Initialize Event Listeners ---

document.addEventListener('DOMContentLoaded', () => {
  // Check profile state
  checkProfile();

  // Profile selection bindings
  document.querySelectorAll('.profile-card').forEach(card => {
    card.addEventListener('click', () => {
      const p = card.getAttribute('data-profile');
      switchProfile(p);
    });
  });

  // Top Nav Bar solid color transition on scroll
  const nav = document.getElementById('top-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      nav.classList.add('solid');
    } else {
      nav.classList.remove('solid');
    }
  });

  // Realtime Search-as-you-type
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (val) {
      window.location.hash = `#search?q=${encodeURIComponent(val)}`;
    } else {
      window.location.hash = '#home';
    }
  });

  // Clear notifications
  document.getElementById('notif-clear').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('notif-list').innerHTML = `<p class="text-xs text-neutral-500 text-center py-4 select-none">No new notifications</p>`;
    const badge = document.getElementById('notif-badge');
    if (badge) badge.classList.add('hidden');
  });

  // Dropdown Switch Profile
  document.getElementById('dropdown-switch-profile').addEventListener('click', () => {
    signOut();
  });

  // Dropdown Exit Netmirror
  document.getElementById('dropdown-signout').addEventListener('click', () => {
    signOut();
  });

  // Notification button dropdown trigger
  const notifBtn = document.getElementById('notification-btn');
  const notifDropdown = document.getElementById('notification-dropdown');
  notifBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    notifDropdown.classList.toggle('active');
    
    // Hide notifications badge
    const badge = document.getElementById('notif-badge');
    if (badge) badge.classList.add('hidden');
  });

  document.addEventListener('click', () => {
    notifDropdown.classList.remove('active');
  });

  // Setup router hash change triggers
  window.addEventListener('hashchange', router);
  
  // Initial Router Invoke
  if (state.profile) {
    router();
  }
});

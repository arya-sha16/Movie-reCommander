import { movies } from './movies-db.js';

// ============================================================
// GENRE CATEGORIES MAP
// ============================================================
const GENRE_CATEGORIES = [
  { id: 'action',    name: 'Action & Adventure', emoji: '⚡', color: '#E50914', genres: ['Action', 'Adventure'],             subGenres: ['Superhero', 'Spy/Espionage', 'Heist/Caper', 'Survival/Disaster', 'Martial Arts'] },
  { id: 'comedy',   name: 'Comedy',              emoji: '😂', color: '#F59E0B', genres: ['Comedy'],                           subGenres: ['Sitcom', 'Romantic Comedy', 'Dark Comedy', 'Satire & Parody', 'Slapstick'] },
  { id: 'drama',    name: 'Drama',               emoji: '🎭', color: '#8B5CF6', genres: ['Drama'],                            subGenres: ['Coming-of-Age', 'Melodrama', 'Procedural', 'Period Piece', 'Biopic'] },
  { id: 'thriller', name: 'Thriller & Mystery',  emoji: '🔪', color: '#6B7280', genres: ['Thriller', 'Crime', 'Mystery'],     subGenres: ['Psychological Thriller', 'Whodunnit', 'Crime/Gangster', 'Political/Conspiracy'] },
  { id: 'horror',   name: 'Horror',              emoji: '👻', color: '#991B1B', genres: ['Horror'],                           subGenres: ['Supernatural', 'Slasher', 'Psychological Horror', 'Monster/Creature', 'Found Footage'] },
  { id: 'scifi',    name: 'Science Fiction',     emoji: '🚀', color: '#0EA5E9', genres: ['Sci-Fi'],                           subGenres: ['Space Opera', 'Dystopian', 'Cyberpunk', 'Time Travel'] },
  { id: 'fantasy',  name: 'Fantasy',             emoji: '🧙', color: '#059669', genres: ['Fantasy'],                          subGenres: ['High/Epic Fantasy', 'Urban Fantasy', 'Dark Fantasy'] },
  { id: 'nonfiction', name: 'Docs & Animation',  emoji: '📽️', color: '#D97706', genres: ['Animation', 'Anime', 'Documentary'], subGenres: ['Documentary', 'Reality TV', 'Animation', 'Anime'] },
];

function getMoviesByCategory(cat) {
  return movies.filter(m => m.genre.some(g => cat.genres.includes(g)));
}

// ============================================================
// APPLICATION STATE
// ============================================================
const state = {
  profile: localStorage.getItem('nm_profile') || null,
  watchlist: [],
  searchQuery: "",
  notificationsCount: 3,
  currentModalMovieId: null,
  activeTab: 'episodes',
  selectedSeason: 1,
};

const notifications = [
  { id: 1, type: 'recommend', text: '113 titles now in our database!', time: 'Just now', icon: 'auto_awesome' },
  { id: 2, type: 'watchlist', text: 'Interstellar is still in My List', time: '2 hours ago', icon: 'bookmark' },
  { id: 3, type: 'stream', text: 'Game of Thrones now on Max', time: 'Yesterday', icon: 'stream' }
];

const profileAvatars = {
  'Commander': { color: '#E50914', char: 'C' },
  'Guest': { color: '#00A8E8', char: 'G' },
  'Kids': { color: '#FFC72C', char: 'K' }
};

// ============================================================
// PROFILE MANAGEMENT
// ============================================================

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

// ============================================================
// NAVIGATION
// ============================================================

function updateNavLinks(activeRoute) {
  ['nav-home','nav-movies','nav-series','nav-watchlist','nav-genres'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = "text-on-surface-variant hover:text-neutral-300 transition-colors font-normal cursor-pointer";
  });
  ['mobile-nav-home','mobile-nav-movies','mobile-nav-series','mobile-nav-watchlist'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = "flex flex-col items-center text-neutral-400";
  });

  const map = { home: 'nav-home', movies: 'nav-movies', series: 'nav-series', watchlist: 'nav-watchlist', genres: 'nav-genres', genre: 'nav-genres' };
  const el = document.getElementById(map[activeRoute]);
  if (el) el.className = "text-on-surface hover:text-white transition-colors font-bold border-b-2 border-primary pb-1 cursor-pointer";
  const mobileMap = { home: 'mobile-nav-home', movies: 'mobile-nav-movies', series: 'mobile-nav-series', watchlist: 'mobile-nav-watchlist' };
  const mobEl = document.getElementById(mobileMap[activeRoute]);
  if (mobEl) mobEl.className = "flex flex-col items-center text-primary";
}

// ============================================================
// TOAST
// ============================================================

function showToast(message, isSuccess = true) {
  const toast = document.getElementById('toast-alert');
  const toastMsg = document.getElementById('toast-message');
  const toastIcon = document.getElementById('toast-icon');
  toastMsg.innerText = message;
  toast.style.background = isSuccess ? "#E50914" : "#242424";
  toastIcon.innerText = isSuccess ? "check_circle" : "cancel";
  toast.classList.add('active');
  setTimeout(() => { toast.classList.remove('active'); }, 3000);
}

// ============================================================
// WATCHLIST
// ============================================================

function toggleWatchlist(movieId) {
  const index = state.watchlist.indexOf(movieId);
  if (index === -1) { state.watchlist.push(movieId); showToast("Added to My List"); }
  else { state.watchlist.splice(index, 1); showToast("Removed from My List"); }
  saveProfileState();
  const hash = window.location.hash.slice(1) || 'home';
  if (hash === 'watchlist') router();
  if (state.currentModalMovieId === movieId) updateModalWatchlistButton(movieId);
}

// ============================================================
// STREAMING BADGES
// ============================================================

function renderStreamingBadges(movie) {
  if (!movie.streamingOn || movie.streamingOn.length === 0)
    return `<p class="text-neutral-500 text-sm italic">No streaming info available</p>`;
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

// ============================================================
// DETAIL MODAL
// ============================================================

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
  const isIn = state.watchlist.includes(movieId);
  btn.innerHTML = `<span class="material-symbols-outlined !text-xl">${isIn ? 'check' : 'add'}</span><span>${isIn ? 'My List' : 'Add to List'}</span>`;
}

function renderModalContent() {
  const container = document.querySelector('.netflix-modal-content');
  const movie = movies.find(m => m.id === state.currentModalMovieId);
  if (!movie) return;
  const isIn = state.watchlist.includes(movie.id);
  const cat = GENRE_CATEGORIES.find(c => c.genres.some(g => movie.genre.includes(g)));

  container.innerHTML = `
    <button class="modal-close-btn" id="modal-close-trigger">
      <span class="material-symbols-outlined text-xl">close</span>
    </button>
    <div class="relative w-full aspect-[16/9] md:aspect-[21/9]">
      <img class="w-full h-full object-cover" src="${movie.backdrop}" alt="${movie.title}"/>
      <div class="absolute inset-0 modal-banner-gradient"></div>
      <div class="absolute bottom-6 left-6 md:left-12 right-6 z-10 flex flex-col gap-3">
        ${movie.subGenre ? `<span class="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full self-start" style="background:${cat?.color || '#E50914'}22; color:${cat?.color || '#E50914'}; border: 1px solid ${cat?.color || '#E50914'}44;">${cat?.emoji || ''} ${movie.subGenre}</span>` : ''}
        <h2 class="font-title text-2xl md:text-4xl font-extrabold text-white drop-shadow-md select-none">${movie.title}</h2>
        <div class="flex items-center gap-3">
          <button id="modal-watchlist-btn" class="border border-neutral-500 hover:border-white hover:bg-white/10 text-white px-4 py-2.5 rounded font-semibold flex items-center gap-2 transition-all text-sm active:scale-95">
            <span class="material-symbols-outlined !text-xl">${isIn ? 'check' : 'add'}</span>
            <span>${isIn ? 'My List' : 'Add to List'}</span>
          </button>
          <button id="modal-like-btn" class="w-10 h-10 border border-neutral-500 hover:border-white rounded-full flex items-center justify-center text-white active:scale-95 transition-all">
            <span class="material-symbols-outlined text-lg">thumb_up</span>
          </button>
        </div>
      </div>
    </div>
    <div class="p-6 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 text-on-surface">
      <div class="md:col-span-8 flex flex-col gap-6">
        <div class="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium text-on-surface-variant">
          <span class="text-green-500 font-bold">⭐ ${movie.rating} IMDb</span>
          <span>${movie.year}</span>
          <span class="border border-neutral-700 px-1.5 py-0.5 rounded text-[10px] uppercase">${movie.type === 'series' ? 'TV-MA' : 'PG-13'}</span>
          <span>${movie.duration}</span>
        </div>
        <p class="text-sm md:text-base leading-relaxed text-neutral-300">${movie.synopsis}</p>
        <div class="mt-2">
          <div class="flex items-center gap-2 mb-4">
            <span class="material-symbols-outlined text-primary text-xl">live_tv</span>
            <h3 class="text-white font-bold text-base uppercase tracking-wider">Where to Watch</h3>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${renderStreamingBadges(movie)}</div>
        </div>
        <div class="mt-2 border-b border-neutral-800 flex gap-4 text-sm font-semibold">
          ${movie.type === 'series' ? `<button class="modal-tab-btn ${state.activeTab === 'episodes' ? 'active' : ''}" data-tab="episodes">Episodes</button>` : ''}
          <button class="modal-tab-btn ${(state.activeTab === 'similar' || movie.type !== 'series') ? 'active' : ''}" data-tab="similar">More Like This</button>
          <button class="modal-tab-btn ${state.activeTab === 'about' ? 'active' : ''}" data-tab="about">About</button>
        </div>
        <div id="modal-tab-content" class="mt-4"></div>
      </div>
      <div class="md:col-span-4 flex flex-col gap-5 text-sm">
        <div><span class="text-neutral-500 font-semibold block mb-1">Cast:</span><p class="text-neutral-300 leading-snug">${movie.cast ? movie.cast.map(c => c.name).join(', ') : 'Various Artists'}</p></div>
        <div><span class="text-neutral-500 font-semibold block mb-1">Genres:</span><p class="text-neutral-300 leading-snug">${movie.genre.join(', ')}</p></div>
        <div><span class="text-neutral-500 font-semibold block mb-1">Director:</span><p class="text-neutral-300 leading-snug">${movie.director}</p></div>
        <div>
          <span class="text-neutral-500 font-semibold block mb-2">Available on:</span>
          <div class="flex flex-wrap gap-2">
            ${movie.streamingOn ? movie.streamingOn.map(s => `<span class="text-[11px] font-bold px-2 py-1 rounded-full" style="background:${s.color}22; color:${s.color}; border: 1px solid ${s.color}44;">${s.platform}</span>`).join('') : '<span class="text-neutral-600 text-xs">—</span>'}
          </div>
        </div>
      </div>
    </div>
  `;

  if (movie.type !== 'series' && state.activeTab === 'episodes') state.activeTab = 'similar';
  renderTabContent();

  document.getElementById('modal-close-trigger').addEventListener('click', closeDetailModal);
  document.getElementById('modal-watchlist-btn').addEventListener('click', () => toggleWatchlist(movie.id));
  document.getElementById('modal-like-btn').addEventListener('click', (e) => {
    const icon = e.currentTarget.querySelector('span');
    icon.innerText = icon.innerText === 'thumb_up' ? 'task_alt' : 'thumb_up';
    showToast(icon.innerText === 'task_alt' ? "Added to Liked" : "Removed from Liked");
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
    if (!movie.seasons || movie.seasons.length === 0) {
      tabContent.innerHTML = `
        <div class="text-center py-8">
          <span class="material-symbols-outlined text-neutral-600 text-4xl mb-3 block">live_tv</span>
          <p class="text-neutral-400 text-sm mb-3">Watch episodes directly on the streaming platform:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xs mx-auto">${renderStreamingBadges(movie)}</div>
        </div>
      `;
      return;
    }
    const activeSeason = movie.seasons.find(s => s.seasonNumber === state.selectedSeason) || movie.seasons[0];
    let seasonOptions = movie.seasons.map(s => `<option value="${s.seasonNumber}" ${state.selectedSeason === s.seasonNumber ? 'selected' : ''}>Season ${s.seasonNumber}</option>`).join('');
    let episodesHtml = activeSeason.episodes.map(ep => `
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
                class="flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full border transition-all hover:scale-105"
                style="border-color:${s.color}66; color:${s.color}; background:${s.color}11;">
                Watch on ${s.platform}
                <span class="material-symbols-outlined" style="font-size:12px;">open_in_new</span>
              </a>
            `).join('') : ''}
          </div>
        </div>
      </div>
    `).join('');
    tabContent.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <select id="season-selector" class="bg-neutral-900 text-white border border-neutral-800 rounded px-3 py-1 text-sm font-semibold outline-none focus:border-primary">${seasonOptions}</select>
        <span class="text-xs text-neutral-500">${activeSeason.episodes.length} Episodes</span>
      </div>
      <div class="flex flex-col max-h-[400px] overflow-y-auto pr-1 hide-scrollbar">${episodesHtml}</div>
    `;
    document.getElementById('season-selector').addEventListener('change', (e) => {
      state.selectedSeason = parseInt(e.target.value);
      renderTabContent();
    });

  } else if (state.activeTab === 'similar') {
    const similar = movies.filter(m => m.id !== movie.id && m.genre.some(g => movie.genre.includes(g))).slice(0, 6);
    tabContent.innerHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      ${similar.map(sm => `
        <div class="bg-neutral-900 rounded overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-all cursor-pointer flex flex-col group" onclick="window.openMovieDetailModal('${sm.id}')">
          <div class="relative aspect-video"><img class="w-full h-full object-cover" src="${sm.backdrop}" alt="${sm.title}"/>
          <div class="absolute top-2 right-2 bg-black/60 px-1.5 py-0.5 rounded text-[10px] font-bold text-neutral-300">${sm.year}</div></div>
          <div class="p-3 flex flex-col gap-1">
            <h4 class="text-sm font-bold text-white line-clamp-1">${sm.title}</h4>
            <p class="text-xs text-neutral-400 line-clamp-2 leading-relaxed">${sm.synopsis}</p>
            <div class="flex flex-wrap gap-1 mt-1">
              ${sm.streamingOn ? sm.streamingOn.slice(0,2).map(s => `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded" style="background:${s.color}22; color:${s.color};">${s.platform}</span>`).join('') : ''}
            </div>
          </div>
        </div>
      `).join('')}
    </div>`;

  } else if (state.activeTab === 'about') {
    const castList = movie.cast ? movie.cast.map(a => `
      <div class="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded p-2 hover:bg-neutral-800/50 transition-colors">
        <img class="w-10 h-10 object-cover rounded-sm" src="${a.image}" alt="${a.name}"/>
        <div><p class="text-xs font-bold text-white">${a.name}</p><p class="text-[10px] text-neutral-500">${a.character}</p></div>
      </div>
    `).join('') : '';
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

// ============================================================
// POSTER CARD BUILDER
// ============================================================

function buildPosterCard(m) {
  const platformDots = m.streamingOn ? m.streamingOn.slice(0, 3).map(s =>
    `<span class="w-2 h-2 rounded-full flex-shrink-0" style="background:${s.color};" title="${s.platform}"></span>`
  ).join('') : '';
  return `
    <div class="flex-shrink-0 w-36 md:w-48 group cursor-pointer" onclick="window.openMovieDetailModal('${m.id}')">
      <div class="relative aspect-[2/3] rounded-sm overflow-hidden mb-2 border border-neutral-800 transition-all duration-300 group-hover:scale-105 shadow-lg">
        <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}" loading="lazy"/>
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
          <span class="text-[10px] font-bold text-green-400 mb-0.5">⭐ ${m.rating}</span>
          <span class="text-[10px] text-neutral-300 font-semibold truncate">${m.genre[0]} • ${m.year}</span>
        </div>
        ${m.subGenre ? `<div class="absolute top-2 left-2 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity truncate max-w-[90%]">${m.subGenre}</div>` : ''}
      </div>
      <h3 class="font-bold text-white text-xs md:text-sm group-hover:text-primary transition-colors truncate mb-1">${m.title}</h3>
      <div class="flex items-center gap-1.5">${platformDots}</div>
    </div>
  `;
}

function buildGenreShelf(catId, limit = 12) {
  const cat = GENRE_CATEGORIES.find(c => c.id === catId);
  if (!cat) return '';
  const items = getMoviesByCategory(cat).slice(0, limit);
  if (!items.length) return '';
  return `
    <section>
      <div class="flex justify-between items-end mb-3">
        <div class="flex items-center gap-2">
          <span class="text-xl">${cat.emoji}</span>
          <h2 class="text-lg md:text-xl font-bold font-title text-white tracking-wide">${cat.name}</h2>
        </div>
        <a href="#genres/${cat.id}" class="text-primary font-bold text-xs hover:underline flex items-center gap-1">
          View all <span class="material-symbols-outlined text-sm">chevron_right</span>
        </a>
      </div>
      <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-2">${items.map(m => buildPosterCard(m)).join('')}</div>
    </section>
  `;
}

// ============================================================
// VIEW: HOME
// ============================================================

function renderHome() {
  const container = document.getElementById('app-view');
  const heroMovie = movies.find(m => m.id === 'game-of-thrones') || movies.find(m => m.id === 'dune-part-two') || movies[0];
  const isIn = state.watchlist.includes(heroMovie.id);
  const heroCat = GENRE_CATEGORIES.find(c => c.genres.some(g => heroMovie.genre.includes(g)));
  const myListCards = movies.filter(m => state.watchlist.includes(m.id)).map(m => buildPosterCard(m)).join('');

  container.innerHTML = `
    <!-- Hero Section -->
    <section class="relative w-full h-[60vh] md:h-[88vh] flex items-end bg-black">
      <div class="absolute inset-0 z-0">
        <img class="w-full h-full object-cover opacity-70" src="${heroMovie.backdrop}" alt="${heroMovie.title}"/>
        <div class="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent"></div>
      </div>
      <div class="relative z-10 px-6 md:px-12 pb-12 w-full max-w-2xl select-none">
        ${heroCat ? `<div class="flex items-center gap-2 mb-3"><span class="text-lg">${heroCat.emoji}</span><span class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style="background:${heroCat.color}33; color:${heroCat.color}; border: 1px solid ${heroCat.color}55;">${heroCat.name}</span></div>` : ''}
        <h1 class="font-title text-3xl md:text-6xl font-black mb-4 leading-tight tracking-tight text-white drop-shadow-lg">${heroMovie.title}</h1>
        <p class="text-xs md:text-sm text-neutral-300 mb-5 line-clamp-3 max-w-xl leading-relaxed">${heroMovie.synopsis}</p>
        <div class="flex flex-wrap gap-2 mb-6">
          ${heroMovie.streamingOn ? heroMovie.streamingOn.map(s => `<span class="text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm" style="background:${s.color}33; color:${s.color}; border: 1px solid ${s.color}55;">${s.platform}</span>`).join('') : ''}
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

    <!-- Genre Quick Jump -->
    <div class="px-6 md:px-12 py-6 flex flex-wrap gap-2">
      ${GENRE_CATEGORIES.map(c => `
        <a href="#genres/${c.id}" class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all hover:scale-105 active:scale-95 cursor-pointer" style="background:${c.color}15; color:${c.color}; border-color:${c.color}33;">
          ${c.emoji} ${c.name}
        </a>
      `).join('')}
    </div>

    <!-- Genre Shelves -->
    <main class="relative z-20 px-6 md:px-12 pb-16 flex flex-col gap-10">
      ${GENRE_CATEGORIES.map(c => buildGenreShelf(c.id)).join('')}
      ${myListCards ? `
        <section>
          <div class="flex justify-between items-end mb-3">
            <h2 class="text-lg md:text-xl font-bold font-title text-white tracking-wide">⭐ My List</h2>
            <a class="text-primary font-bold text-xs hover:underline" href="#watchlist">View All</a>
          </div>
          <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-2">${myListCards}</div>
        </section>
      ` : ''}
    </main>
  `;

  document.getElementById('hero-watch-btn').onclick = () => openDetailModal(heroMovie.id);
  document.getElementById('hero-info-btn').onclick = () => openDetailModal(heroMovie.id);

  // Handle genre shelf "View all" clicks
  document.querySelectorAll('a[href^="#genres/"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = a.getAttribute('href');
    });
  });
}

// ============================================================
// VIEW: GENRES BROWSER
// ============================================================

function renderGenres() {
  const container = document.getElementById('app-view');
  container.innerHTML = `
    <main class="pt-24 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto select-none">
      <header class="mb-10">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">Browse Everything</p>
        <h1 class="font-title text-2xl md:text-4xl font-extrabold text-white tracking-tight">Genres</h1>
        <p class="text-neutral-500 text-sm mt-2">${movies.length} titles across ${GENRE_CATEGORIES.length} categories</p>
      </header>
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        ${GENRE_CATEGORIES.map(cat => {
          const catMovies = getMoviesByCategory(cat);
          const preview = catMovies.slice(0, 4);
          return `
            <div class="group cursor-pointer rounded-xl border border-neutral-800 hover:border-neutral-600 overflow-hidden bg-neutral-900 hover:bg-neutral-800/80 transition-all hover:scale-[1.02] active:scale-[0.99] shadow-lg"
              onclick="window.location.hash='#genres/${cat.id}'">
              <!-- Mini poster grid -->
              <div class="grid grid-cols-2 h-36 overflow-hidden">
                ${preview.map(m => `<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="${m.poster}" alt="${m.title}" loading="lazy"/>`).join('')}
                ${Array(4 - preview.length).fill('<div class="bg-neutral-800"></div>').join('')}
              </div>
              <!-- Label -->
              <div class="p-4 flex items-center justify-between">
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-2xl">${cat.emoji}</span>
                    <h2 class="font-bold text-white text-base">${cat.name}</h2>
                  </div>
                  <p class="text-xs text-neutral-500">${catMovies.length} titles</p>
                </div>
                <span class="material-symbols-outlined text-neutral-600 group-hover:text-primary transition-colors">arrow_forward</span>
              </div>
              <!-- Sub-genre chips -->
              <div class="px-4 pb-4 flex flex-wrap gap-1">
                ${cat.subGenres.slice(0,3).map(sg => `<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full" style="background:${cat.color}15; color:${cat.color};">${sg}</span>`).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </section>
    </main>
  `;
}

// ============================================================
// VIEW: GENRE DETAIL (e.g. #genres/action)
// ============================================================

function renderGenreDetail(catId, activeSubGenre = 'All') {
  const container = document.getElementById('app-view');
  const cat = GENRE_CATEGORIES.find(c => c.id === catId);
  if (!cat) { renderGenres(); return; }

  let catMovies = getMoviesByCategory(cat);
  if (activeSubGenre !== 'All') catMovies = catMovies.filter(m => m.subGenre === activeSubGenre);

  const subGenresWithCounts = ['All', ...cat.subGenres].map(sg => ({
    label: sg,
    count: sg === 'All' ? getMoviesByCategory(cat).length : getMoviesByCategory(cat).filter(m => m.subGenre === sg).length
  })).filter(sg => sg.count > 0 || sg.label === 'All');

  container.innerHTML = `
    <main class="pt-24 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto select-none">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-xs text-neutral-500 mb-6">
        <button onclick="window.location.hash='#genres'" class="hover:text-white transition-colors">Genres</button>
        <span class="material-symbols-outlined text-sm">chevron_right</span>
        <span class="text-white font-semibold">${cat.emoji} ${cat.name}</span>
      </div>
      <header class="mb-8 flex items-end justify-between gap-4">
        <div>
          <h1 class="font-title text-2xl md:text-4xl font-extrabold text-white tracking-tight">${cat.emoji} ${cat.name}</h1>
          <p class="text-neutral-500 text-sm mt-1">${catMovies.length} titles${activeSubGenre !== 'All' ? ` in "${activeSubGenre}"` : ''}</p>
        </div>
      </header>
      <!-- Sub-genre filter chips -->
      <div class="flex flex-wrap gap-2 mb-8">
        ${subGenresWithCounts.map(sg => `
          <button onclick="window.renderGenreDetailGlobal('${catId}', '${sg.label}')"
            class="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border transition-all hover:scale-105 active:scale-95 ${activeSubGenre === sg.label ? '' : 'opacity-60 hover:opacity-100'}"
            style="background:${activeSubGenre === sg.label ? cat.color : cat.color + '15'}; color:${activeSubGenre === sg.label ? '#fff' : cat.color}; border-color:${cat.color}44;">
            ${sg.label} <span class="opacity-70">(${sg.count})</span>
          </button>
        `).join('')}
      </div>
      <!-- Movie grid -->
      ${catMovies.length > 0 ? `
        <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          ${catMovies.map(m => `
            <div class="group relative cursor-pointer flex flex-col gap-2" onclick="window.openMovieDetailModal('${m.id}')">
              <div class="aspect-[2/3] rounded-sm overflow-hidden border border-neutral-800 transition-all duration-300 group-hover:scale-105 shadow-lg">
                <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}" loading="lazy"/>
                <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                  <span class="text-[10px] text-neutral-300 font-semibold truncate">${m.genre[0]} • ${m.year}</span>
                </div>
              </div>
              <div class="flex items-center justify-between text-xs px-0.5">
                <span class="font-semibold text-neutral-300 truncate w-3/4">${m.title}</span>
                <span class="text-green-500 font-bold">${m.rating}</span>
              </div>
              <div class="flex flex-wrap gap-1 px-0.5">
                ${m.streamingOn ? m.streamingOn.slice(0,2).map(s => `<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style="background:${s.color}22; color:${s.color};">${s.platform}</span>`).join('') : ''}
              </div>
            </div>
          `).join('')}
        </section>
      ` : `
        <div class="text-center py-20">
          <p class="text-neutral-400 text-sm">No titles found in this sub-genre yet.</p>
        </div>
      `}
    </main>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.renderGenreDetailGlobal = renderGenreDetail;

// ============================================================
// VIEW: SEARCH
// ============================================================

function renderSearch(query) {
  const container = document.getElementById('app-view');
  state.searchQuery = query;
  const q = query.toLowerCase();
  const results = movies.filter(m =>
    m.title.toLowerCase().includes(q) ||
    m.genre.some(g => g.toLowerCase().includes(q)) ||
    (m.subGenre && m.subGenre.toLowerCase().includes(q)) ||
    m.synopsis.toLowerCase().includes(q) ||
    (m.streamingOn && m.streamingOn.some(s => s.platform.toLowerCase().includes(q)))
  );

  const grid = results.length > 0 ? results.map(m => `
    <div class="group relative cursor-pointer flex flex-col gap-2" onclick="window.openMovieDetailModal('${m.id}')">
      <div class="aspect-[2/3] rounded-sm overflow-hidden border border-neutral-800 transition-all duration-300 group-hover:scale-105 shadow-lg">
        <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}" loading="lazy"/>
      </div>
      <div class="flex items-center justify-between text-xs px-0.5">
        <span class="font-semibold text-neutral-300 truncate w-3/4">${m.title}</span>
        <span class="text-green-500 font-bold">${m.rating}</span>
      </div>
      <div class="flex flex-wrap gap-1 px-0.5">
        ${m.streamingOn ? m.streamingOn.slice(0,2).map(s => `<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style="background:${s.color}22; color:${s.color};">${s.platform}</span>`).join('') : ''}
      </div>
    </div>
  `).join('') : `
    <div class="col-span-full py-20 text-center">
      <p class="text-neutral-400 text-sm mb-4">No results for "${query}".</p>
      <p class="text-neutral-500 text-xs mb-4">Try searching by title, genre, or streaming platform (e.g. "Netflix")</p>
      <button onclick="window.location.hash='#home'" class="bg-primary text-white px-6 py-2 rounded font-semibold text-sm hover:bg-primary-hover">Return Home</button>
    </div>
  `;

  container.innerHTML = `
    <main class="pt-24 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto select-none">
      <header class="mb-8">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">Search results for</p>
        <h1 class="font-title text-2xl md:text-4xl font-extrabold text-white tracking-tight">"${query}"</h1>
        <p class="text-neutral-500 text-xs mt-2">${results.length} title${results.length !== 1 ? 's' : ''} found</p>
      </header>
      <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">${grid}</section>
    </main>
  `;
}

// ============================================================
// VIEW: WATCHLIST
// ============================================================

function renderWatchlist() {
  const container = document.getElementById('app-view');
  const list = movies.filter(m => state.watchlist.includes(m.id));
  const grid = list.length > 0 ? list.map(m => `
    <div class="group relative cursor-pointer flex flex-col gap-2" onclick="window.openMovieDetailModal('${m.id}')">
      <div class="aspect-[2/3] rounded-sm overflow-hidden border border-neutral-800 transition-all duration-300 group-hover:scale-105 shadow-lg">
        <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}" loading="lazy"/>
      </div>
      <div class="flex items-center justify-between text-xs px-0.5">
        <span class="font-semibold text-neutral-300 truncate w-3/4">${m.title}</span>
        <button class="text-neutral-500 hover:text-primary transition-colors" onclick="event.stopPropagation(); window.toggleWatchlistGlobal('${m.id}')" title="Remove">
          <span class="material-symbols-outlined text-lg">delete</span>
        </button>
      </div>
      <div class="flex flex-wrap gap-1 px-0.5">
        ${m.streamingOn ? m.streamingOn.slice(0,3).map(s => `<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style="background:${s.color}22; color:${s.color};">${s.platform}</span>`).join('') : ''}
      </div>
    </div>
  `).join('') : `
    <div class="col-span-full py-20 text-center">
      <span class="material-symbols-outlined text-neutral-600 text-5xl mb-3 block">bookmark_border</span>
      <p class="text-neutral-400 text-sm mb-6">Your List is empty.</p>
      <button onclick="window.location.hash='#home'" class="bg-primary text-white px-6 py-2 rounded font-semibold text-sm hover:bg-primary-hover">Browse Titles</button>
    </div>
  `;

  container.innerHTML = `
    <main class="pt-24 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto select-none">
      <header class="mb-8">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">Saved collection</p>
        <h1 class="font-title text-2xl md:text-4xl font-extrabold text-white tracking-tight">My List</h1>
      </header>
      <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">${grid}</section>
    </main>
  `;
}

// ============================================================
// VIEW: MOVIES & SERIES (with genre filter)
// ============================================================

function renderMoviesList(activeGenre = 'All') {
  const container = document.getElementById('app-view');
  let list = movies.filter(m => m.type === 'movie');
  if (activeGenre !== 'All') list = list.filter(m => m.genre.includes(activeGenre) || m.subGenre === activeGenre);
  const allGenres = ['All', ...new Set(movies.filter(m => m.type === 'movie').flatMap(m => m.genre))].sort();

  container.innerHTML = `
    <main class="pt-24 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto select-none">
      <header class="mb-6">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">Cinematic Catalog</p>
        <h1 class="font-title text-2xl md:text-4xl font-extrabold text-white tracking-tight">Movies</h1>
      </header>
      <div class="flex flex-wrap gap-2 mb-8">
        ${allGenres.map(g => `
          <button onclick="window.renderMoviesFilterGlobal('${g}')"
            class="px-3 py-1.5 rounded-full text-xs font-bold border transition-all hover:scale-105 ${activeGenre === g ? 'bg-primary text-white border-primary' : 'border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-white'}">
            ${g}
          </button>
        `).join('')}
      </div>
      <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        ${list.map(m => `
          <div class="group relative cursor-pointer flex flex-col gap-2" onclick="window.openMovieDetailModal('${m.id}')">
            <div class="aspect-[2/3] rounded-sm overflow-hidden border border-neutral-800 transition-all duration-300 group-hover:scale-105 shadow-lg">
              <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}" loading="lazy"/>
            </div>
            <div class="flex items-center justify-between text-xs px-0.5">
              <span class="font-semibold text-neutral-300 truncate w-3/4">${m.title}</span>
              <span class="text-green-500 font-bold">${m.rating}</span>
            </div>
            <div class="flex flex-wrap gap-1 px-0.5">
              ${m.streamingOn ? m.streamingOn.slice(0,2).map(s => `<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style="background:${s.color}22; color:${s.color};">${s.platform}</span>`).join('') : ''}
            </div>
          </div>
        `).join('')}
      </section>
    </main>
  `;
}

window.renderMoviesFilterGlobal = renderMoviesList;

function renderSeriesList(activeGenre = 'All') {
  const container = document.getElementById('app-view');
  let list = movies.filter(m => m.type === 'series');
  if (activeGenre !== 'All') list = list.filter(m => m.genre.includes(activeGenre));
  const allGenres = ['All', ...new Set(movies.filter(m => m.type === 'series').flatMap(m => m.genre))].sort();

  container.innerHTML = `
    <main class="pt-24 pb-16 px-6 md:px-12 max-w-[1440px] mx-auto select-none">
      <header class="mb-6">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-1.5">Serial Broadcasts</p>
        <h1 class="font-title text-2xl md:text-4xl font-extrabold text-white tracking-tight">TV Series</h1>
      </header>
      <div class="flex flex-wrap gap-2 mb-8">
        ${allGenres.map(g => `
          <button onclick="window.renderSeriesFilterGlobal('${g}')"
            class="px-3 py-1.5 rounded-full text-xs font-bold border transition-all hover:scale-105 ${activeGenre === g ? 'bg-primary text-white border-primary' : 'border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-white'}">
            ${g}
          </button>
        `).join('')}
      </div>
      <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        ${list.map(m => `
          <div class="group relative cursor-pointer flex flex-col gap-2" onclick="window.openMovieDetailModal('${m.id}')">
            <div class="aspect-[2/3] rounded-sm overflow-hidden border border-neutral-800 transition-all duration-300 group-hover:scale-105 shadow-lg">
              <img class="w-full h-full object-cover" src="${m.poster}" alt="${m.title}" loading="lazy"/>
            </div>
            <div class="flex items-center justify-between text-xs px-0.5">
              <span class="font-semibold text-neutral-300 truncate w-3/4">${m.title}</span>
              <span class="text-green-500 font-bold">${m.rating}</span>
            </div>
            <div class="flex flex-wrap gap-1 px-0.5">
              ${m.streamingOn ? m.streamingOn.slice(0,2).map(s => `<span class="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style="background:${s.color}22; color:${s.color};">${s.platform}</span>`).join('') : ''}
            </div>
          </div>
        `).join('')}
      </section>
    </main>
  `;
}

window.renderSeriesFilterGlobal = renderSeriesList;

// ============================================================
// ROUTER
// ============================================================

function router() {
  if (!state.profile) { checkProfile(); return; }
  const raw = window.location.hash.slice(1) || 'home';
  let route = raw, param = '';
  if (raw.includes('?')) { [route, ] = raw.split('?'); param = new URLSearchParams(raw.split('?')[1]).get('q') || ''; }
  else if (raw.includes('/')) { [route, param] = [raw.split('/')[0], raw.split('/').slice(1).join('/')]; }

  document.getElementById('notification-dropdown').classList.remove('active');
  updateNavLinks(route);

  if (route === 'movie') {
    if (!document.querySelector('#app-view section, #app-view main')) renderHome();
    openDetailModal(param);
  } else if (route === 'genres') {
    if (param) renderGenreDetail(param);
    else renderGenres();
    closeDetailModal();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    closeDetailModal();
    const renderers = { home: renderHome, search: () => renderSearch(param), watchlist: renderWatchlist, movies: renderMoviesList, series: renderSeriesList };
    (renderers[route] || renderHome)();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

window.toggleWatchlistGlobal = toggleWatchlist;

// ============================================================
// INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  checkProfile();

  document.querySelectorAll('.profile-card').forEach(card => {
    card.addEventListener('click', () => switchProfile(card.getAttribute('data-profile')));
  });

  window.addEventListener('scroll', () => {
    document.getElementById('top-nav').classList.toggle('solid', window.scrollY > 30);
  });

  document.getElementById('search-input').addEventListener('input', (e) => {
    const val = e.target.value.trim();
    window.location.hash = val ? `#search?q=${encodeURIComponent(val)}` : '#home';
  });

  document.getElementById('notif-clear').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('notif-list').innerHTML = `<p class="text-xs text-neutral-500 text-center py-4 select-none">No new notifications</p>`;
    document.getElementById('notif-badge')?.classList.add('hidden');
  });

  document.getElementById('dropdown-switch-profile').addEventListener('click', signOut);
  document.getElementById('dropdown-signout').addEventListener('click', signOut);

  const notifBtn = document.getElementById('notification-btn');
  const notifDropdown = document.getElementById('notification-dropdown');
  notifBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    notifDropdown.classList.toggle('active');
    document.getElementById('notif-badge')?.classList.add('hidden');
  });
  document.addEventListener('click', () => notifDropdown.classList.remove('active'));

  window.addEventListener('hashchange', router);
  if (state.profile) router();
});

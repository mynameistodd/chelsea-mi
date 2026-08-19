/**
 * Chelsea, MI Activities Directory - Application Controller
 * Handles dynamic rendering, instant live search, category filtering,
 * modal popups, domain detection, and GA4 event tracking.
 */

// Global App State
const state = {
  currentCategory: 'all',
  searchQuery: '',
  activeModalActivityId: null
};

// Domain list mapping for friendly greeting
const KNOWN_DOMAINS = [
  'chelseami.us',
  'ChelseaMichigan.us',
  'ChelseaMI.info'
];

/**
 * Initialize Application
 */
document.addEventListener('DOMContentLoaded', () => {
  initDomainBanner();
  renderCategoryFilters();
  renderDirectory();
  setupSearchEvents();
  setupKeyboardShortcuts();
  setupModalEvents();
});

/**
 * Detects current hostname and updates the top banner
 */
function initDomainBanner() {
  const currentHost = window.location.hostname.toLowerCase();
  const domainBadgeEl = document.getElementById('current-domain-badge');
  const greetingTextEl = document.getElementById('domain-greeting-text');
  
  if (!domainBadgeEl) return;

  if (currentHost.includes('chelseami.us')) {
    domainBadgeEl.textContent = 'chelseami.us';
    greetingTextEl.textContent = '👋 You reached us via chelseami.us — Chelsea\'s quickest community directory!';
  } else if (currentHost.includes('chelseamichigan.us')) {
    domainBadgeEl.textContent = 'ChelseaMichigan.us';
    greetingTextEl.textContent = '🌟 Welcome via ChelseaMichigan.us — Explore everything we love in town!';
  } else if (currentHost.includes('chelseami.info')) {
    domainBadgeEl.textContent = 'ChelseaMI.info';
    greetingTextEl.textContent = 'ℹ️ Quick facts & community hub via ChelseaMI.info!';
  } else {
    // Localhost or preview deployment
    domainBadgeEl.textContent = currentHost || 'chelseami.us';
    greetingTextEl.innerHTML = `🎉 Serving <strong>chelseami.us</strong>, <strong>ChelseaMichigan.us</strong> & <strong>ChelseaMI.info</strong>!`;
  }
}

/**
 * Renders category filter buttons dynamically
 */
function renderCategoryFilters() {
  const filterContainer = document.getElementById('category-filter-bar');
  if (!filterContainer || typeof CATEGORIES === 'undefined') return;

  filterContainer.innerHTML = CATEGORIES.map(cat => `
    <button type="button" 
            class="filter-btn ${cat.id === state.currentCategory ? 'active' : ''}" 
            data-category="${cat.id}"
            onclick="setCategory('${cat.id}')">
      <span>${cat.icon}</span>
      <span>${cat.label}</span>
    </button>
  `).join('');
}

/**
 * Filter handler for category buttons
 */
window.setCategory = function(categoryId) {
  state.currentCategory = categoryId;
  
  // Update active pill styling
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === categoryId);
  });

  // Dispatch GA4 event
  trackGAEvent('filter_category', { category: categoryId });

  renderDirectory();
};

/**
 * Sets up real-time search input listening with debounce
 */
function setupSearchEvents() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  let debounceTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    state.searchQuery = e.target.value.trim().toLowerCase();
    
    debounceTimer = setTimeout(() => {
      renderDirectory();
      if (state.searchQuery.length > 2) {
        trackGAEvent('search_directory', { query: state.searchQuery });
      }
    }, 150);
  });
}

/**
 * Main rendering loop for activity cards
 */
function renderDirectory() {
  const gridContainer = document.getElementById('directory-grid');
  if (!gridContainer || typeof ACTIVITIES === 'undefined') return;

  // Filter activities by category and search query
  const filtered = ACTIVITIES.filter(item => {
    const matchesCategory = (state.currentCategory === 'all') || (item.category === state.currentCategory);
    
    if (!state.searchQuery) return matchesCategory;

    const fullSearchCorpus = [
      item.title,
      item.shortName,
      item.tagline,
      item.description,
      item.categoryLabel,
      item.location?.venue,
      item.location?.city,
      ...(item.tags || [])
    ].filter(Boolean).join(' ').toLowerCase();

    const matchesSearch = fullSearchCorpus.includes(state.searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="no-results-box">
        <div class="no-results-icon">🔎</div>
        <h3 style="font-family: var(--font-heading); font-size: 1.4rem; margin-bottom: 6px;">No activities found</h3>
        <p style="color: var(--text-muted); margin-bottom: 16px;">We couldn't find anything matching "<strong>${escapeHtml(state.searchQuery)}</strong>".</p>
        <button class="btn btn-secondary" onclick="resetFilters()">Clear Search & Filters</button>
      </div>
    `;
    return;
  }

  // Generate cards
  const cardsHtml = filtered.map(item => createCardHtml(item)).join('');

  const suggestUrl = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.suggestActivityFormUrl) 
    ? SITE_CONFIG.suggestActivityFormUrl 
    : 'https://forms.google.com/';

  // Add the fun "Suggest an Activity" card at the end
  const suggestCardHtml = `
    <div class="activity-card suggest-card">
      <div class="suggest-icon">💡</div>
      <h3 class="card-title" style="font-size: 1.25rem;">Got an activity to add?</h3>
      <p class="card-description" style="margin-bottom: 20px;">
        Know another Chelsea club, team, or community group that should be listed here?
      </p>
      <a href="${suggestUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" onclick="trackGAEvent('click_suggest_activity')">
        Suggest via Google Form 📝
      </a>
    </div>
  `;

  gridContainer.innerHTML = cardsHtml + suggestCardHtml;
}

/**
 * Creates HTML string for a single activity card
 */
function createCardHtml(item) {
  const primaryLink = item.links?.find(l => l.primary) || item.links?.[0];
  const accentColor = item.accentColor || '#ff5e7e';
  const lightAccentBg = hexToRgba(accentColor, 0.12);

  return `
    <article class="activity-card" style="--card-accent: ${accentColor}; --card-accent-bg: ${lightAccentBg};" data-activity-id="${item.id}">
      <div class="card-header">
        <div class="card-icon-wrap">${item.icon || '📌'}</div>
        <span class="card-badge">${item.badge || item.categoryLabel}</span>
      </div>

      <h3 class="card-title">${escapeHtml(item.title)}</h3>
      <p class="card-tagline">${escapeHtml(item.tagline)}</p>
      
      <p class="card-description">${escapeHtml(item.description)}</p>

      ${item.quirkyFact ? `
        <div class="card-quirky-callout">
          <span class="callout-icon">✨</span>
          <span>${escapeHtml(item.quirkyFact)}</span>
        </div>
      ` : ''}

      <ul class="card-meta-list">
        ${item.schedule?.timing ? `
          <li class="card-meta-item">
            <span class="meta-icon">⏰</span>
            <span>${escapeHtml(item.schedule.timing)}</span>
          </li>
        ` : ''}
        ${item.location?.venue ? `
          <li class="card-meta-item">
            <span class="meta-icon">📍</span>
            <span>${escapeHtml(item.location.venue)}</span>
          </li>
        ` : ''}
      </ul>

      <div class="card-actions">
        ${primaryLink ? `
          <a href="${primaryLink.url}" target="_blank" rel="noopener" class="btn btn-primary" onclick="trackGAEvent('click_primary_link', { activity: '${item.id}', url: '${primaryLink.url}' })">
            ${escapeHtml(primaryLink.label)} ↗
          </a>
        ` : ''}
        <button type="button" class="btn btn-secondary" onclick="openActivityModal('${item.id}')">
          Details 🔍
        </button>
      </div>
    </article>
  `;
}

/**
 * Opens detailed modal for an activity
 */
window.openActivityModal = function(activityId) {
  const item = ACTIVITIES.find(a => a.id === activityId);
  if (!item) return;

  state.activeModalActivityId = activityId;
  const modalBackdrop = document.getElementById('activity-modal-backdrop');
  const modalContent = document.getElementById('modal-dynamic-content');

  const linksHtml = (item.links || []).map(link => `
    <a href="${link.url}" target="_blank" rel="noopener" class="btn ${link.primary ? 'btn-primary' : 'btn-secondary'}" style="justify-content: space-between;" onclick="trackGAEvent('click_modal_link', { activity: '${item.id}', label: '${link.label}' })">
      <span>${escapeHtml(link.label)}</span>
      <span>↗</span>
    </a>
  `).join('');

  modalContent.innerHTML = `
    <div class="modal-header-meta">
      <div class="modal-icon">${item.icon || '📌'}</div>
      <div>
        <span class="card-badge" style="display:inline-block; margin-bottom: 4px;">${escapeHtml(item.badge || item.categoryLabel)}</span>
        <h2 style="font-family: var(--font-heading); font-size: 1.6rem; color: var(--text-main);">${escapeHtml(item.title)}</h2>
      </div>
    </div>

    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 16px; font-weight: 500;">
      ${escapeHtml(item.tagline)}
    </p>

    <p style="color: #334155; line-height: 1.6; margin-bottom: 20px;">
      ${escapeHtml(item.description)}
    </p>

    ${item.quirkyFact ? `
      <div class="card-quirky-callout" style="margin-bottom: 20px; font-size: 0.9rem;">
        <span class="callout-icon">💡</span>
        <span>${escapeHtml(item.quirkyFact)}</span>
      </div>
    ` : ''}

    <div class="modal-body">
      <h4>📍 Where We Meet</h4>
      <p style="color: #475569; margin-bottom: 4px;"><strong>${escapeHtml(item.location?.venue || 'Chelsea, MI')}</strong></p>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 12px;">${escapeHtml(item.location?.city || '')}</p>
      ${item.location?.mapUrl ? `
        <a href="${item.location.mapUrl}" target="_blank" rel="noopener" style="color: var(--brand-coral); font-size: 0.88rem; font-weight: 600; text-decoration: underline;">
          Open in Google Maps ↗
        </a>
      ` : ''}

      <h4>⏰ Schedule & Season</h4>
      <p style="color: #475569; margin-bottom: 4px;">${escapeHtml(item.schedule?.timing || 'Contact leadership for meeting dates')}</p>
      <p style="color: var(--text-muted); font-size: 0.88rem;">${escapeHtml(item.schedule?.season || '')}</p>

      ${item.contact?.email ? `
        <h4>✉️ Contact Leadership</h4>
        <p style="color: #475569;">
          <strong>${escapeHtml(item.contact.role || 'Contact')}:</strong> 
          <a href="mailto:${item.contact.email}" style="color: var(--brand-coral); text-decoration: underline;">${escapeHtml(item.contact.email)}</a>
        </p>
      ` : ''}

      <h4>🔗 Quick Resources & Links</h4>
      <div class="modal-links-grid">
        ${linksHtml}
      </div>
    </div>
  `;

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';

  trackGAEvent('view_activity_modal', { activity: activityId });
};

/**
 * Closes modal
 */
window.closeActivityModal = function() {
  const modalBackdrop = document.getElementById('activity-modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
  }
  document.body.style.overflow = '';
  state.activeModalActivityId = null;
};

/**
 * Sets up backdrop and ESC key modal closing
 */
function setupModalEvents() {
  const modalBackdrop = document.getElementById('activity-modal-backdrop');
  if (!modalBackdrop) return;

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeActivityModal();
    }
  });
}

/**
 * Keyboard shortcuts ('/' or Ctrl+K for search, Escape to close/clear)
 */
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    const searchInput = document.getElementById('search-input');
    
    // Focus search on '/' or 'Ctrl+K' / 'Cmd+K'
    if ((e.key === '/' && document.activeElement !== searchInput) || 
        ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      searchInput?.focus();
      searchInput?.select();
    }

    // Escape closes modal or clears search
    if (e.key === 'Escape') {
      if (state.activeModalActivityId) {
        closeActivityModal();
      } else if (searchInput && document.activeElement === searchInput) {
        searchInput.value = '';
        state.searchQuery = '';
        renderDirectory();
        searchInput.blur();
      }
    }
  });
}

/**
 * Resets search input & category filters
 */
window.resetFilters = function() {
  state.searchQuery = '';
  state.currentCategory = 'all';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  renderCategoryFilters();
  renderDirectory();
};

/**
 * Google Analytics 4 Event Dispatcher Helper
 */
function trackGAEvent(eventName, params = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      ...params,
      hostname: window.location.hostname
    });
  } else {
    // Helpful debug log during local testing
    // console.log(`[GA4 Event] ${eventName}:`, params);
  }
}

/**
 * Utility: Escape HTML to avoid XSS
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Utility: Convert HEX color to RGBA
 */
function hexToRgba(hex, alpha = 1) {
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c.split('').map(x => x + x).join('');
  }
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

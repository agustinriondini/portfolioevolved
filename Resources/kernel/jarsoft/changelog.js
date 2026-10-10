
(function () {
  'use strict';

  let allReleases = [];
  let currentFilter = 'all';
  let searchQuery = '';

  const CATEGORY_SVGS = {
    new: `
      <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    `,
    update: `
      <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="23 4 23 10 17 10"></polyline>
        <polyline points="1 20 1 14 7 14"></polyline>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
      </svg>
    `,
    bugfix: `
      <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    `,
    ui: `
      <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    `,
    delete: `
      <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      </svg>
    `
  };

  const CATEGORY_NAMES = {
    new: 'Novedad',
    update: 'Mejora',
    bugfix: 'Corrección',
    ui: 'Diseño UI',
    delete: 'Eliminado'
  };

  function parseChangelog(rawText) {
    const sections = rawText.split(/(?:={10,}|\r?\n(?=## ))/);
    const releases = [];

    for (let sec of sections) {
      sec = sec.trim();
      if (!sec || !sec.includes('## ')) continue;

      const lines = sec.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
      const headerLine = lines.find(l => l.startsWith('## '));
      if (!headerLine) continue;

      const header = headerLine.replace(/^##\s*/, '');

      let version = 'v1.0.0';
      const vMatch = header.match(/(v\d+\.\d+\.\d+|v\d+\.\d+)/i);
      if (vMatch) {
        version = vMatch[1];
      } else if (header.toLowerCase().includes('build')) {
        const parts = header.split(/\s+/);
        version = parts[0] || 'Build';
      }

      let build = '';
      const bMatch = header.match(/(build#?\d+|build\d+)/i);
      if (bMatch) {
        build = bMatch[1].replace(/build#?/i, 'Build #');
      }

      let date = '';
      const dMatch = header.match(/(\d{8}|\d{6}|\d{1,2}\/\d{1,2}\/\d{4})/);
      if (dMatch) {
        const dStr = dMatch[1];
        if (dStr.length === 8 && !dStr.includes('/')) {
          if (dStr.startsWith('2024') || dStr.startsWith('2025') || dStr.startsWith('2026')) {
            date = `${dStr.slice(0, 4)}-${dStr.slice(4, 6)}-${dStr.slice(6, 8)}`;
          } else {
            date = `${dStr.slice(0, 2)}/${dStr.slice(2, 4)}/${dStr.slice(4, 8)}`;
          }
        } else {
          date = dStr;
        }
      }

      let tag = '';
      const words = header.split(/\s+/);
      const lastWord = words[words.length - 1];
      if (lastWord && !lastWord.toLowerCase().includes('build') && !lastWord.toLowerCase().includes('update') && lastWord !== version) {
        tag = lastWord.replace(/_/g, ' ');
      }

      const items = [];
      for (const line of lines) {
        if (line.startsWith('## ')) continue;

        const m = line.match(/^-\s*\[([^\]]+)\]\s*(.*)$/);
        if (m) {
          const rawType = m[1].trim();
          const desc = m[2].trim();
          let cat = 'update';
          const lower = rawType.toLowerCase();

          if (lower.includes('new') || lower.includes('added') || lower.includes('nueva') || lower.includes('first')) {
            cat = 'new';
          } else if (lower.includes('fix') || lower.includes('bug') || lower.includes('hotfix')) {
            cat = 'bugfix';
          } else if (lower.includes('ui')) {
            cat = 'ui';
          } else if (lower.includes('delete')) {
            cat = 'delete';
          }

          items.push({ type: rawType, cat, desc });
        } else if (line.startsWith('-')) {
          items.push({
            type: 'Update',
            cat: 'update',
            desc: line.replace(/^-\s*/, '')
          });
        }
      }

      if (items.length > 0 || header) {
        releases.push({
          rawHeader: header,
          version,
          build: build || 'General',
          date: date || 'Registrado',
          tag,
          items
        });
      }
    }

    return releases;
  }

  function renderFeed() {
    const feed = document.getElementById('changelogFeed');
    const noResults = document.getElementById('noResultsState');
    if (!feed) return;

    const query = searchQuery.trim().toLowerCase();

    const filteredReleases = allReleases.map(release => {
      let matchingItems = release.items;

      if (currentFilter !== 'all') {
        matchingItems = matchingItems.filter(item => item.cat === currentFilter);
      }

      if (query) {
        const headerMatches = release.version.toLowerCase().includes(query) ||
          release.build.toLowerCase().includes(query) ||
          release.tag.toLowerCase().includes(query);

        if (!headerMatches) {
          matchingItems = matchingItems.filter(item =>
            item.desc.toLowerCase().includes(query) ||
            item.type.toLowerCase().includes(query)
          );
        }
      }

      return {
        ...release,
        items: matchingItems,
        hasMatches: matchingItems.length > 0 || (query && release.version.toLowerCase().includes(query))
      };
    }).filter(r => r.hasMatches);

    if (filteredReleases.length === 0) {
      feed.innerHTML = '';
      if (noResults) noResults.style.display = 'flex';
      return;
    }

    if (noResults) noResults.style.display = 'none';

    let html = '';

    filteredReleases.forEach((rel, index) => {
      const isLatest = index === 0;

      html += `
        <article class="releaseCard ${isLatest ? 'latestRelease' : ''}">
          <div class="releaseHeader">
            <div class="releaseTitleGroup">
              <span class="versionBadge">${rel.version}</span>
              ${rel.build ? `<span class="buildBadge">${rel.build}</span>` : ''}
              ${rel.tag ? `<span class="releaseTagPill">${rel.tag}</span>` : ''}
              ${isLatest ? `<span class="latestPill">Última Versión</span>` : ''}
            </div>
            <div class="releaseDateBadge">
              <svg class="svg-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>${rel.date}</span>
            </div>
          </div>

          <ul class="changeItemList">
            ${rel.items.map(item => `
              <li class="changeItem">
                <span class="categoryPill ${item.cat}">
                  ${CATEGORY_SVGS[item.cat] || CATEGORY_SVGS.update}
                  <span>${CATEGORY_NAMES[item.cat] || item.type}</span>
                </span>
                <span class="changeDesc">${escapeHTML(item.desc)}</span>
              </li>
            `).join('')}
          </ul>
        </article>
      `;
    });

    feed.innerHTML = html;
  }

  function escapeHTML(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function setupControls() {

    const filterBtns = document.querySelectorAll('.filterBtn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter') || 'all';
        renderFeed();
      });
    });

    const searchInput = document.getElementById('changelogSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (clearBtn) {
          clearBtn.style.display = searchQuery ? 'flex' : 'none';
        }
        renderFeed();
      });
    }

    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearBtn.style.display = 'none';
        searchInput.focus();
        renderFeed();
      });
    }
  }

  function initChangelog() {
    fetch('../../../README.md')
      .then(response => {
        if (!response.ok) throw new Error('No se pudo cargar README.md');
        return response.text();
      })
      .then(rawText => {
        allReleases = parseChangelog(rawText);

        const statCount = document.getElementById('statReleasesCount');
        if (statCount) statCount.textContent = allReleases.length;

        if (allReleases.length > 0) {
          const statVer = document.getElementById('statVersion');
          if (statVer) statVer.textContent = allReleases[0].version;

          const statBld = document.getElementById('statBuild');
          if (statBld) statBld.textContent = allReleases[0].build;

          const topBadge = document.getElementById('topVersionBadge');
          if (topBadge) topBadge.textContent = allReleases[0].version;
        }

        setupControls();
        renderFeed();
      })
      .catch(err => {
        console.error('Error cargando changelog:', err);
        const feed = document.getElementById('changelogFeed');
        if (feed) {
          feed.innerHTML = `
            <div class="changelogError">
              <svg class="svg-icon" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#ef4444" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <h3>Error al cargar el registro de cambios</h3>
              <p>No se pudo acceder al archivo README.md. Verifica tu conexión o intenta nuevamente.</p>
            </div>
          `;
        }
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChangelog);
  } else {
    initChangelog();
  }

})();
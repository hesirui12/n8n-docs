/* n8n 官方文档站 · 客户端交互（纯原生）
 * - 站内搜索（侧栏 + ⌘K 模态）
 * - 左侧目录树抽屉（移动端）
 * - GitBook tabs 切换
 * - 右侧 TOC 滚动高亮
 */
(function () {
  'use strict';

  var index = window.SEARCH_INDEX || [];

  /* ---------- 搜索 ---------- */
  function normalize(s) {
    return (s || '').toLowerCase().replace(/\s+/g, ' ');
  }

  function search(q) {
    q = normalize(q);
    if (!q) return [];
    var hits = [];
    for (var i = 0; i < index.length; i++) {
      var p = index[i];
      var t = normalize(p.t), s = normalize(p.s);
      var score = 0;
      if (t.indexOf(q) !== -1) score += 10;
      if (s.indexOf(q) !== -1) score += 1;
      if (score > 0) hits.push({ p: p, score: score });
    }
    hits.sort(function (a, b) { return b.score - a.score; });
    return hits.slice(0, 8);
  }

  function renderInto(container, hits) {
    container.innerHTML = '';
    if (!hits.length) {
      var empty = document.createElement('div');
      empty.className = 'osr-empty';
      empty.textContent = '未找到匹配内容';
      container.appendChild(empty);
      return;
    }
    hits.forEach(function (hit) {
      var a = document.createElement('a');
      a.href = '../official/' + hit.p.u;
      var t = document.createElement('span');
      t.className = 'osr-title';
      t.textContent = hit.p.t;
      a.appendChild(t);
      container.appendChild(a);
    });
  }

  /* 侧栏搜索 */
  var input = document.getElementById('ob-search-input');
  var results = document.getElementById('ob-search-results');
  if (input && results) {
    input.addEventListener('input', function () {
      var q = input.value.trim();
      if (!q) { results.hidden = true; return; }
      renderInto(results, search(q));
      results.hidden = false;
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== input && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
        e.preventDefault();
        input.focus();
        input.select();
      }
    });
  }

  /* ⌘K 模态 */
  var modal = document.getElementById('ob-modal');
  var toggleBtn = document.getElementById('ob-search-toggle');
  var modalInput = document.getElementById('ob-modal-input');
  var modalResults = document.getElementById('ob-modal-results');
  if (modal && toggleBtn && modalInput) {
    function openModal() {
      modal.hidden = false;
      modalResults.innerHTML = '';
      setTimeout(function () { modalInput.focus(); }, 30);
    }
    function closeModal() {
      modal.hidden = true;
      modalInput.value = '';
      modalResults.innerHTML = '';
    }
    toggleBtn.addEventListener('click', openModal);
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openModal(); }
      if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
    modalInput.addEventListener('input', function () {
      renderInto(modalResults, search(modalInput.value.trim()));
    });
  }

  /* 移动端抽屉 */
  var sidebar = document.getElementById('ob-sidebar');
  var menuBtn = document.getElementById('ob-menu-toggle');
  if (sidebar && menuBtn) {
    menuBtn.addEventListener('click', function () { sidebar.classList.toggle('open'); });
    document.addEventListener('click', function (e) {
      if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== menuBtn) {
        sidebar.classList.remove('open');
      }
    });
  }

  /* GitBook tabs */
  document.querySelectorAll('[data-tabs]').forEach(function (tabs) {
    var btns = tabs.querySelectorAll('.gb-tab-btn');
    var panels = tabs.querySelectorAll('.gb-tab-panel');
    if (!btns.length) return;
    btns[0].classList.add('is-active');
    if (panels[0]) panels[0].classList.add('is-active');
    btns.forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.classList.remove('is-active'); });
        panels.forEach(function (p) { p.classList.remove('is-active'); });
        btn.classList.add('is-active');
        if (panels[i]) panels[i].classList.add('is-active');
      });
    });
  });

  /* 右侧 TOC 滚动高亮 */
  var toc = document.getElementById('ob-toc');
  var body = document.querySelector('.ob-markdown');
  if (toc && body) {
    var headings = Array.prototype.slice.call(body.querySelectorAll('h2[id], h3[id]'));
    var tocLinks = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
    if (headings.length && tocLinks.length) {
      var ticking = false;
      function update() {
        ticking = false;
        var current = null;
        for (var i = headings.length - 1; i >= 0; i--) {
          if (headings[i].getBoundingClientRect().top <= 96) { current = headings[i]; break; }
        }
        if (!current && (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 4) {
          current = headings[headings.length - 1];
        }
        var id = current ? current.id : null;
        tocLinks.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
      function onScroll() {
        if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      update();
    }
  }
})();

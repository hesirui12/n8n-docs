/* n8n 入门教程站点 · 客户端交互（纯原生，无依赖）
 * - 移动端侧边栏抽屉
 * - 站内搜索（/ 快捷键聚焦）
 * - 右侧目录滚动高亮（scrollspy）
 */
(function () {
  'use strict';

  var index = window.SEARCH_INDEX || [];
  var sidebar = document.getElementById('sidebar');
  var toggle = document.getElementById('menu-toggle');
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');

  /* ---------- 移动端侧边栏 ---------- */
  if (toggle) {
    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== toggle) {
        sidebar.classList.remove('open');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      }
    });
  }

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
      var t = normalize(p.t), h = normalize(p.h.join(' ')), s = normalize(p.s);
      var score = 0;
      if (t.indexOf(q) !== -1) score += 10;
      if (h.indexOf(q) !== -1) score += 4;
      if (s.indexOf(q) !== -1) score += 1;
      if (score > 0) hits.push({ p: p, score: score });
    }
    hits.sort(function (a, b) { return b.score - a.score; });
    return hits.slice(0, 8);
  }

  function renderResults(hits) {
    results.innerHTML = '';
    if (!hits.length) {
      var empty = document.createElement('div');
      empty.className = 'sr-empty';
      empty.textContent = '未找到匹配内容';
      results.appendChild(empty);
      return;
    }
    hits.forEach(function (hit) {
      var a = document.createElement('a');
      a.href = hit.p.u;
      var t = document.createElement('span');
      t.className = 'sr-title';
      t.textContent = hit.p.t;
      var hint = document.createElement('span');
      hint.className = 'sr-hint';
      hint.textContent = '  ' + hit.p.h.slice(0, 2).join(' · ');
      a.appendChild(t);
      a.appendChild(hint);
      results.appendChild(a);
    });
  }

  if (input) {
    input.addEventListener('input', function () {
      var q = input.value.trim();
      if (!q) { results.hidden = true; return; }
      renderResults(search(q));
      results.hidden = false;
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { results.hidden = true; input.value = ''; input.blur(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== input && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
        e.preventDefault();
        input.focus();
        input.select();
      }
    });
    results.addEventListener('click', function () {
      results.hidden = true;
      input.value = '';
    });
  }

  /* ---------- 右侧目录滚动高亮 ---------- */
  var toc = document.getElementById('toc');
  var body = document.querySelector('.markdown-body');
  if (toc && body) {
    var headings = Array.prototype.slice.call(body.querySelectorAll('h2[id], h3[id]'));
    var tocLinks = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
    var map = {};
    headings.forEach(function (h) { map[h.id] = h; });

    var ticking = false;
    function updateActive() {
      ticking = false;
      if (!headings.length) return;
      var offset = 96;
      var current = null;
      for (var i = headings.length - 1; i >= 0; i--) {
        if (headings[i].getBoundingClientRect().top <= offset) { current = headings[i]; break; }
      }
      // 页面接近底部时高亮最后一个
      if (!current && (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 4) {
        current = headings[headings.length - 1];
      }
      var id = current ? current.id : null;
      tocLinks.forEach(function (a) {
        var match = a.getAttribute('href') === '#' + id;
        if (match) a.classList.add('active');
        else a.classList.remove('active');
      });
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActive);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateActive();
  }
})();

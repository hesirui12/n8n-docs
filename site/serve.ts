/**
 * n8n 入门教程站点 · 本地预览服务器（Bun）
 * 用法：bun run serve   （先 bun run build）
 * 环境变量 PORT 可改端口（默认 3000）
 */
import { join } from 'node:path';

const DIST = join(import.meta.dir, 'dist');
const PORT = Number(process.env.PORT ?? 3000);

const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    let path: string;
    try {
      path = decodeURIComponent(url.pathname);
    } catch {
      path = url.pathname; // 非法百分比编码时退回原样
    }
    if (path === '/') path = '/index.html';
    // 简易防目录穿越
    if (path.includes('..')) return new Response('Forbidden', { status: 403 });

    const file = Bun.file(join(DIST, path));
    if (await file.exists()) {
      const ext = path.slice(path.lastIndexOf('.')) || '';
      return new Response(file, { headers: { 'Content-Type': MIME[ext] ?? 'application/octet-stream' } });
    }
    return new Response('404 Not Found', { status: 404 });
  },
});

console.log('');
console.log(`  🌐 n8n 入门教程站点已启动:`);
console.log(`     http://localhost:${server.port}`);
console.log('');
console.log('  提示：修改 markdown 后请重新执行 bun run build');

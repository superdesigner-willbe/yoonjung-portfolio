import fs from 'node:fs';
import path from 'node:path';
const base = (process.env.BASE_PATH || '').replace(/\/$/, '');
if (base && !/^\/[A-Za-z0-9._/-]+$/.test(base)) throw new Error('Invalid BASE_PATH');
const entries = fs.readdirSync('.').filter(name => !name.startsWith('.') && !['scripts', '_site', 'README.md'].includes(name));
fs.rmSync('_site', { recursive: true, force: true });
fs.mkdirSync('_site');
for (const name of entries) fs.cpSync(name, path.join('_site', name), { recursive: true });
fs.writeFileSync('_site/.nojekyll', '');
function rewrite(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) rewrite(file);
    else if (/\.(html|css|js)$/.test(entry.name) && base) {
      const source = fs.readFileSync(file, 'utf8');
      fs.writeFileSync(file, source.replace(/(href=["'])\/(?=["'])/g, '$1' + base + '/').replace(/(["'`(])\/(?=(?:assets|videos|bollo|blloom|waymo|play|about|hyundai-ngv)\/|[A-Za-z0-9_-]+\.(?:css|js)(?:[?"'`)]))/g, '$1' + base + '/'));
    }
  }
}
rewrite('_site');
console.log('Built GitHub Pages site with base path: ' + (base || '/'));

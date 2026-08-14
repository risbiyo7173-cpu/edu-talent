import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = 'C:\\Users\\LitBang\\.gemini\\antigravity\\brain\\b2135517-1f5f-437c-871b-abc021f5ddf2\\edutalent_logo_1786678708434.jpg';
const dest = path.join(__dirname, 'public', 'logo.jpg');

try {
  fs.copyFileSync(src, dest);
  console.log('✅ Logo berhasil dipindahkan ke folder public!');
  console.log('Silakan jalankan ulang server Anda dengan "npm run dev" lalu refresh browser.');
} catch (e) {
  console.error('❌ Gagal menyalin:', e.message);
}

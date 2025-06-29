import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // 你的 GitHub Pages 網址
    site: 'https://Andy930809.github.io',

    // 因為你的倉庫名是 '使用者名稱.github.io'，所以 base 是根目錄 '/'
    base: '/',

    // 如果你之前為了中文亂碼問題加入了 vite 的設定，可以保留
    vite: {
        server: {
            headers: {
                'Content-Type': 'text/html; charset=UTF-8'
            }
        }
    }
});
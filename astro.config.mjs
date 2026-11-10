// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages:
// - Repo named <username>.github.io  -> site: 'https://<username>.github.io', base: '/'
// - Any other repo name (e.g. personal-site) -> also set base: '/personal-site'
export default defineConfig({
  site: 'https://msereeyothin.github.io',
  base: '/',
});

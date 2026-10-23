import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vidaitaliananapratica.com.br',
  redirects: {
    '/guia': '/#guia',
  },
});

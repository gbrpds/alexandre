import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vidaitaliananapratica.com.br',
  redirects: {
    '/mentoria': '/#mentoria',
    '/guia': '/#guia',
  },
});

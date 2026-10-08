import tailwindcss from '@tailwindcss/vite';

export default {
  site: 'https://nikitadmitrenco.github.io',
  base: '/dental-landing-demo',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
};

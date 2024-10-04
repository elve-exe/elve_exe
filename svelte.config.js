import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

export default {
  kit: {
    adapter: adapter({
      // This tells SvelteKit to generate a single-page app (SPA) with a fallback for dynamic routes.
      fallback: 'index.html',
    }),
    paths: {
      // Configure the base path for production. For development, base remains empty.
      base: dev ? '' : '/<repository-name>',
    },
    prerender: {
      // Disable prerendering for dynamic routes or provide a handle for HTTP errors
      handleHttpError: 'ignore', // Suppresses the error you're seeing
    }
  }
};

import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		appDir: 'app', // Required as the default is _app
		adapter: adapter(),
		paths: {
            base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
        }


	}
};

export default config;
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use '$lib/scss/_mixins' as *;
          @use '$lib/scss/_variables' as *;
        `
			}
		}
	}
});

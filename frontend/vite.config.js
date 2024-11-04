import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
	plugins: [react()],
	base: mode === 'production' ? '/static/frontend/' : '/',
	build: {
		outDir: '../main/static/frontend',
		emptyOutDir: true,
		rollupOptions: {
			input: '/index.html',
		},
	},
}));

import { defineConfig } from 'vite';
import { extractCommentsPlugin } from './vite-plugin-comment2md';
// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {}
	},
	server: {
		watch: {
			persistent: true,
			ignored: [/.log/]
		}
	},
	plugins: [extractCommentsPlugin()]
});

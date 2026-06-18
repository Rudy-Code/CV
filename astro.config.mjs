// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Plus Jakarta Sans',
			weights: ['300', '400', '500', '600', '700'],
			subsets: ['latin', 'latin-ext'],
			cssVariable: '--font-plus-jakarta-sans',
		},
	],
	integrations: [
		icon({
			include: {
				lucide: ['*'],
			},
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
})

import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},
	/* layout: {
        blog: 'src/routes/blog/post.svelte'
      }, */

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;

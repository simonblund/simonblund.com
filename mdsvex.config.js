import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import addClasses from 'rehype-add-classes';

const addclassesOpts = {
	pre: 'hljs',
	h1: 'text-2xl',
	h2: 'text-2xl',
	p: ['font-serif', 'my-4', 'pb-8', 'break-words', 'indent-1', 'capitalize', 'text-red-200'],
	li: 'list-inside',
	ul: 'list-inside list-disc',
}
const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},
	/* layout: {
        blog: 'src/routes/blog/post.svelte'
      }, */

	remarkPlugins: [],
	rehypePlugins: [
		[addClasses, addclassesOpts]
	]
});

export default config;

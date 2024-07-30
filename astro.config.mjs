import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import rehypeKatex from 'rehype-katex'; // relevant
import remarkMath from 'remark-math';   // relevant

export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: "dracula",
			wrap: false,
		}
	},
	integrations: [
		mdx({
			remarkPlugins: [remarkMath], // relevant
			rehypePlugins: [rehypeKatex] // relevant
		}),
	]
});
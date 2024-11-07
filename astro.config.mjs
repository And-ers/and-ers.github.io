import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://and-ers.github.io',
  output: 'static',
  integrations: [mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }),
  react()]
});
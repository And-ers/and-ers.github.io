import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import rehypeKatex from 'rehype-katex'; // relevant
import remarkMath from 'remark-math'; // relevant

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({
    remarkPlugins: [remarkMath],
    // relevant
    rehypePlugins: [rehypeKatex] // relevant
  }), react()]
});
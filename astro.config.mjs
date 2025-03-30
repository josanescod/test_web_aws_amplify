// @ts-check
import { defineConfig,  passthroughImageService } from 'astro/config';
import awsAmplify from 'astro-aws-amplify';

// https://astro.build/config
export default defineConfig({
  output: "static", // or "static" for static sites
  adapter: awsAmplify(),
  image: {
    service: passthroughImageService(), // Bypass sharp image processing
  },
});
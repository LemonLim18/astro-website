import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig();

//Pass in the object with integration array to the defineConfig function.
//Then, pass in the react() and vue() functions to the integrations array.
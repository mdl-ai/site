import { writable, get } from "svelte/store";


export const display = writable({
  sidebar: true,
  main: "home",
  theme: "light"
});


export const api = writable(import.meta.env.VITE_API);
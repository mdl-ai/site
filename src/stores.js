import { writable } from "svelte/store";

export const display = writable({
  sidebar: false,
  main: "home",
  dark: false
});

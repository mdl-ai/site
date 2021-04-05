import { writable } from "svelte/store";
export const display = writable({
  sidebar: false,
  main: "home",
  theme: "light"
});

export const api = writable("https://lxdd3ezxcj.execute-api.ap-southeast-2.amazonaws.com/Prod");
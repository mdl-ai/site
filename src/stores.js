import { writable, get } from "svelte/store";
export const display = writable({
  sidebar: true,
  main: "home",
  theme: "light"
});


console.log(import.meta)
// export const api = writable(import.meta.env.VITE_API);

export const api = writable("https://lxdd3ezxcj.execute-api.ap-southeast-2.amazonaws.com/Prod");
// export const api = writable("http://127.0.0.1:3000");
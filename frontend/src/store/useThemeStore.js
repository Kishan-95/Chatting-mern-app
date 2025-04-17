import { create } from "zustand";

export const useThemeStore = create((set) => {
  const initialTheme = localStorage.getItem("chat-theme") || "dark";
  document.documentElement.setAttribute("data-theme", initialTheme);

  return {
    theme: initialTheme,
    setTheme: (theme) => {
      localStorage.setItem("chat-theme", theme);
      document.documentElement.setAttribute("data-theme", theme); // **Apply to DOM**
      set({ theme });
    },
  };
});

import type { App, Plugin } from "vue";

type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(components: Plugin[]) {
  return ((app: App) => components.forEach((c) => app.use(c))) as Plugin;
}

export const withInstall = <T>(components: T) => {
  (components as SFCWithInstall<T>).install = function (app: App) {
    app.component((components as any).name, components as Plugin);
  };

  return components as SFCWithInstall<T>;
};

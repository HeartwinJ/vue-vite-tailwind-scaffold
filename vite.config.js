import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import {
  BugsnagBuildReporterPlugin,
  BugsnagSourceMapUploaderPlugin,
} from "vite-plugin-bugsnag";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const isProd = mode == "production";
  return defineConfig({
    envPrefix: ["VITE_", "BGSNG_"],
    plugins: [
      vue(),
      isProd &&
        BugsnagBuildReporterPlugin({
          apiKey: process.env.BGSNG_API_KEY,
          releaseStage: mode,
        }),
      isProd &&
        BugsnagSourceMapUploaderPlugin({
          apiKey: process.env.BGSNG_API_KEY,
          overwrite: true,
        }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    server: {
      open: true,
    },
  });
};

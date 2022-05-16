import { resolve } from "path";
import { defineConfig } from "vite";
import { babel } from "@rollup/plugin-babel";
import pug from "rollup-plugin-pug";
import commonjs from "rollup-plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default defineConfig({
  resolve: {
    extensions: [".js", ".pug"],
  },
  plugins: [
    pug({ pretty: true, sourceMap: false, compileDebug: true }),
    commonjs({ sourceMap: false }),
    // nodeResolve({
    //   browser: true,
    // }),
    // babel({ babelHelpers: "bundled" }),
  ],
  build: {
    minify: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.js"),
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});

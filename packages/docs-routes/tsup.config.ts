import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    minify: !options.watch,
    entry: ['src'],
    splitting: true,
    sourcemap: true,
    dts: true,
    external: [],
    format: ['cjs', 'esm'],
    target: 'esnext',
    platform: 'browser',
    bundle: false,
  };
});

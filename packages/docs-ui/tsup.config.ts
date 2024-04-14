import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  minify: !options.watch,
  entry: ['src'],
  splitting: true,
  sourcemap: true,
  dts: true,
  external: ['react', 'react-dom', 'next'],
  format: ['cjs', 'esm'],
  target: 'esnext',
  platform: 'browser',
  bundle: false,
}));

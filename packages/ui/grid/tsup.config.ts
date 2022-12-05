import { defineConfig } from 'tsup';
import { join } from 'path';
import { writeFile } from 'fs/promises';

const cjsPackageJson = {
  type: 'commonjs',
};

const esmPackageJson = {
  type: 'module',
};

export default defineConfig((options) => ({
  minify: !options.watch,
  entry: ['src'],
  splitting: true,
  sourcemap: true,
  dts: true,
  external: ['react', 'react-dom'],
  format: ['cjs', 'esm'],
  target: 'esnext',
  platform: 'browser',
  bundle: false,
  legacyOutput: true,
  onSuccess: async () => {
    await Promise.all([
      writeFile(
        join(__dirname, 'dist', 'package.json'),
        JSON.stringify(cjsPackageJson, null, 2)
      ),
      writeFile(
        join(__dirname, 'dist', 'esm', 'package.json'),
        JSON.stringify(esmPackageJson, null, 2)
      ),
    ]);
  },
}));

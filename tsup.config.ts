import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  outDir: 'dist',
  esbuildOptions(options) {
    options.alias = {
      '@src': './src'
    };
  },
  outExtension({ format }) {
    return format === 'esm' ? { js: '.mjs' } : { js: '.cjs' };
  },
});

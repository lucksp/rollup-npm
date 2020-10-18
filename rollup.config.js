import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import packageJson from './package.json';

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  ...packageJson.devDependencies,
};

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: packageJson.module,
      format: 'esm', // ES Modules
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: [
          '!*.ts',
          '!**/*.ts',
          '!*.tsx',
          '!**/*.tsx',
          '**/sandbox',
          '**/__tests__',
          '**/__mocks__/',
          '**/__fixtures__/',
          '**/test-utils',
        ],
      },
    }),
  ],
  external: Object.keys(globals),
};

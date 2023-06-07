import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '3snvt8',
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
});

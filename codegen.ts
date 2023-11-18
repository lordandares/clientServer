import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: '**/schema.graphql',
  generates: {
    './src/resolvers/resolvers-types.ts': {
      config: {
        mappers: {
          Client: './src/models#ClientModel',
          Event: './src/models#EvntModel'
        }
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};
export default config;
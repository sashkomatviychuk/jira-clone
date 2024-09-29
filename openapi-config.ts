import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'https://petstore3.swagger.io/api/v3/openapi.json',
  apiFile: './src/shared/api.ts',
  apiImport: 'api',
  outputFile: './src/shared/petStoreApi.ts',
  mergeReadWriteOnly: true,
  exportName: 'petApi',
  hooks: true,
  tag: true,
  filterEndpoints: true as any,

  // outputFiles: {
  //   './src/shared/findPetsByStatusApi.ts': {
  //     filterEndpoints: ['findPetsByStatus'],
  //     exportName: 'findPetsByStatusApi',
  //   },
  //   './src/shared/findPetsByTagsApi.ts': {
  //     filterEndpoints: ['findPetsByTags'],
  //     exportName: 'findPetsByTagsApi',
  //   },
  // },
};

export default config;

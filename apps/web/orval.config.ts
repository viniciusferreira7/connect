import { defineConfig } from 'orval'

export default defineConfig({
  'connect-api': {
    input: `${process.env.VITE_API_URL}/docs/json`,
    output: {
      target: './src/http/api.ts',
      client: 'react-query',
      httpClient: 'fetch',
      namingConvention: 'kebab-case',
      schemas: './src/models',
      mode: 'tags-split',
      clean: true,
      prettier: true,
      baseUrl: process.env.VITE_API_URL,
      override: {
        fetch: {
          includeHttpResponseReturnType: false
        },
      }
    },
  },
})

import { defineConfig } from 'vite'
import { getAliases } from 'vite-aliases'
import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCSS from 'vite-plugin-windicss'

// const contentAlias = getAliases({
//   path: './contents',
//   depth: 2
// });

const srcAlias = getAliases({
  depth: 2
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    WindiCSS(),
  ],
  resolve: {
    // alias:[...contentAlias, ...srcAlias]
    alias: srcAlias
  }
})

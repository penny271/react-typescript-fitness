import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import xx from '../../../......'
// this is a little crazy if you have a lot of these Imports it's really annoying to figure out what
// * Location this exists so instead we want to refer it as @ components so if we have a file of some component in the components folder inside our source directory we can refer to @ starting from Source but we need to set up some configurations for this to happen
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // インポート文の中で、"@"をsrcディレクトリへのパスのショートカットとして使えるようにする。※tsconfig.tsにも追記する必要あり
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
  }
})

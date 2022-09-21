import { defineConfig } from 'vite'
// 按需引入element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
/************************************* 路径配置 start ********************************/
import { resolve } from 'path' 

const pathResolve = (dir: string): any => {  
  return resolve(__dirname, ".", dir)          
}
import vue from '@vitejs/plugin-vue'
const alias: Record<string, string> = {
  '@': pathResolve("src")
}
/************************************* 路径配置 end ********************************/


export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),

  ],
  server: {                
    host: true, // 监听所有地址
    open: true, //启动时自动在浏览器中打开
    proxy: {
      '/api': {
        target: 'http://localhost:5858/', //后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {  // ****************** 路径配置新增
    alias     // ****************** 路径配置新增
  }    
})



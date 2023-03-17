import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import json from '@rollup/plugin-json';
export default {
  input: 'src/main.js', // Change this to the path to your app's entry point
  output: {
    file: 'dist/vue-data-app-umd.js', // Change this to the desired output file name
    format: 'umd',
    name: 'MyApp' // Change this to the desired global variable name
  },
  plugins: [
    css(),
    json(),
    vue({
      css: true, // Include CSS in output file
      json:true,
      compileTemplate: true // Compile Vue templates to render functions
    })
  ]
};
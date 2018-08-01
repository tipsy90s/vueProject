//引入vue
import vue from 'vue';

//引入app.vue
import App from './app.vue';
//new vue
new Vue({
	el: '#app',
	render: c=>c(App)
})
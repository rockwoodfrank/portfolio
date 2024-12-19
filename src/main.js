// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueTypedJs from 'vue-typed-js';
import VueCarousel from 'vue-carousel';
import vueSmoothScroll from 'vue2-smooth-scroll';

import { createApp } from 'vue';
import Index from './Index.vue';

createApp(Index).mount("#app");
export default function(Vue, {router, head, isClient}) {
	Vue.directive('scroll', {
		inserted: function(el, binding) {
			let f = function(evt) {
				binding.value(evt, el);
			};
			window.addEventListener('scroll', f);
		},
	});
	Vue.use(VueTypedJs);
	Vue.use(VueCarousel);
	Vue.use(vueSmoothScroll);
	head.link.push({
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css?family=Courier+Prime&display=swap',
	});
	head.link.push({
		rel: 'stylesheet',
		href: 'https://unpkg.com/aos@next/dist/aos.css',
	});


}

import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Ensure this path is correct
import store from './store'; // Ensure this path is correct

Vue.config.productionTip = false;

import VueMeta from 'vue-meta';
import VueGtm from "vue-gtm";

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});

Vue.use(VueGtm, {
  id: 'GTM-5MRLS32',
  defer: false,
  compatibility: false,
  enabled: true,
  debug: true,
  loadScript: true,
  vueRouter: router,
  trackOnNextTick: true,
});

router.beforeEach((to, from, next) => {
  // Set the document title based on the route's meta title or fallback to a default
  const title = to.meta.title || 'Default Title';
  document.title = title;
  console.log(`Navigating to: ${to.path}, Title: ${title}`); // Debugging log
  next();
});

router.afterEach((to) => {
  window.dataLayer = window.dataLayer || [];
  const dataLayerEntry = {
    event: 'page_view',  // Ensure this matches your GTM trigger
    page: to.path,  // Correctly reflects the current page path
    pageTitle: to.meta.title || 'Default Title',  // Use meta title or fallback
    contentName: to.name,  // Example of content-name; adjust as necessary
    contentViewName: to.name || 'default',  // Ensure this corresponds to your route names
    pageLocation: window.location.href,  // Current full URL
    pageReferrer: document.referrer || '',  // Referrer URL
    'gtm.uniqueEventId': Math.random()  // Generate a unique event ID
  };

  console.log('Pushing to dataLayer:', dataLayerEntry); // Debugging log
  window.dataLayer.push(dataLayerEntry);
});

  
  
  

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

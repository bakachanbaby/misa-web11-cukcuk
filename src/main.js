import Vue from 'vue'
import App from './App.vue'
// B1: Cài đặt và import vuerouter
import VueRouter from 'vue-router'
// B2:  Define some routes
import CustomerList from './view/customer/CustomerList.vue';
import EmployeeList from './view/employee/EmployeeList.vue';

const routes = [
    { path: '/customer', component: CustomerList },
    { path: '/employee', component: EmployeeList }
]

// B3: Create the router instance and pass the `routes` option
const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
})
Vue.config.productionTip = false

// Note vue-router: phải user vuerouter
Vue.use(VueRouter);
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
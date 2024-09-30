<template>
  <div>
    <nav>
      <span @click="data"><router-link  to="/">Home</router-link></span>
      <span @click="data"> <router-link @click="data" to="/customer">Customer</router-link></span>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
    data(){
      console.log(window.location, 'data')
    }
  }
}
</script>

<style>
/* Your styles here */
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 15px;
  text-decoration: none;
  color: blue; /* Change color as needed */
}
nav a:hover {
  text-decoration: underline;
}
</style>

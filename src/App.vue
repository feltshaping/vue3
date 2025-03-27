<template>
  <div>
    <nav>
      <router-link to='/'>to home</router-link>
      <br />
      <router-link to='/about'>to about</router-link>
      <br />
      <router-link to='/canvas'>to canvas</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>
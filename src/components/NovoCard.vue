<template>
  <b-row>
    <b-form-input type="text" id="text-search" v-model="search"
      placeholder="Busca ..."
      v-on:keyup.enter="onEnter"
      >
      </b-form-input>
  </b-row>
</template>

<script>
export default {

}
</script>

<style>

</style>
<template>
  <div class="List">
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      items: state => state.items.data.list,
    })
  }
};
</script>

<style lang="scss">
  .List {
    padding-top: 30px;
    text-align: center;
  }
</style>

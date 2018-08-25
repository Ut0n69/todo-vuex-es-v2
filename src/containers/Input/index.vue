<template>
  <div class="Input">
    <input class="Input__input" type="text" v-model="item" /><br>
    <ButtonSubmit class="Input__button" :onclick="addItem" text="ADD ITEM" />
    <transition mode="out-in" name="slideIn">
      <p v-if="isAdded">"{{ item }}" has been added.</p>
    </transition>
  </div>
</template>

<script>
import ItemController from '@/containers/Input/controller';
import ButtonSubmit from '@/components/Base/ButtonSubmit.vue';

export default {
  data() {
    return {
      item: '',
      isAdded: false
    };
  },
  components: {
    ButtonSubmit,
  },
  methods: {
    addItem() {
      event.preventDefault();
      const controller = new ItemController(this.item);
      controller.addItem();
      this.isAdded = !this.isAdded;
      return new Promise((resolve) => {
        setTimeout(() => {
          this.item = '';
          this.isAdded = !this.isAdded;
          resolve();
        }, 1500);
      });
    },
  },
};
</script>

<style lang="scss">
  .Input {
    padding-top: 30px;
    text-align: center;
    & .Input__input {
      text-align: center;
      width: 300px;
      height: 30px;
      border: 2px solid #000;
    }
    & .Input__button {
      margin: 30px;
      width: 100px;
      height: 30px;
      border: 2px solid #000;
      background: #fff;
      color: #000;
      transition: .3s;
    }
    & .Input__button:hover {
      background: #000;
      color: #fff;
    }
  }
</style>

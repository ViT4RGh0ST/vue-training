<template>
  <slot />
</template>

<script>
export default {
  data() {
    return {
      name: "naudy",
    };
  },
  methods: {
    sayHi(){
      console.log('hi mamaboebo')
    }
  }
};
</script>
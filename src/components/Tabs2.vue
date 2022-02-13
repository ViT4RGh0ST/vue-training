<template>
  <div class="flex">
    <button
      v-for="(tabName, index) in tabs"
      :key="index"
      @click="currentActiveTabIndex = index; $emit('onSetActiveTab', index)"
      :class="[
        'p-5 bg-indigo-300 text-white',
        { 'bg-indigo-500': currentActiveTabIndex === index },
      ]"
    >
      {{ tabName }}
    </button>
  </div>
</template>

<script>

export default {
  props: ['tabs', 'tabsComponents'],
  data() {
    return {
      currentActiveTabIndex: 0
    };
  },
  methods: {},
};
</script>
<template>
  <div>
    <div class="flex">
    <button
      v-for="(tabName, index) in tabs"
      :key="index"
      @click="currentActiveTabIndex = index"
      :class="[
        'p-5 bg-indigo-300 text-white',
        { 'bg-indigo-500': currentActiveTabIndex === index },
      ]"
    >
      {{ tabName }}
    </button>
  </div>
  <div>
    <component :is="tabsComponents[currentActiveTabIndex]" />
  </div>
    
  </div>
  
</template>

<script>
/* eslint-disable */
import Tasks2 from "../pages/tasks2";
import Text from "./Text";

export default {
  components: {
    Tasks2,
    Text
  },
  props: ['tabs', 'tabsComponents'],
  data() {
    return {
      currentActiveTabIndex: 0
    };
  },
  methods: {},
};
</script>
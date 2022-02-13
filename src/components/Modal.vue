<template>
<transition name="fade" appear>
  <div
    v-if="show"
    class="
    top-0 left-0
      absolute
      w-full
      h-full
      modal
      flex
      justify-center
      items-center
    "
  >
  
    <div class="p-3 bg-white w-1/2 h-1/2 relative">
    <div class="flex justify-end">
      <button @click="show = false" class="text-black z-50 text-2xl font-bold">X</button>  
    </div>
      <div class="container-fluid mx-auto">
        <slot />
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  data(){
    return {
      show: false
    }
  }
}
</script>
<style>
.modal{background-color: rgba(0, 0, 0, .65);}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
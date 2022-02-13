<template>
  viendo perfil {{$root.$data.users[$route.params.id].email}}
</template>

<script>
export default {
  mounted(){
    // console.log(this.$route.params)
  }
}
</script>
<template>
  <Tasks2 
    :tasks="tasks" 
    :currentTaskUpdating="currentTaskUpdating" 
    @setCurrentTaskUpdating="setCurrentTaskUpdating" 
    @setTasks="setTasks" 
  />
  <Tasks2 
    :tasks="tasks" 
    :currentTaskUpdating="currentTaskUpdating" 
    @setCurrentTaskUpdating="setCurrentTaskUpdating" 
    @setTasks="setTasks" 
  />
</template>

<script>
/* import Tasks from "./pages/tasks"; */
import Tasks2 from "./pages/tasks2";

export default {
  name: "App",
  components: {
    Tasks2,
  },
  data(){
    return {
      currentTaskUpdating: null,
      tasks: [
        {name: 'Empacar ropa', status: false},
        {name: 'Chequear auto', status: false},
        {name: 'Subir Equipaje', status: false},
        {name: 'Salir', status: false}
      ]
    }
  },
  methods: {
    setCurrentTaskUpdating(value){
      this.currentTaskUpdating = value
    },

    setTasks(value) {
      this.tasks = value
    }
  }
  
};
</script>


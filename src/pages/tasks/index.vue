<template>
  <div class="container-fluid flex justify-center h-screen align-middle">
    <div class="bg-indigo-100 text-center m-auto w-1/2 p-5">
    <button @click="handleAddTask()" class="bg-green-600 rounded-md p-2 text-white hover:bg-blue-300 mr-2">Nueva Tarea</button>
    <table class="table-auto">
      <thead>
        <tr class="table-row">
          <th class="p-4">Nombre</th>
          <th class="p-4">Estado</th>
          <th class="p-4">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td class="p-4">
            <input v-if="isTaskBeingUpdated(index)" v-model="task.name" type="text" />
            <template v-else>
              {{task.name}}
            </template>
          </td>
          <td class="p-4"><input :checked="task.status" type="checkbox" /></td>
          <td class="p-4">
            <button @click="handleUpdateTask(index)" 
              :class="[
                isTaskBeingUpdated(index) ? 'bg-green-600 hover:bg-green-300' : 'bg-blue-600 hover:bg-blue-300', 
                'rounded-md p-2 text-white mr-2'
              ]"
            >
              {{getUpdateButtonText(index)}}
            </button>
            <button @click="handleDeleteTask(index)" class="bg-red-600 rounded-md p-2 text-white hover:bg-red-300">Borrar</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      currentUpdatingTaskIndex: null, 
      tasks: [
        { name: 'lechuga', status: true },
        { name: 'hacer mercado', status: false },
        { name: 'hacer ejercicio', status: false }
      ]
    }
  },
  methods: {
    handleUpdateTask(index){
      if(this.isThereATaskBeingUpdated() && this.isNotTaskValidated(this.currentUpdatingTaskIndex))
        return
        
      if(this.isTaskBeingUpdated(index)){
        if(this.isNotTaskValidated(index))
          return

        this.currentUpdatingTaskIndex = null
        return 
      }

      this.currentUpdatingTaskIndex = index;
    },

    handleAddTask(){
      if(this.isThereATaskBeingUpdated())
        return
      this.tasks = [{name: '', status: false}, ...this.tasks]
      this.currentUpdatingTaskIndex = 0
    },

    handleDeleteTask(index){
      this.tasks = this.tasks.filter( (task,ind) => index !== ind )
    },

    getUpdateButtonText(index){
      return this.isTaskBeingUpdated(index) ? 'Listo' : 'Editar'
    },

    isTaskBeingUpdated(index){
      return this.currentUpdatingTaskIndex === index
    },

    isNotTaskValidated(index) {
      return this.tasks[index].name === ''
    },

    isThereATaskBeingUpdated(){
      return this.currentUpdatingTaskIndex !== null
    },

  }
};
</script>

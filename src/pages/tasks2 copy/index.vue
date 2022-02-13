<template>
  <div class="container-fluid mx-auto flex flex-wrap justify-center items-center h-1/3">
    <div>
      <div class="text  mb-2 w-full">
        <button @click="handlerAddTask()" class="bg-indigo-700 p-2 text-white rounded-md mr-2">
          Agregar
        </button>
      </div>
      <table class="bg-green-100 p-5 inline-block">
        <thead>
          <tr>
            <th class="p-2">Nombre</th>
            <th class="p-2">Estado</th>
            <th class="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr class="p-2" v-for="(task,index) in tasks" :key="index">
            <td class="px-3">
              <div v-if="isUpdatingTask(index)">
                <input type="text" v-model="task.name">
              </div>
              <template v-else>
                {{task.name}}
              </template>
            </td>
            <td class="px-3">
              <input type="checkbox" v-model="task.status" :checked="task.status">
            </td>
            <td class="px-3">
                <button @click="handlerUpdatingTask(index)" :class="[isUpdatingTask(index) ?' bg-green-500 p-2' :'bg-blue-500 p-2','text-white rounded-md mr-2']">
                  {{getUpdateButtonText(index)}}
                </button>
                <button @click="handlerDeleteTask(index)" class="bg-red-700 p-2 text-white rounded-md mr-2">
                  Borrar
                </button>
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
        currentTaskUpdating: null,
        tasks: [
          {name: 'Empacar ropa', status: false},
          {name: 'Chequear auto', status: false},
          {name: 'Subir Equipaje', status: false},
          {name: 'Salir', status: false}
        ]
      }
    }, 
    methods:{
      handlerUpdatingTask(index){
        if( this.isThereATaskBeingUpdating() &&  this.isNotValidatedTask(this.currentTaskUpdating)){
          return
        }
        if(this.currentTaskUpdating === index){
          if (this.isNotValidatedTask(index))
            return
          this.currentTaskUpdating = null
          return
        } 

        this.currentTaskUpdating = index
      },  
      handlerAddTask(){
        if(this.isThereATaskBeingUpdating())
          return
        this.tasks = [ { name: '', status: false } , ...this.tasks]
        this.currentTaskUpdating = 0
      },  
      handlerDeleteTask(index){
        this.tasks = this.tasks.filter((task,ind) => ind != index)
      }, 
      isUpdatingTask(index){
        return this.currentTaskUpdating === index
      },
      isNotValidatedTask(index){
        return this.tasks[index].name == ''
      },
      isThereATaskBeingUpdating(){
        return this.currentTaskUpdating !== null
      },
      getUpdateButtonText(index){
        return this.isUpdatingTask(index) ? 'Listo' : 'Editar'
      }

    }
}
</script>
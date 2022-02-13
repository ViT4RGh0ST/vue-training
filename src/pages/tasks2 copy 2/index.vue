<template>
  <div
    class="
      container-fluid
      mx-auto
      flex flex-wrap
      justify-center
      items-center
      h-1/3
    "
  >
    <div>
      <div class="text mb-2 w-full">
        <button
          @click="handleAddTask()"
          class="bg-indigo-700 p-2 text-white rounded-md mr-2"
        >
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
          <tr class="p-2" v-for="(task, index) in tasks" :key="index">
            <td class="px-3">
              <div v-if="isUpdatingTask(index)">
                <input type="text" v-model="task.name" />
              </div>
              <template v-else>
                {{ task.name }}
              </template>
            </td>
            <td class="px-3">
              <input
                type="checkbox"
                v-model="task.status"
                :checked="task.status"
              />
            </td>
            <td class="px-3">
              <button
                @click="handleUpdatingTask(index)"
                :class="[
                  isUpdatingTask(index)
                    ? ' bg-green-500 p-2'
                    : 'bg-blue-500 p-2',
                  'text-white rounded-md mr-2',
                ]"
              >
                {{ getUpdateButtonText(index) }}
              </button>
              <button
                @click="handleDeleteTask(index)"
                class="bg-red-700 p-2 text-white rounded-md mr-2"
              >
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
    props: ['tasks', 'currentTaskUpdating'],
    // props: {
    //   tasks: {
    //     type: Array,
    //     default: []
    //   },
    //   currentTaskUpdating
    // },
    data(){
      return {
        
      }
    }, 
    mounted(){
      this.$root.$data.currentTaskUpdating = 0
      console.log(this.$root )
    },
    methods:{
      handleUpdatingTask(index){
        if( this.isThereATaskBeingUpdating() &&  this.isNotValidatedTask(this.currentTaskUpdating)){
          return
        }
        if(this.currentTaskUpdating === index){
          if (this.isNotValidatedTask(index))
            return
          // this.currentTaskUpdating = null
          this.$emit('setCurrentTaskUpdating', null)
          return
        } 

        // this.currentTaskUpdating = index
        this.$emit('setCurrentTaskUpdating', index)
      },  
      handleAddTask(){
        if(this.isThereATaskBeingUpdating())
          return
        // this.tasks = [ { name: '', status: false } , ...this.tasks]
        // this.currentTaskUpdating = 0
        this.$emit('setTasks', [ { name: '', status: false } , ...this.tasks])
        this.$emit('setCurrentTaskUpdating', 0)
      },  
      handleDeleteTask(index){
        // this.tasks = this.tasks.filter((task,ind) => ind != index)
        this.$emit('setTasks', this.tasks.filter((task,ind) => ind != index))
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
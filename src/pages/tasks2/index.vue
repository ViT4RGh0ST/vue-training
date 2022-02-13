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
        Completadas
        <input type="checkbox" v-model="filterByStatus" />
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
          <tr class="p-2" v-for="(task, index) in filteredTasks" :key="index">
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
  data() {
    return {
      filterByStatus: false,
    };
  },
  mounted() {
    // this.$root.$data.currentTaskUpdating = 0
    // console.log(this.$root )
    // console.log(this.state)
  },
  methods: {
    handleUpdatingTask(index) {
      console.log(index);
      if (
        this.isThereATaskBeingUpdated() &&
        this.isNotValidatedTask(this.state.currentTaskUpdating)
      ) {
        return;
      }
      if (this.state.currentTaskUpdating === index) {
        if (this.isNotValidatedTask(index)) return;
        // this.currentTaskUpdating = null
        // this.$emit('setCurrentTaskUpdating', null)
        // this.$root.$data.currentTaskUpdating = null
        this.setState("currentTaskUpdating", null);
        return;
      }

      // this.currentTaskUpdating = index
      // this.$emit('setCurrentTaskUpdating', index)
      // this.$root.$data.currentTaskUpdating = index
      this.setState("currentTaskUpdating", index);
    },
    handleAddTask() {
      if (this.isThereATaskBeingUpdated()) return;
      // this.tasks = [ { name: '', status: false } , ...this.tasks]
      // this.currentTaskUpdating = 0
      // this.$emit('setTasks', [ { name: '', status: false } , ...this.tasks])
      // this.$emit('setCurrentTaskUpdating', 0)
      this.setState("tasks", [
        { name: "", status: false },
        ...this.state.tasks,
      ]);
      this.setState("currentTaskUpdating", 0);
    },
    handleDeleteTask(index) {
      // this.tasks = this.tasks.filter((task,ind) => ind != index)
      // this.$emit('setTasks', this.tasks.filter((task,ind) => ind != index))
      // this.$root.$data.tasks = this.$root.$data.tasks.filter((task,ind) => ind != index)
      this.setState(
        "tasks",
        this.state.tasks.filter((task, ind) => ind != index)
      );
    },
    isUpdatingTask(index) {
      return this.state.currentTaskUpdating === index;
    },
    isNotValidatedTask(index) {
      // console.log(index)
      return this.state.tasks[index].name == "";
    },
    isThereATaskBeingUpdated() {
      return this.state.currentTaskUpdating !== null;
    },
    getUpdateButtonText(index) {
      return this.isUpdatingTask(index) ? "Listo" : "Editar";
    },

    setState(key, newState) {
      this.$root.$data[key] = newState;
    },
  },

  computed: {
    state() {
      return this.$root.$data;
    },

    filteredTasks() {
      if (this.filterByStatus)
        return this.state.tasks.filter((task) => task.status === true);

      return this.state.tasks;
    },
  },
};
</script>


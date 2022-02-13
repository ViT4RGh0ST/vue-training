<template>
  <div class="mt-11">
    <input
      class="
        shadow-md
        p-3
        border-purple-50 border
        block
        w-6/12
        mx-auto
        mb-5
        rounded-md
      "
      v-model="currentSearch"
      type="text"
      placeholder="Search by words"
    />

    <table
      class="table-auto bg-indigo-100 pb-5 rounded-md overflow-hidden w-full"
    >
      <thead class="">
        <tr class="">
          <th
            v-for="(key, index) in Object.keys(users[0])"
            :key="index"
            @click="orderColumnByHeaderName(key)"
            class="
              cursor-pointer
              p-2
              text-left
              bg-indigo-200
              border-2 border-purple-600
              capitalize
            "
          >
            {{key}}
          </th>
        </tr>
      </thead>
      <tbody class="">
        <tr 
          @click="$router.push(`/profiles/${index}`)"
          v-for="(user, index) in filteredUsers"
          :key="index"
          class="cursor-pointer p-2 hover:bg-blue-500"
        >
          <td v-for="(key, index) in Object.keys(user)" :key="index" class="px-3 py-2">
            {{ user[key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      tableHeaders: ['First Name', 'Lastname', 'Years Old', 'Parroquia', 'E-Mail'],
      users: [
        {
          firstName: "Jenna",
          lastName: "Maguire",
          age: "45",
          city: "Miami",
          email: "miami@gmail.com",
        },
        {
          firstName: "Jhon",
          lastName: "Connor",
          age: "37",
          city: "New England",
          email: "terminator@gmail.com",
        },
        {
          firstName: "Rafael",
          lastName: "Urrieta",
          age: "39",
          city: "New Hope",
          email: "las4p@gmail.com",
        },
        {
          firstName: "Vincent",
          lastName: "Kompany",
          age: "41",
          city: "Bruselas",
          email: "belgiumsoccer@gmail.com",
        },
        {
          firstName: "Dave sss",
          lastName: "Morrison",
          age: "24",
          city: "Rome",
          email: "daverome@gmail.com",
        },
      ],
      isOrderedAscending: false,
      currentHeaderNameActive: "",
      currentSearch: "",
    };
  },
  mounted() {
    this.$root.$data.users = this.users
  },
  methods: {
    /* async getUsers() {
      for (let i = 0; i < 10; i++) {
        this.users = [
          await fetch("https://randomuser.me/api")
            .then(async (res) => {
              let json = await res.json();
              json = json.results[0];
              return {
                firstName: json.name.first,
                lastName: json.name.last,
                age: json.dob.age,
                city: json.location.city,
                email: json.email,
              };
            })
            .catch((err) => console.log(err)),
          ...this.users,
        ];
      }
    }, */
    sortByCurrentActiveHeader(a, b) {
      if (a[this.currentHeaderNameActive] > b[this.currentHeaderNameActive]) {
        return this.isOrderedAscending ? 1 : -1;
      }
      if (a[this.currentHeaderNameActive] < b[this.currentHeaderNameActive]) {
        return this.isOrderedAscending ? -1 : 1;
      }
      return 0;
    },

    orderColumnByHeaderName(name) {
      if (
        this.isOrderedAscending === true &&
        this.currentHeaderNameActive === name
      )
        this.isOrderedAscending = false;
      else this.isOrderedAscending = true;

      this.currentHeaderNameActive = name;
    },
  },
  computed: {
    filteredUsers() {
      let filteredUsers = [...this.$root.$data.users];

      // sort by headers
      filteredUsers.sort(this.sortByCurrentActiveHeader);
      
      // filter by searchInputText
      filteredUsers = filteredUsers.filter(user => {
        let searchText = "";
        Object.keys(user).forEach(key => {
          searchText += user[key];
        });
        return searchText
          .toLowerCase()
          .includes(this.currentSearch.toLowerCase());
      });

      return filteredUsers;
    },
  },
};
</script>
<style>
table tbody tr:last-child{padding-bottom: 1.5rem!important;}
</style>
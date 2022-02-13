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
      class="bg-indigo-100 pb-5 block w-5/6 mx-auto rounded-md overflow-hidden"
    >
      <thead class="w-full block">
        <tr class="w-full block">
          <th
            @click="
              orderColumn('firstName');
              currentHeaderActive = 'firstName';
            "
            class="
              cursor-pointer
              p-2
              w-1/5
              inline-block
              text-left
              bg-indigo-200
              border-2 border-purple-600
            "
          >
            Name
          </th>
          <th
            @click="
              orderColumn('lastName');
              currentHeaderActive = 'lastName';
            "
            class="
              cursor-pointer
              p-2
              w-1/5
              inline-block
              text-left
              bg-indigo-200
              border-2 border-purple-600
            "
          >
            Lastname
          </th>
          <th
            @click="
              orderColumn('age');
              currentHeaderActive = 'age';
            "
            class="
              cursor-pointer
              p-2
              w-1/5
              inline-block
              text-left
              bg-indigo-200
              border-2 border-purple-600
            "
          >
            Age
          </th>
          <th
            @click="
              orderColumn('city');
              currentHeaderActive = 'city';
            "
            class="
              cursor-pointer
              p-2
              w-1/5
              inline-block
              text-left
              bg-indigo-200
              border-2 border-purple-600
            "
          >
            City
          </th>
          <th
            @click="
              orderColumn('email');
              currentHeaderActive = 'email';
            "
            class="
              cursor-pointer
              p-2
              w-1/5
              inline-block
              text-left
              bg-indigo-200
              border-2 border-purple-600
            "
          >
            Email
          </th>
        </tr>
      </thead>
      <tbody class="w-full block">
        <tr
          class="p-2 w-full block"
          v-for="(user, index) in searchUser"
          :key="index"
        >
          <td class="inline-block px-3 w-1/5 py-2">
            {{ user.firstName }}
          </td>
          <td class="inline-block px-3 w-1/5 py-2">
            {{ user.lastName }}
          </td>
          <td class="inline-block px-3 w-1/5 py-2">
            {{ user.age }}
          </td>
          <td class="inline-block px-3 w-1/5 py-2">
            {{ user.city }}
          </td>
          <td class="inline-block px-3 w-1/5 py-2">
            {{ user.email }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {firstName: 'Jenna', lastName: 'Maguire', age: '45', city: 'Miami', email: 'miami@gmail.com'},
        {firstName: 'Jhon', lastName: 'Connor', age: '37', city: 'New England', email: 'terminator@gmail.com'},
        {firstName: 'Rafael', lastName: 'Urrieta', age: '39', city: 'New Hope', email: 'las4p@gmail.com'},
        {firstName: 'Vincent', lastName: 'Kompany', age: '41', city: 'Bruselas', email: 'belgiumsoccer@gmail.com'},
        {firstName: 'Dave sss', lastName: 'Morrison', age: '24', city: 'Rome', email: 'daverome@gmail.com'},
      ],
      wasOrderedAscending: false,
      currentHeaderActive: "",
      currentSearch: ''
    };
  },
  mounted() {
    //this.getUsers();
    
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
    orderColumn(key) {
      if (this.wasOrderedAscending === true && this.currentHeaderActive === key) {
        this.users.reverse();
        this.wasOrderedAscending = false;
        return;
      }
      this.users.sort(function (a, b) {
        if (a[key] > b[key]) {
          return 1;
        }
        if (a[key] < b[key]) {
          return -1;
        }
        return 0;
      });

      this.wasOrderedAscending = true;
    },
  },
  computed: {
    searchUser() {
      return this.users.filter((user) => user.firstName.toLowerCase().includes(this.currentSearch.toLowerCase()) === true || 
      user.lastName.toLowerCase().includes(this.currentSearch.toLowerCase()) === true || 
      user.age.toLowerCase().includes(this.currentSearch.toLowerCase()) === true || 
      user.city.toLowerCase().includes(this.currentSearch.toLowerCase()) === true || 
      user.email.toLowerCase().includes(this.currentSearch.toLowerCase()) === true) ;
    }
  },
};
</script>
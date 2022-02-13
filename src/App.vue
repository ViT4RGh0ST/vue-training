<template>
  <router-view/>
</template>

<script>
export default {
  data(){
    return {
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
    }
  }
}
</script>
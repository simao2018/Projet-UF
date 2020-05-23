<template>
  <div id="backoffice">
    <ul class="list-group">
      <li class="list-group-item disabled">BACKOFFICE</li>
      <li v-for="user in users" v-bind:key="user.id" class="list-group-item disabled">
        <user class="id"></user>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "dashboard",
  data() {
    return {
      users: []
    };
  },
  created() {
    db.collection("users")
      //.orderBy("name")
      .get()
      .then(querySnapshot => {
        this.loading = false;
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            user_id: doc.data().user_id,
            name: doc.data().name,
            email: doc.data().dept
          };
          this.users.push(data);
        });
      });
  }
};
</script>
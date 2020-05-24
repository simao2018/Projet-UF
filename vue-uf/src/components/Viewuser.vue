<template>
  <div id="view-employee">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{users_name}}</h4>
      </li>
      <li class="collection-item">User ID#: {{users_id}}</li>
      <li class="collection-item">Email: {{users_email}}</li>
    </ul>
    <button type="button" class="btn btn-primary">
      <router-link to="/backoffice" class="btn grey">Back</router-link>
    </button>
    <button @click="deleteUser" type="button" class="btn grey">Delete</button>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "view-users",
  data() {
    return {
      users_id: null,
      users_name: null,
      users_email: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("users")
      .where("users_id", "==", to.params.users_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.users_id = doc.data().users_id;
            vm.users_name = doc.data().users_name;
            vm.users_email = doc.data().users_email;
          });
        });
      });
  },
  watch: {
    $route: "fetchDataa"
  },
  methods: {
    fetchDataa() {
      db.collection("employees")
        .where("users_id", "==", this.$route.params.users_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.users_id = doc.data().users_id;
            this.users_name = doc.data().users_name;
            this.users_email = doc.data().users_email;
          });
        });
    },
    deleteUser() {
      if (confirm("Are you sure?")) {
        db.collection("users")
          .where("users_id", "==", this.$route.params.users_id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push("/backoffice");
            });
          });
      }
    }
  }
};
</script>
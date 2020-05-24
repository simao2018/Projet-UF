<template>
  <div class="form-box">
    <div id="view-employee">
      <ul class="collection with-header">
        <li class="collection-header">
          <h4>{{users_name}}</h4>
        </li>

        <li class="collection-item">Email: {{users_email}}</li>
      </ul>
      <button type="button" class="btn btn-primary">
        <router-link to="/backoffice" class="btn grey">Back</router-link>
      </button>

      <button @click="deleteUser" type="button" class="btn btn-secondary">
        <router-link to="/backoffice" class="btn grey">Delete</router-link>
      </button>
    </div>
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
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchDataa();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchDataa"
  },
  methods: {
    fetchDataa() {
      db.collection("users")
        .doc(this.$route.params.idUser)
        .get()
        .then(snapshot => {
          if (!snapshot.exists) {
            // Si l'utilisateur n'existe pas, faut rediriger vers la page d'acceuil
            this.$router.push("/");
          } else {
            let data = snapshot.data(); //
            this.users_id = this.$route.params.idUser;
            this.users_name = data.users_name;
            this.users_email = data.users_email;
          }
        });
    },
    deleteUser() {
      if (confirm("Are you sure?")) {
        db.collection("users")
          .doc(this.users_id)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
          })
          .catch(error => {
            console.error("Error removing document: ", error);
          });
      }
    }
  }
};
</script>

<style scoped>
.form-box {
  width: 380px;
  height: 430px;
  position: relative;
  margin: 6% auto;
  background: #fff;
  padding: 5px;
  overflow: hidden;
  border-radius: 30px;
}
</style>

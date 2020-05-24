<template>
  <div class="conatainer-fluid">
    <div class="row">
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                <span data-feather="home"></span>
                Utilisateurs
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                <span data-feather="file"></span>
                Livres
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        >
          <h1 class="h2">Tableau de bord - Utilisateurs</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
                data-toggle="modal"
                data-target="#addModal"
              >
                <router-link to="/newuser" class="btn-floating btn-large red">
                  <i class="fa fa-plus"></i>
                </router-link>
              </button>
            </div>
          </div>
        </div>

        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>
            <!-- V-FOR : Loop -->
            <tr v-for=" users in users" v-bind:key="users.id">
              <td>{{users.users_id}}</td>
              <td>{{users.users_name}}</td>
              <td>{{users.users_email}}</td>
              <td class="dc">
                <div class="row">
                  <router-link v-bind:to="{name:'view-user', params:{idUser: users.users_id}}">View</router-link>
                </div>
              </td>
            </tr>
            <!-- Modal d'édition -->
          </tbody>
        </table>

        <!-- Modal d'ajout -->
      </main>
    </div>
  </div>
</template>

<script>
import db from "./firebaseInit";
export default {
  name: "users",
  data() {
    return {
      users: []
    };
  },
  created() {
    db.collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          const data = {
            users_id: doc.id,
            users_name: doc.data().users_name,
            users_email: doc.data().users_email
          };
          this.users.push(data);
        });
      });
  }
};
</script>

<style scoped>
.sidebar {
  min-height: 700px;
}
</style>>


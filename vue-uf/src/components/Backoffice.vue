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
              <a class="nav-link" href="image.php">
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
              >Ajouter Un Utilisateurs</button>
            </div>
          </div>
        </div>

        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">email</th>
              <th scope="col">nb de vente</th>
              <th scope="col">nb enchéres</th>
            </tr>
          </thead>
          <tbody>
            <!-- V-FOR : Loop -->
            <tr v-for=" users in users" v-bind:key="users.id">
              <td>{{users.users_id}}</td>
              <td>{{users.users_name}}</td>
              <td>{{users.users_email}}</td>
              <td>{{users.users_test}}</td>
              <td class="dc">
                <div class="row">
                  <span id="af" class="col-5 text-right">
                    <a href="#" data-toggle="modal" data-target="#edModal">
                      <i class="ed far fa-edit"></i>
                    </a>
                  </span>
                </div>
              </td>
            </tr>
            <!-- Modal d'édition -->
            <div
              class="modal fade"
              id="edModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modifier l'utilisateur</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form method="POST" action="edit.php">
                    <div class="modal-body">
                      <div class="form-group">
                        <label for="titre">Id :</label>
                        <input type="text" class="form-control" name="titre" id="titre" />
                      </div>
                      <div class="form-group">
                        <label for="titre">Name :</label>
                        <input type="text" class="form-control" name="titre" id="titre" />
                      </div>
                      <div class="form-group">
                        <label for="titre">email :</label>
                        <input type="text" class="form-control" name="titre" id="titre" />
                      </div>

                      <div class="form-group">
                        <label for="titre">nombre de ventes :</label>
                        <input type="text" class="form-control" name="titre" id="titre" />
                      </div>

                      <div class="form-group">
                        <label for="titre">nombre d'encheres :</label>
                        <input type="text" class="form-control" name="titre" id="titre" />
                      </div>
                      <input type="hidden" name="id_video" value />
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
                      <button type="submit" class="btn btn-primary" name="validate">Valider</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </tbody>
        </table>
        <hr />

        <!-- Modal d'ajout -->
        <div
          class="modal fade"
          id="addModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Nouveau utilisateur</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form method="POST" action="add.php">
                <div class="modal-body">
                  <div class="form-group">
                    <label for="titre">Categorie de la video :</label>
                    <select name="cat" id="cat" class="form-control">
                      <option value="workshop">Workshop</option>
                      <option value="reportage">Reportage</option>
                      <option value="jpo">Journée Porte Ouverte</option>
                      <option value="konbini">Konbini</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="titre">Source :</label>
                    <select name="srce" id="srce" class="form-control">
                      <option value="fbk">Facebook</option>
                      <option value="ytb">Youtube</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="titre">Titre de la video :</label>
                    <input type="text" class="form-control" name="titre" id="titre" />
                  </div>

                  <div class="form-group">
                    <label for="url">Url de la video :</label>
                    <input type="text" name="url" class="form-control" id="url" />
                  </div>

                  <div class="form-group">
                    <label for="desc">Ajouter une description de la video :</label>
                    <textarea class="form-control" name="desc_vid" id="desc" rows="3"></textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
                  <button type="submit" class="btn btn-primary" name="validate">Valider</button>
                </div>
              </form>
            </div>
          </div>
        </div>
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
            id: doc.id,
            users_id: doc.data().users_id,
            users_name: doc.data().users_name,
            users_email: doc.data().users_email,
            users_test: doc.data().users_test
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


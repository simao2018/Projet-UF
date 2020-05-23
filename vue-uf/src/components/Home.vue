<template>
  <div>
    <div class="row border b-search bg-light">
      <div class="input-group offset-sm-1 col-sm-5">
        <input type="search" placeholder="Rechercher..." id="search" class="form-control" />
      </div>
      <div class="input-group col-sm-2">
        <select class="custom-select" id="inputGroupSelect02">
          <option selected>Trier par</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-sm-2">
        <div class="row">
          <button type="button" class="btn btn-warning col-sm-12">Valider</button>
        </div>
      </div>
    </div>
    <div class="row b-cover">

    </div>
    <div class="row bg-light">
      <div class="container main bg-white">
        <h2>Effectuez vos encheres sur cette page</h2><hr>
        <ul class="row">
            <li v-for="livre in livres" v-bind:key="livre.id" class="col-sm-8">
                <div class="card col-sm-11">
                  <div class="card-body">
                    <div class="row">
                        <div class="col-sm-3 border im">

                        </div>
                        <div class="col-sm-8">
                          <h5 class="card-title">{{livre.titre}}: {{ livre.livre_id }}</h5>
                          <p class="card-text">{{livre.description}}</p>
                          <router-link :to="{name: 'livre', params: {id_livre : livre.id_livre}}" class="btn btn-warning">Faire une offre</router-link>
                        </div>
                    </div>
                  </div>
               </div>
            </li>
          
            </ul>

        </div>
      </div>
    </div>
</template>

<script>

import db from "./firebaseInit"
export default {
  name: "Home",
  data: ()=>{
    return {
      livres: []
    }
  },
  created(){
    db.collection('Livres').orderBy('titre').get().then(querySnapshot =>{
        querySnapshot.forEach(doc => {
          const data = {
              'id' : doc.id,
              'id_livre': doc.data().id_livre,
              'titre': doc.data().titre,
              'description': doc.data().description
          }
          this.livres.push(data);
        });      
    });
  }
};
</script>

<style scoped>
.b-search {
  min-height: 60px;
  padding-top: 10px;
}
.b-cover {
  min-height: 180px;
  background-image: url("../assets/livre.jpg");
}
.btn2:not(:disabled):not(.disabled) {
  cursor: pointer;
  background: linear-gradient(to right, #ff105f, #ffad06);
}
.b-cover{
  min-height: 250px;
  background-image: url("../assets/livre.jpg");
  background-size: cover;
  background-position: 1%;
}
  .main{
    min-height: 800px;
    border-radius:20px 20px;
    margin-top: -80px;
    padding: 50px;
  }
  .im{
    background-image: url("../assets/pdf.png");
    background-size: cover;
  }
  li{
    list-style: none;
    margin-top:30px;
  }
</style>

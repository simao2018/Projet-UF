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
          <button type="button" class="btn btn-danger col-sm-12">Valider</button>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top:30px;">
      <div class="container">
        <div class="row">
            <div class="card w-50">
          <div class="card-body">
            <h5 class="card-title">{{ titre }}</h5>
            <p class="card-text">{{description}}<br>
            Prix de depart : {{ prix_depart }} €
            </p>
            <div class="row">
              <div class="form-group col-5">
                <input type="number" id="offer" name="offer" class="form-control" placeholder="saisir une offre">
              </div>
            <div class="col-4">
                <button type="button" class="btn btn-primary">Valider</button>
            </div>
            
            </div>
            
          </div>
        </div>
        <div class="col-5" style="border-left:1px solid darkgrey;margin-left:20px;">
            <h2>Liste des offres</h2>
        </div>
        </div>
        
      </div>
      
    </div>
  </div>
</template>

<script>

import db from './firebaseInit';
export default {
  name: "Encheres",
  data: ()=>{
    return {
      id_livre : null,
      titre: null,
      description: null,
      prix_depart: null
    }
  },
  beforeRouteEnter(to, from, next){
    db.collection('Livres').where('id_livre','==',to.params.id_livre).get()
    .then(querySnapchot => {
      querySnapchot.forEach(doc =>{
        next(vm => {
          vm.id_livre = doc.data().id_livre
          vm.titre = doc.data().titre
          vm.description = doc.data().description
          vm.prix_depart = doc.data().prix_depart
        })
      })
    })
  },
  watch : {
    '$route': 'fetchData'
  },
  methods:{
    fetchData(){
      db.collection('Livres').where('id_livre','==',this.$route.params.id_livre).get()
      .then(querySnapchot =>{
        querySnapchot.forEach(doc => {
              
              this.id_livre = doc.data().id_livre,
              this.titre = doc.data().titre,
              this.description =  doc.data().description,
              this.prix_depart = doc.data().prix_depart
        })
      })
    }
  }
};
</script>

<style scoped>
.b-search {
  min-height: 60px;
  padding-top: 10px;
}
.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
  background: linear-gradient(to right, #ff105f, #ffad06);
}
</style>

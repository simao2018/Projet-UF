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
    <div class="container" style="margin-top:50px;text-align:center;">
        <div class="row">
          
            <h1>Vendre un livre</h1>
        
          <div class="col-10">
              <form @submit.prevent="saveBook">
                  <div class="container">
                        <div class="form-group">
                          <input type="text" v-model="id_livre" class="form-control" placeholder="#Id du livre" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>      
                        <div class="form-group">
                          <input type="text" v-model="titre" class="form-control" placeholder="Titre du livre" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                          <input type="text" v-model="description" class="form-control" placeholder="Description" id="exampleInputPassword1">
                        </div>
                        <div class="form-group">
                          <input type="number" v-model="prix_d" class="form-control" placeholder="Prix du livre" id="exampleInputPassword1">
                        </div>
                        <div class="custom-file mb-3">
                          <input type="file" @change="onfileSelected" class="custom-file-input" id="validatedCustomFile" accept=".pdf">
                          <label class="custom-file-label" for="validatedCustomFile">importer le livre</label>
                          
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </div>
              </form>
                    
          </div>
                     
          </div>
        </div>

    </div>
</template>

<script>
import firebase from "firebase";
import db from "./firebaseInit";
export default {
  name: "vendre",
  data : ()=>{
    return {
      id_livre: null,
      titre: null,
      description: null,
      prix_d : null,
      pdf : null,
      uploadValue : null
    }
  },
  methods:{

    onfileSelected(event){
      this.pdf = event.target.files[0]
      console.log(event);
    },
  

    saveBook(){

      const storageRef = firebase.storage().ref(`${this.pdf.name}`).put(this.pdf);
      storageRef.on(`state_changed`,snapshot=>{
          this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)}, ()=>{this.uploadValue =100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.pdf = url;
        })
      })


      db.collection('Livres').add({
        id_livre : this.id_livre,
        titre : this.titre,
        description : this.description,
        url: this.url  
      }).then(docRef =>{ this.$router.push('/');console.log(docRef)}
      ).catch(error =>console.log(error.message))
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

<template>
    <div class="container">
        <div class="row py-5 px-4">
        <div class="col-xl-10 col-md-10 col-sm-10 mx-auto">

        <!-- Profile widget -->
        <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 bg-dark">
                <div class="media align-items-end profile-header">
                    <div class="profile mr-3"><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="..." width="130" class="rounded mb-2 img-thumbnail"><a href="#" class="btn btn-dark btn-sm btn-block">Mettre a jour profil</a></div>
                    <div class="media-body mb-5 text-white">
                        <h4 class="mt-0 mb-0">{{ users_name }}</h4>
                        <p class="small mb-4">{{ users_email }}</p>
                    </div>
                </div>
            </div>

            <div class="bg-light p-4 d-flex justify-content-end text-center">
                
            </div>

            <div class="py-4 px-4">
                <div class="py-4">
                    <h5 class="mb-3">Mes achats en cours</h5>
                    <div class="p-4 bg-light rounded shadow-sm">
                        <p class="font-italic mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        
                    </div>
                </div>
                <div class="py-4">
                    <h5 class="mb-3">Mes achats conclus</h5>
                    <div class="p-4 bg-light rounded shadow-sm">
                        <p class="font-italic mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        
                    </div>
                </div>
            </div>
        </div><!-- End profile widget -->

    </div>
</div>
    </div>
</template>

<script>
import db from './firebaseInit';
export default {
  name: "Profil",
  data: ()=>{
    return {
      users_id : null,
      users_name: null,
      users_email: null
    }
  },
  beforeRouteEnter(to, from, next){
    db.collection('users').where('users_id','==',to.params.id_login).get()
    .then(querySnapchot => {
      querySnapchot.forEach(doc =>{
        next(vm => {
          vm.users_id = doc.data().users_id
          vm.users_name = doc.data().users_name
          vm.users_email = doc.data().users_email
        })
      })
    })
  },
  watch : {
    '$route': 'fetchData'
  },
  methods:{
    fetchData(){
      db.collection('users').where('users_id','==',this.$route.params.users_id).get()
      .then(querySnapchot =>{
        querySnapchot.forEach(doc => {
              
              this.users_id = doc.data().users_id,
              this.users_name = doc.data().users_name,
              this.users_email =  doc.data().users_email
        })
      })
    }
  }
};
</script>

<style scoped>
    .profile-header {
    transform: translateY(5rem);
}


</style>
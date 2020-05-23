<template>
    <div class="container">
        <div class="row py-5 px-4">
        <div class="col-xl-10 col-md-10 col-sm-10 mx-auto">

        <!-- Profile widget -->
        <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 bg-dark">
                <div class="media align-items-end profile-header">
                    <div class="profile mr-3"><img src="https://pixabay.com/get/5fe7d6474c52b10ff3d89960c62d3e7e173ad9ec5159_640.png" alt="..." width="130" class="rounded mb-2 img-thumbnail"><a href="#" class="btn btn-dark btn-sm btn-block">Mettre a jour profil</a></div>
                    <div class="media-body mb-5 text-white">
                        <h4 class="mt-0 mb-0">Noms</h4>
                        <p class="small mb-4">login</p>
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
    export default {
        name: "Profil"
    }
</script>

<style scoped>
    .profile-header {
    transform: translateY(5rem);
}


</style>
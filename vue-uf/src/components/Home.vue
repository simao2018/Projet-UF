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
    <div class="row b-cover">

    </div>
    <div class="row bg-light">
      <div class="container main bg-white">
        <h2>Effectuez vos encheres sur cette page</h2><hr>
        <div class="row">
            <div class="col-sm-8">
                <div class="card col-sm-11">
                  <div class="card-body">
                    <div class="row">
                        <div class="col-sm-3 border">
                          aa
                        </div>
                        <div class="col-sm-8">
                          <h5 class="card-title">Special title treatment</h5>
                          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                          <a href="#" class="btn">Go somewhere</a>
                        </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Home"
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
.btn:not(:disabled):not(.disabled) {
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
</style>

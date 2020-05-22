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
  </div>
</template>

<script>
export default {
  name: "vendre"
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

<template>
    <div>
        <nav class="row navbar navbar-expand-lg bg-danger">
            <a class="navbar-brand" href="#">logo</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Acheter aux enchères <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Les ventes
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Aide</a>
                    </li>

                </ul>
                <div class=" my-2 my-lg-0">
                    <a class="nav-link" href="#">Connexion</a>
                </div>
            </div>
        </nav>
        <div class="row border b-search bg-light">
            <div class="input-group offset-sm-1 col-sm-5">
                <input type="search" placeholder="Rechercher..." id="search" class="form-control"/>
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
        name : 'Home'

    }
</script>

<style scoped>
    a{
        color:#fff;
    }
    a:hover{
        color:#fff;
    }
    .b-search{
        min-height:60px;
        padding-top: 10px;
    }
</style>

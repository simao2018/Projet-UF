<template>
    <div class="conatainer-fluid">
            <div class="row">
                <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                    <div class="sidebar-sticky">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">
                                    <span data-feather="home"></span>
                                    Utilisateurs <span class="sr-only">(current)</span>
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
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Tableau de bord - Video</h1>
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <div class="btn-group mr-2">
                                <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#addModal">Ajouter une nouvelle video</button>
                            </div>

                        </div>

                    </div>

                    <table class="table table-bordered">
                        <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Titre</th>
                            <th scope="col">Catégorie</th>
                            <th scope="col">Adresse Url</th>
                            <th scope="col">Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <!-- V-FOR : Loop -->
                                <tr>
                                    <th scope="row"> - </th>
                                    <td> - </td>
                                    <td> - </td>
                                    <td> - </td>
                                    <td class="dc">
                                        <div class="row">
                                            <span class="col-7"> - </span>
                                            <span id="af" class="col-5 text-right">
                                            <a href="del.php"><i class="del far fa-trash-alt"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#edModal"><i class="ed far fa-edit"></i></a>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <!-- Modal d'édition -->
                                <div class="modal fade" id="edModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Modifier la video</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <form method="POST" action="edit.php">
                                                <div class="modal-body">

                                                    <div class="form-group">
                                                        <label for="titre">Categorie de la video :</label>
                                                        <select name="cat" id="cat" class="form-control">
                                                            <option value="workshop" >Workshop</option>
                                                            <option value="reportage">Reportage</option>
                                                            <option value="jpo">Journée Porte Ouverte</option>
                                                            <option value="kobini">Konbini</option>

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
                                                        <input type="text" class="form-control" name="titre" id="titre">
                                                    </div>

                                                    <div class="form-group">
                                                        <label for="url">Url de la video : </label>
                                                        <input type="text" name="url" class="form-control" id="url" value="-">
                                                    </div>


                                                    <div class="form-group">
                                                        <label for="desc">Ajouter une description de la video :</label>
                                                        <textarea class="form-control" name="desc_vid" id="desc" rows="3"></textarea>
                                                    </div>
                                                    <input type="hidden" name="id_video" value="">

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
                    <hr/>

                    <!-- Modal d'ajout -->
                    <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Nouvelle video</h5>
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
                                            <input type="text" class="form-control" name="titre" id="titre">
                                        </div>

                                        <div class="form-group">
                                            <label for="url">Url de la video : </label>
                                            <input type="text" name="url" class="form-control" id="url">
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
export default {
    name: 'Backoffice'
}
</script>

<style scoped>
.sidebar{
    min-height:700px;
}
</style>>


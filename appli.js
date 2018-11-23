var d_input_nom = document.getElementById('new_input_dn');
var d_input_valeur = document.getElementById('new_input_dv');
var  ligne_depense = document.getElementById('new_depense');


var tbl_depense = [];
var tbl_recette = [];
var tbl_epargne = [];


document.getElementById('add_new_input').addEventListener("click", function () {

    ligne_depense.innerHTML += d_input_nom.value + ' ' + ':' + ' ' + d_input_valeur.value + '<br>';

});
// variable dépenses :
var d_input_nom = document.getElementById('new_input_dn');
var d_input_valeur = document.getElementById('new_input_dv');
var ligne_depense = document.getElementById('new_depense');
var valeur_dep1 = document.getElementById('input_dep1');
var valeur_dep2 = document.getElementById('input_dep2');
var valeur_dep3 = document.getElementById('input_dep3');
var resultat_dep = document.getElementById('resultat_depenses');
var result = 0;

var tbl_depenses = [];


// variable recette :

var r_input_nom = document.getElementById('new_input_rn');
var r_input_valeur = document.getElementById('new_input_rv');
var ligne_recette = document.getElementById('new_recette');
var valeur_re1 = document.getElementById('input_recette1'):
var valeur_re2 = document.getElementById('input_recette2');
var valeur_re3 = document.getElementById('input_recette3')
var result_re = document.getElementById('new_recette');



var tbl_recette = [];


// variable épargne :

var e_input_nom = document.getElementById('new_input_en');
var e_input_valeur = document.getElementById('new_input_ev');
var ligne_epargne = document.getElementById('new_epargne');

// fonction :

function  calcul_depense() {
    for(var i=0; i< tbl_depenses.length;i++) {


      result += parseInt(tbl_depenses[i]);


    };




    document.getElementById("result_d").innerHTML = "total des dépenses" + " " + ":" + " " + result.toString();
  };



// fonction ajouter des dépenses :


document.getElementById('add_newinput_d').addEventListener("click", function () {

    ligne_depense.innerHTML += d_input_nom.value + ' ' + ':' + ' ' + d_input_valeur.value + '<br>';

});


// fonction ajouter des recettes :

document.getElementById('add_newinput_r').addEventListener("click", function () {

    ligne_recette.innerHTML += r_input_nom.value + ' ' + ':' + ' ' + r_input_valeur.value + '<br>';

});


// fonction ajouter des epargnes :

document.getElementById('add_newinput_e').addEventListener("click", function () {

    ligne_epargne.innerHTML += e_input_nom.value + ' ' + ':' + ' ' + e_input_valeur.value + '<br>';

});



// recupérer les valeurs input fixe  dépenses :


document.getElementById('ajout_d1').addEventListener("click", function () {

    resultat_dep.innerHTML += 'loyers/charges' + ' ' + ':' + ' ' + valeur_dep1.value + '<br>';

});


document.getElementById('ajout_d2').addEventListener("click", function () {

    resultat_dep.innerHTML += 'eau/electricité/gaz' + ' ' + ':' + ' ' + valeur_dep2.value + '<br>';

});

document.getElementById('ajout_d3').addEventListener("click", function () {

    resultat_dep.innerHTML += 'tél/internet' + ' ' + ':' + ' ' + valeur_dep3.value + '<br>';

});


document.getElementById('send_depense').addEventListener("click" , function() {


  tbl_depenses.push(valeur_dep1.value);
  tbl_depenses.push(valeur_dep2.value);
  tbl_depenses.push(valeur_dep3.value);
  tbl_depenses.push(d_input_valeur.value);
  console.log(tbl_depenses);
  calcul_depense();


});



// recupérer les valeurs input fixe  dépenses :


document.getElementById('ajout_d1').addEventListener("click", function () {

    resultat_dep.innerHTML += 'loyers/charges' + ' ' + ':' + ' ' + valeur_dep1.value + '<br>';

});


document.getElementById('ajout_d2').addEventListener("click", function () {

    resultat_dep.innerHTML += 'eau/electricité/gaz' + ' ' + ':' + ' ' + valeur_dep2.value + '<br>';

});

document.getElementById('ajout_d3').addEventListener("click", function () {

    resultat_dep.innerHTML += 'tél/internet' + ' ' + ':' + ' ' + valeur_dep3.value + '<br>';

});


document.getElementById('send_depense').addEventListener("click" , function() {


  tbl_depenses.push(valeur_dep1.value);
  tbl_depenses.push(valeur_dep2.value);
  tbl_depenses.push(valeur_dep3.value);
  tbl_depenses.push(d_input_valeur.value);
  console.log(tbl_depenses);
  calcul_depense();


});

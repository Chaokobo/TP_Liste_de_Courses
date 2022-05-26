// Déclaration du tableau contenant les différents produits
var Courses = new Array();
Courses = [];


// Fonction qui ajoute un produit dans la liste
function addItem()
{
  var item = window.prompt("Que voulez-vous acheter ?");
  Courses.push(item);
  displayList();
}

// Fonction qui supprime un produit de la liste
function removeItem(itemName)
{
  var item = window.prompt("Quel produit voulez-vous retirer de la liste ?");
  var index = Courses.indexOf(item);

  if (index == -1)
  {
    console.log(item + " n'est pas dans votre liste de courses");
    return;
  }

  Courses.splice(index, 1);
  console.log("Vous avez retiré " + item + " de votre liste de courses");
  showTotalItems();
  displayList();
}

// Fonction qui supprime un produit de la liste grâce à un bouton à côté du produit
function removeItemButton(itemName)
{
  var index = Courses.indexOf(itemName);
  Courses.splice(index, 1);
  console.log("l'élément " + itemName + " a été supprimé");
  showTotalItems();
  displayList();
}

// Fonction qui affiche la liste des courses
function displayList()
{
  console.clear();
  var divSuperList = document.getElementById("superList");
  showTotalItems();
  console.log(Courses);

  if (Courses == "")
  {
    divSuperList.innerHTML = ""
  }
  else
  {
    var html = "<ul>";
    for (var i = 0; i < Courses.length; i++)
    {
      html += '<li><button title="supprimer" onClick="javascript: removeItemButton(\'' + Courses[i] + '\')" class="deleteButton" id="' + i + '">Supprimer</button>' + Courses[i] + '</li>';
    }
    html += '</ul>';
    divSuperList.innerHTML = html;
  }
}


// Fonction qui affiche le nombre de produits dans la liste
function showTotalItems()
{
  console.log("Vous avez encore " + Courses.length + " produit(s) à acheter");
  var text = "Vous avez encore " + Courses.length + " produit(s) à acheter";
  document.getElementById("nombreProduits").textContent = text;
}

// Fonction qui supprime tous les produits de la liste
function clearList()
{
  Courses = [];
  console.clear();
  displayList();
  window.alert("La liste de course est vide !");
}
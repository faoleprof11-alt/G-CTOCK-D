// G-STOCK DEKA - Gestion de stock

document.addEventListener("DOMContentLoaded", function () {
    console.log("G-STOCK DEKA est prêt !");
    
    // Les données seront conservées dans le navigateur
    let produits = JSON.parse(
        localStorage.getItem("gstock_produits") || "[]"
    );

    function sauvegarderProduits() {
        localStorage.setItem(
            "gstock_produits",
            JSON.stringify(produits)
        );
    }

    // Préparation des fonctions de gestion du stock
    window.GSTOCK = {
        afficherProduits: function () {
            return produits;
        },

        ajouterProduit: function (nom, quantite, unite) {
            if (!nom || quantite < 0 || !unite) {
                alert("Veuillez vérifier les informations du produit.");
                return;
            }

            produits.push({
                id: Date.now(),
                nom: nom,
                quantite: Number(quantite),
                unite: unite
            });

            sauvegarderProduits();
            alert("Produit ajouté avec succès !");
        },

        rechercherProduit: function (id) {
            return produits.find(function (produit) {
                return produit.id === Number(id);
            });
        }
    };
});

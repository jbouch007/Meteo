$("#bouton").click(function (e) {
    e.preventDefault();

    let url = "https://entreprise.data.gouv.fr/api/rna/v1/full_text/" + $('#choix').val();
    let param = "";


    $.getJSON(url, param,
        function (data, resultat, xhr) {
        
            console.log("data:" + JSON.stringify(data));
            console.log("resultat:" + resultat);
            console.log("xhr:" + xhr);
            let text = ""
            data.association.forEach(function (element) {

                let newdiv = document.createElement('div')
                newdiv.innerHTML(element.id_association)
                $('#resultat').append(newdiv);

            });

        });
});



$(".character li").on("click", function(){
    var DnDclass = $(this).text()

    DnDclass = DnDclass.toLowerCase()

    console.log(DnDclass)

    displaySpell(DnDclass)

    displayImage(DnDclass)

})

function displaySpell(DnDclass){
    var queryURL = `https://www.dnd5eapi.co/api/classes/${DnDclass}/spells`

$.ajax({
    type: "GET",
    url: queryURL,
    dataType: "json"
}).then(function(response){

    console.log(response)

    var card = $("<div>").addClass("card")

    var body = $("<div>").addClass("card-body")

    var list = $("<ul>").addClass("list")

    for (var i = 0; i < response.results.length; i++) {

        var spellList = response.results[i].name

        console.log(spellList)

        var spellItems = $("<li>").text(spellList)

        list.append(spellItems)


    }

    body.append(list)

    card.append(card)
    

})

}

function displayImage(DnDclass){

    var queryURL = `https://pixabay.com/api/?key=20053744-d90ffc8b7653149ca73d2a0ac&q=${DnDclass}`

    console.log(queryURL)

    $.ajax({
        type: "GET",
        url: queryURL,
        dataType: "jsonp"
    }).then(function(response){

        console.log(response)



    })


}

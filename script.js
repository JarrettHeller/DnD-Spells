$(".character li").on("click", function(){
    var DnDclass = $(this).text()

    DnDclass = DnDclass.toLowerCase()

    $(".card-section").empty()
    $(".classImg").empty()

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

    // console.log(response)

    var card = $("<div>").addClass("card")

    var body = $("<div>").addClass("card-body")

    var list = $("<ul>").addClass("list")

    for (var i = 0; i < response.results.length; i++) {

        var spellList = response.results[i].name

        // console.log(spellList)

        var spellItems = $("<li>").html(spellList)
        // console.log(spellItems)
        list.append(spellItems)


    }

    console.log(list)
    body.append(list)

    // card.append(body)

    $(".card-section").append(list)

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

        var imgClass = "";

        // imgClass = response.hits[i].pageURL

        if(DnDclass === "bard") {

            imgClass = response.hits[0].largeImageURL

            console.log(imgClass)

            var img = $("<img>").attr("src", imgClass);

            $(".classImg").append(img)

        } else if (DnDclass === "wizard") {

            imgClass = response.hits[10].largeImageURL

            console.log(imgClass)

            var img = $("<img>").attr("src", imgClass);

            $(".classImg").append(img)

        } else if (DnDclass === "sorcerer") {

            imgClass = response.hits[3].largeImageURL

            var img = $("<img>").attr("src", imgClass);

            $(".classImg").append(img)

        } else{
            
            imgClass = response.hits[14].largeImageURL
            
            var img = $("<img>").attr("src", imgClass);

            $(".classImg").append(img)
        }



    })
//wizard I = [10]

}
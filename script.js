$(".character li").on("click", function(){
    var DnDclass = $(this).text()

    DnDclass = DnDclass.toLowerCase()

    console.log(DnDclass)

    displaySpell(DnDclass)

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
        console.log(spellItems)
        list.append(spellItems)


    }

    console.log(list)
    body.append(list)

    // card.append(body)

    $(".card-section").append(list)

})
}




// Open Card Reveal Click
$('.open-button').click(function(){
    $(this).siblings('.card-reveal').toggleClass('open');
  });
  
  // Close Card Reveal Click
  $('.close-button').click(function(){
    $(this).parent().parent('.card-reveal').toggleClass('open');
  });
  
  


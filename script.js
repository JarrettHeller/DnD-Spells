
$(".character li").on("click", function(){
    var DnDclass = $(this).text()

    console.log(DnDclass)

    displaySpell(DnDclass);

})

function displaySpell(DnDClass){
    var queryURL = `https://www.dnd5eapi.co/api/classes/${DnDclass}/spells`

$.ajax({
    type: "GET",
    URL: queryURL
}).then(function(response){

    console.log(response)
    
    
})
}
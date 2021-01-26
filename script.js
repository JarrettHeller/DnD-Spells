var queryURL = 'https://www.dnd5eapi.co/api/classes/bard/spells'


$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function (response) {
    console.log(response);
    console.log(queryURL);
})
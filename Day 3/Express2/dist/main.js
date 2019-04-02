const source = $("#wonders-template").html()
const template = Handlebars.compile(source)

const updateVisited = function (wonder) {
    $.ajax({
        url: `wonder/${wonder}`,
        method: "PUT",
        success: function (response) {
            console.log("PUT complete")
            fetch()
        }
    })
}

const deleteWonder = function (wonder) {
    $.ajax({
        url: `wonder/${wonder}`,
        method: "DELETE",
        success: function (response) {
            console.log("DELETE complete")
            fetch()
        } 
    })
}
const render = function (wonders) {
    $("#wonders").empty()
    let newHtml = template({ wonders })
    $("#wonders").append(newHtml)
}

const fetch = function () {
    $.get("/wonders", function (response) {
        render(response)
    })
}


const addWonder = function () {
    let newWonder = $("#new-wonder-input").val()
    let newLocation = $("#new-location-input").val()
    //POST the newWonder to the server

    let data = { name: newWonder, location: newLocation }
    $.post('/wonder', data, function (response) {

        console.log("POST complete")
        fetch()  // render without refreshing the page
    })
}

$("#wonders").on("click", ".visit", function () {
    let wonder = $(this).closest(".wonder").find(".name").text()
    //console.log(wonder.split("-")[0].trim())
    updateVisited(wonder.split("-")[0].trim())
})


$.ajax({
    url: '/wonder/Colosseum',
    method: "DELETE",
    success: function () { 
        console.log("Deleted succesfully")
        fetch()
    }
})


fetch() //load the data on page load
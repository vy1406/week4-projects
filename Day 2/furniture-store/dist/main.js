// $("#search-forniture").on("click", function() {
//     console.log("searching for forniture")
// })

getFornitureByName = function() {
    let input = $("#forniture-input").val()

    const url = `/priceCheck/${input}`
    $.get( url , (data) => {
        $("body").append( `<div>${data.price}`)
    } )
}

buyFornitureByName = function() {
    let input = $("#buy-forniture-input").val()

    const url = `/buy/${input}`
    $.get( url , (data) => {
        //console.log(data)
        $("#messages").append( ` <p> Congratulations, you've just bought ${data.name} for ${data.price}. There are ${data.inventory} left now in the store.
        `)
    } )
}

adminReduce = function() {
    const s = "?admin=true"
    app.get(`/sale/${s}`)
}
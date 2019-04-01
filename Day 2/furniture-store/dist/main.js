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
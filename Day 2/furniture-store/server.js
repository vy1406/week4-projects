

// -----------------------------------
// Exercise 1
// Accessing this route should return a simple string 's'
// -----------------------------------

const s = "Server is up and running smoothly"
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const port = 3000
app.listen(port, () => {
    console.log(s)
})

// -----------------------------------
// Exercise 2
// Now add a /priceCheck route which has one parameter: name
// When this route is accessed, it should return the price of the item that was asked for.
// -----------------------------------
const store = [
    { 
      name: "table", 
      inventory: 3, 
      price: 800 
    },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/priceCheck/:name', function (request, response) {
    const arg = request.params.name
    const result = store.filter(s => s.name === arg).map(s => s.price)
    if ( result == null )
        response.send({price : "null"})
    response.send({price : result})
})

// -----------------------------------
// Exercise 3
/*
Add some HTML and client-side JS that allows the user to input the name of a piece of furniture, 
then make a GET request to /priceCheck with that input - 
you should display the price on the page after it returns.
*/
// -----------------------------------

// done.

// -----------------------------------
// Exercise 4
/*
Create another route in your server.js called /buy which has one parameter: name
Accessing this route should reduce the inventory of that item by 1.
So if someone makes a request to localhost:3000/buy/chair, it should reduce the 
inventory of chair to 15.
*/
// -----------------------------------
// app.get('/buy/:name', function (request, response) {
//     const arg = request.params.name
//     let curForniture = ""
//     store.forEach( e => {
//         if ( e.name == arg){
//             e.inventory --
//             curForniture = e
//         }
//     })
//     console.log(store)
//     response.send(`the ${curForniture.name} inventory's is now ${curForniture.inventory}`)
// })

// -----------------------------------
// Exercise 5
/*
Add another input and button in your HTML to allow the user to buy something. 
Again, make a GET request to the /buy route with the user's input.
After the request is complete, the user should see a message on the page: 
Congratulations, you've just bought {item} for {price}. There are {inventory} left now in the store.
*/
// -----------------------------------

app.get('/buy/:name', function (request, response) {
    const arg = request.params.name
    let curForniture = ""
    store.forEach( e => {
        if ( e.name == arg){
            e.inventory --
            curForniture = e
        }
    })
    response.send(curForniture)
})

// -----------------------------------
// Exercise 6
/*
Create another route in your server.js called /sale
This route should accept an optional parameter called admin which takes a boolean
If the route is accessed with the admin param, 
it should reduce the price of any item with an inventory greater than 10 by 50%
So if someone makes a request to localhost:3000/sale/?admin=true, 
it should change the price of chair to 60, and of picture frame to 35.
*/
// -----------------------------------

app.get('/sale', function (request, response) {
    let params = request.query
    if ( params.admin == "true"){
        store.forEach( s => {
            if ( s.inventory > 10 ) {
                s.price = s.price / 2
            }
        })
    }
    else    
        console.log("else")
    console.log(store)
    response.end()
})
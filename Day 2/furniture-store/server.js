

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
// Add some HTML and client-side JS that allows the user to input the name of a piece of furniture, 
// then make a GET request to /priceCheck with that input - 
// you should display the price on the page after it returns.
// -----------------------------------

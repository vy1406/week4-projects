const express = require('express')
const path = require('path')
const app = express()

const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}
// telling our server where are the files we want to serve are..
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

app.get('/books/:bookID', function (request, response) {
    response.send(data[request.params.bookID])
})
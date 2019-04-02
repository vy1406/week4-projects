const express = require('express')
const router = express.Router()

const wordCounter = {
    words : [
        {text: "word0", count: 5},
        {text: "word1", count: 2},
        {text: "word2", count: 45},
        {text: "word3", count: 5},
        {text: "word4", count: 10},
        {text: "word5", count: 888}
    ]
}

router.get('/sanity/:word', function (req, res) {
    res.send("Server up and running")
})

router.get('/word/:word', function (req, res) {
    console.log(wordCounter.words)
    const param_text = req.params.word
    const foundWord = wordCounter.words.find(w => w.text == param_text)
    const objToSend = foundWord ? {count: foundWord.count} :  {count: 0}
    console.log(objToSend)
    res.send(objToSend)
})

router.get('/total', function (req,res) {
    const arrOfNums = wordCounter.words.map(e => e.count)
    const total = arrOfNums.reduce(function(sum, value) {
        return sum + value;
        }, 0);
    res.send({text: "Total count", count: {total} })
})

router.post('/word', function (req, res) {
    //console.log(wordCounter.words)
    const param_text = req.body.word
    const objToSend = addWord(param_text)
    //console.log(objToSend)
    res.send({text: `Added ${param_text}`, currentCount: objToSend.count })
})

router.post('/words', function (req, res) {
    //console.log(wordCounter.words)
    const param_sentence = req.body.sentence
    const arrOfWords = param_sentence.split(" ");
    // arrOfWords.forEach(a => addWord(a))
    const counter = {
        newWords : 0,
        existed  : 0
    }
    
    for ( let i = 0 ; i < arrOfWords.length ; i ++ ){
        const wordAdded = addWord(arrOfWords[i])
        wordAdded.count == 1 ? counter.newWords ++ : counter.existed ++
    }

    console.log(counter)
    
    res.send({text:` Added ${counter.newWords} words, ${counter.existed} already existed`, currentCount: -1})
})
const addWord = function(argWord){
    const foundWord = wordCounter.words.find(w => w.text == argWord)
    const count = foundWord ? foundWord.count : 0
    if ( count > 0 ){
        foundWord.count ++
        return foundWord
    }
    else    {
        const temp = {
            text: argWord,
            count: 1
        }
        wordCounter.words.push(temp)
        return temp
    }
}


module.exports = router

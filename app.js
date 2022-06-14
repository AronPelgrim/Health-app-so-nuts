const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const ejs = require('ejs')
const bodyParser = require('body-parser')
const fs = require('file-system')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
require('dotenv').config()


app.set('view engine', 'ejs')

app.set('views', './views/pages')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/intake', (req, res) => {
  fetchJson(`https://fhir.mibplatform.nl/api/Questionnaires/2`)
  .then(function (jsonData) {
    res.render('intake', {
      data: jsonData
    })
  })
})

app.post('/result', (req, res) => {
	let userInput;
	userInput = JSON.stringify(req.body.inputvalue)
	fs.writeFile('resultaten.json', userInput, 'utf8', cb => {
	})
	res.render('dashboard', {
		resultList: JSON.parse(userInput)
	})
})

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .then((body) => body.questions) 
    .catch((error) => error)
}
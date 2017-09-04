const PORT = 3001
const TPL_SERVER = 'http://localhost:3000'

const express = require('express')
const request = require('request')
const path = require('path')
const hbs = require('handlebars')

const app = express()

app.use(express.static(path.join(__dirname, './public')))

app.use('/main', (req, res) => {
  request.get(`${TPL_SERVER}/main`, (e, r, body) => {
    if (e) throw e;

    const vm = {
      name: '6pack'
    }
    const tpl = hbs.compile(body)
    const html = tpl(vm)

    res.setHeader('Content-type', 'text/html');
    res.send(html);
  })
})

app.use('*', (req, res) => res.send('this is web'))

app.listen(PORT, ()=> console.log(`admin is running on ${PORT}`))
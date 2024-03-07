console.log("this is Backend Practice Repo");

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get ('/twitter', (req,res)=>{
    res.send('<Button>hello this is a <br/>twitter sign up </Button>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
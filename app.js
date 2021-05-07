const express = require('express')
const app = express()
const path = require('path')
app.use(express.json())

app.get('/',(req, res)=>
{
  res.sendFile(path.join (__dirname,'/index.html'))
})

app.get('/index.html', (req, res)=>
{
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/about.html',(req, res)=>
{
  res.sendFile(path.join (__dirname,'/about.html'))
})

app.get('/contact-me.html',(req, res)=>
{
  res.sendFile(path.join (__dirname,'/contact-me.html'))
})

app.get('/socials.html',(req, res)=>
{
  res.sendFile(path.join (__dirname,'/socials.html'))
})
const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`listening on port ${port}...`));

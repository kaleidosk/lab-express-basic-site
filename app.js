const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//Homepage Route
app.get('/', (req,res) =>{
    res.sendFile(`${__dirname}/views/index.html`)
})

//About Page
app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`)
})

//Works Page
app.get('/works',(req, res) => {
    res.sendFile(`${__dirname}/views/works.html`)
})

//Photo Gallery
app.get('/PhotoGallery', (req, res) => {
    res.sendFile(`${__dirname}/views/photo-gallery.html`)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
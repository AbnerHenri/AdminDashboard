const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

const DashboardRoutes = require('./routes/DashboardRoutes')

// ----------------------------------------------------------- //

mongoose.connect(process.env.URL)
    .then(()=>{ console.log('Deu certo') })
    .catch( error => { if(error){ console.log('Deu erro') }})

app.use('/dashboard', DashboardRoutes)

app.listen(3000, ()=> { console.log('Server Running') })
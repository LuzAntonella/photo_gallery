const mongoose = require('mongoose');

//console.log(process.env.MONGODB_URI)

//aqui creo mi base de datos y configuro
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true //lo sugirio 
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));
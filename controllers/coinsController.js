const database = require('../firebase-config.js').database

/*admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://coinapi-a4d96.firebaseio.com/'
  });*/

const CoinsRef = database.ref('Coin')

const AddCoin = (req, res) => {
    let coin = {
        name: req.body.name,
        country: req.params.country,
        value: req.body.value,
        value_us: req.body.valueUS,
        year: req.body.year,
        isAvailable: req.body.isAvailable,
    }
    CoinsRef.push(coin).then(()=>{
        return res.status(201).send(coin)
    }).catch((err)=>{
        return res.status(500).send({message: err}) 
    })
}

//Pais

const SearchCoin = (req,res)=>{
    

    CoinsRef.once('value', snapshot).then(()=>{

        return res.status(201).send(coin)

    }).catch((err)=>{
        return res.status(500).send({message: err}) 
    })
    
} 





//Nombre, isAvailable
OrderByChild('name')



module.exports = {
    AddCoin,
    SearchCoin
}
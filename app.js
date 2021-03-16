const express = require ( 'express' );

const app = express ();

app . set ( 'view engine' , 'ejs' );

app.use(express.static(__dirname + '/public'))

let data = [
    {
    name: "burt lannister",
    age: 56,
    hobbies: ['reading', 'polo']
    },
    {
    name: "tobe nwige",
    age: 27,
    hobbies: ['writing', 'pressing flowers']
    },
    {
    name: "miguel atwood",
    age: undefined,
    hobbies: ['music', 'mediation']
    },
    {
    name: "hieu ngyen",
    age: 33,
    hobbies: undefined
    },
    {
    name: undefined,
    age: undefined,
    hobbies: undefined
    }
    ]

app . get ( '/' , function ( req , res ){
    
let newData = {users: data};

res.render('pages/home', newData);


});

//listerning port
const PORT = process.env.PORT ||1612;
app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));
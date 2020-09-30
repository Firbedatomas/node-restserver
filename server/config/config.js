//=================
//PUERTO
//=================
process.env.PORT = process.env.PORT || 3001;

//=================
//ENTORNO
//=================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost/cafe';
} else {
    urlDB = process.env.MONGO_URI;

}
process.env.URLDB = urlDB;
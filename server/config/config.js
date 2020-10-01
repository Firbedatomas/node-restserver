//=================
//PUERTO
//=================
process.env.PORT = process.env.PORT || 3000;

//=================
//ENTORNO
//=================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//=================
//VENCIMIENTO DEL TOKEN
//=================
process.env.CADUCIDAD_TOKEN = '48h'; /* 60 * 60 * 24 * 30; */


//=================
//SEED de autentificacion
//=================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//=================
//DB
//=================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost/cafe';
} else {
    urlDB = process.env.MONGO_URI;

}
process.env.URLDB = urlDB;


//=================
//GOOGLE CLIENT ID
//=================

process.env.CLIENT_ID = process.env.CLIENT_ID || '725565704067-vb514dkejef0bmkmlrnb65hk9uufno2i.apps.googleusercontent.com';
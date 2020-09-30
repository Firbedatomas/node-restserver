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
    urlDB = 'mongodb+srv://firbeda:I0SeTRjyQKQcjUcZ@cluster0.bde3h.mongodb.net/cafe';

}
process.env.URLDB = urlDB;
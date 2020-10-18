const Database = require('sqlite-async');  // import do sqlite instalado 

// create table do SQLite
function execute(db){
   
    return db.exec(`
    CREATE TABLE IF NOT EXISTS orphanages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lat TEXT,
        lng TEXT,
        name TEXT,
        about TEXT,
        whatsapp TEXT,
        images TEXT,
        instructions TEXT,
        opening_hours TEXT,
        open_on_weekends TEXT
    );
    `)
}
module.exports = Database.open(__dirname + '/database.sqlite').then(execute) // 1º vez cria-se um banco e nas proximas somente abre 
// propriedade .then() indica para fazer algo após executar o comando

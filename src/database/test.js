const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {
// inserir dados na tabela
 await saveOrphanage(db, {
   lat: "-23.5044252",
   lng:"-46.8754494",         
   name: "Lar dos meninos",
   about: "Presta assistência a crianças de 06 a 15 anos que se encontre situação de risco e/ou vulnerabilidade social.",
   whatsapp: "9223874976",
   images: [
"https://images.unsplash.com/photo-1573449595343-f5e436ae1091?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

"https://images.unsplash.com/photo-1562790519-60c4307f025f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
   ].toString(),
   instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
   opening_hours: "Horário de visitas Das 8h até 18h",
   open_on_weekends: "0"
})
 
// consultar dados da tabela
const selectedOrphanages = await db.all("SELECT * FROM  orphanages")
console.log(selectedOrphanages)

//consultar apenas um dado da tabela
const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
console.log(orphanage)


// como deletaar dados da tabelas
//console.log(await db.run("DELETE FROM orphanages WHERE id ='5'"))
//console.log(await db.run("DELETE FROM orphanages WHERE id ='6'"))
//console.log(await db.run("DELETE FROM orphanages WHERE id ='7'"))
//console.log(await db.run("DELETE FROM orphanages WHERE id ='8'"))

})
const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
     
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6355874",
        name: "Lar dos garotos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e /ou vulnerabilidade social.",
        whatsapp: "926481434",
        images:
        [
            "https://images.unsplash.com/photo-1594269146507-03861ba52e8d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", 

            "https://images.unsplash.com/photo-1592840330988-3c88e47c1aac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 18h até 8h",
        open_on_weekends: "0"
    })

    // Consultar orphanages
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // Consultar apenas um orfanato, pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    // Deletar dados da tabela orfanato, pelo ID
    // console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'))
})

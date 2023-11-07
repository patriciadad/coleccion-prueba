const db = require('./db')
const helper = require('../helper')
const config = require('../config')

async function getData (req, res) {
    const rows = await db.query(`
        select * 
        from basedatos
        
    `)

    const data = helper.emptyOrRows(rows)

    return {
        data 
    }
}


async function insertData (req, res) {
    const data  = req.query
    const result = await db.query(
        `INSERT INTO basedatos
        (nombre, marca, tipo, precio)
        VALUES
        ('${data.nombre}', '${data.tipo}', '${data.marca}', '${data.precio}')
        `
    )

    return result.affectedRows
}


async function deleteData (req, res) {
    const data  = req.query
    console.log(data.id)
    const result = await db.query(
        `DELETE FROM basedatos
        WHERE id = ${data.id}`
    )

    return result.affectedRows
}


module.exports = {
    getData,
    insertData,
    deleteData
}


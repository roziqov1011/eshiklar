const express = require('express')
const app = express()
const { Sequelize, DataTypes, Op } = require('sequelize')

app.use(express.json())

const sequelize = new Sequelize('postgres://yqxlupyf:Lj6Ab1lxS-7SuC9vRy2WG6CoDslNh6JS@ruby.db.elephantsql.com/yqxlupyf')


const DoorsAkfa = sequelize.define('doorakfas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    width: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    height: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
})
const DoorsAlutex = sequelize.define('doorsalutex', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    materil: {
        type: DataTypes.STRING,
        allowNull: false
    }
})




sequelize.sync({ force: false }).then(() => console.log("OK"))

app.route('/akfa')
    .get(async(_, res) => {
        res.send(await DoorsAkfa.findAll())
    })
    .post(async(req, res) => {
        const { name ,color, price, width, height} = req.body
        const newUser = await DoorsAkfa.create({name,color, price, width, height})
        res.send(newUser)
    })
    .put(async(req, res) => {
        const { name,color, price, width, height, id } = req.body
        const updatedUser = await DoorsAkfa.update({ name,color, price, width, height}, {
            where: {
                id
            }
        })
        console.log(updatedUser)
        res.send("OK")
    })
    .delete(async(req, res) => {
        const { id } = req.body
        const deletedUser = await DoorsAkfa.destroy({
            where: {
                id
            }
        })
        console.log(deletedUser)
        res.send("OK")
    })

app.route('/alutex')
    .get(async(_, res) => {
        res.send(await DoorsAlutex.findAll())
    })
    .post(async(req, res) => {
        const { name, year, materil } = req.body
        const newUser = await DoorsAlutex.create({name, year, materil})
        res.send(newUser)
    })
    .put(async(req, res) => {
        const { name, year, materil, id } = req.body
        const updatedUser = await DoorsAlutex.update({ name, year, materil}, {
            where: {
                id
            }
        })
        console.log(updatedUser)
        res.send("OK")
    })
    .delete(async(req, res) => {
        const { id } = req.body
        const deletedUser = await DoorsAlutex.destroy({
            where: {
                id
            }
        })
        console.log(deletedUser)
        res.send("OK")
    })

app.listen(9000, console.log(9000))
const { DataTypes } = require('sequelize');

const Prestamo = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    dpi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    monto: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    cuotas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: true
    }
}

module.exports = Prestamo;
db.cartelera.drop()
db.cartelera.insertMany([
    {
    IdObra: "1", 
    nombre:'Los miserables', 
    precio: 3.49, 
    autor:"Victor Hugo"
    },
    {IdObra: "2", nombre:'La Celestina', precio: 2.99, autor:"Fernando de Rojas"},
    {IdObra: "3", nombre:'La fundación', precio: 3.99, autor:"Vuero Ballejo"},
    {IdObra: "4", nombre:'Historia de una escalera', precio: 2.99, autor:"Buero Vallejo" }
])

db.ventas.drop()
db.ventas.insertMany([
    {
    IdTicket: 'a1', 
    fecha: new Date("2020-02-20"), 
    cliente: "Pablo Rodriguez", 
    detalle: 
        {
        IdObra: "4", 
        cantidad:3
        }
    },
    {IdTicket: 'a2', fecha: new Date("2020-02-20"), cliente: "Ana Zambrano", detalle: {IdObra: "4", cantidad:1}},
    {IdTicket: 'a4', fecha: new Date("2020-02-21"), cliente: "María Fernandez", detalle: [{IdObra: "1", cantidad:4}, {IdObra:"3", cantidad:2}, {IdObra:"4", cantidad:1}]},
    {IdTicket: 'a5', fecha: new Date("2020-02-21"), cliente: "Francisca Guijo", detalle: [{IdObra: "2", cantidad:5}, {IdObra:"1", cantidad:4}]},
    {IdTicket: 'a6', fecha: new Date("2020-02-21"), cliente: "Javier Fernandez", detalle: {IdObra: "4", cantidad:2}},
    {IdTicket: 'a7', fecha: new Date("2020-02-22"), cliente: "María Fernandez", detalle: {IdObra: "2", cantidad:3}},
    {IdTicket: 'a8', fecha: new Date("2020-02-22"), cliente: "Pablo Rodriguez", detalle: {IdObra: "3", cantidad:2}},
    {IdTicket: 'a9', fecha: new Date("2020-02-22"), cliente: "Ana Zambrano", detalle: {IdObra: "3", cantidad:6}},
])
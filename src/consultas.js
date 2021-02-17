/*En esta consulta de 1:N vamos a comprobar que tipo de tickets ha comprado María Fernandez 
y cuanto ha pagado por cada uno de ellos*/

db.ventas.aggregate([
    {
        $match:{
            cliente:{$eq:"María Fernandez"}
        }
    },
    {
        $unwind: "$detalle"
        
    },
    {
        $lookup:
        {
            from: "cartelera",
            localField: "detalle.IdObra",
            foreignField: "IdObra",
            as: "union"
        }
    }, 
    {
        $set:
        {
            año:{$year:"$fecha"},
            mes:{$month:"$fecha"},
            día:{$dayOfMonth:"$fecha"}
        }
    },
    {
        $group:{
            _id:{
                Cliente:"$cliente",
                Obra:"$union.nombre",
                Autor:"$union.autor",
                NumeroE:"$detalle.cantidad",
                PrecioE: { $arrayElemAt: ["$union.precio", 0] }
            },
            FechaCompra:{ $push:{día:"$día",mes:"$mes",año:"$año"} }
        }
    },
    {
        $project:
        {
            _id:0,
            Cliente:"$_id.Cliente",
            FechaCompra:1,
            Numero_de_entradas:"$_id.NumeroE",
            Precio_de_entrada:"$_id.PrecioE",
            Obra:"$_id.Obra",
            Autor:"$_id.Autor",
            Precio_total: { $round: [{ $multiply: ["$_id.NumeroE","$_id.PrecioE"] }, 2] }
        }
    },
    {
        $sort:
        {
            Precio_total:1, Numero_de_tickets:1, Precio_de_ticket:1
        }
    }
]).pretty()

//En esta consulta N:M vamos a comprobar que obras ha visto cada uno de nuestros clientes en cada día

db.ventas.aggregate([
    {
        $lookup:
        {
            from: "cartelera",
            localField: "detalle.IdObra",
            foreignField: "IdObra",
            as: "union"
        }
    },
    {
        $project:
        {
            _id:0,
            Cliente:"$cliente",
            Obra_de_teatro:"$union.nombre",
            Fecha:1,
            Año:{$year:"$fecha"},
            Mes:{$month:"$fecha"},
            Día:{$dayOfMonth:"$fecha"}
        }
    },
    {
        $sort:{Cliente:1}
    }
]).pretty()
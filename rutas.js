const router = require('express').Router()
const conexion = require('./config/conexion')

//Metodos Get
router.get('/',(req, res)=>{
    let sql = 'select * from  tb_cliente'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
router.get('/', (req, res)=>{
    let sql = 'select * from tb_avance'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
router.get('/', (req, res)=>{
    let sql = 'select * from tb_registro'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })

})
router.get('/', (req, res)=>{
    let sql = 'select * from tb_entrenador'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
router.get('/', (req, res)=>{
    let sql = 'select * from tb_rutina'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
router.get('/', (req, res)=>{
    let sql = 'select * from tb_ejercicio'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
router.get('/', (req, res)=>{
    let sql = 'select * from tb_dieta'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
router.get('/', (req, res)=>{
    let sql = 'select * from tb_dietacompletada'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
router.get('/', (req, res)=>{
    let sql = 'select * from tb_usuario'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//Metodos Post
router.post('/',(req, res)=>{
    const{ Nombre, Edad, Sexo, Peso_inicial, Peso_final, Talla_inicial, Talla_final} = req.body

    let sql = `insert into tb_cliente set
     Nombre ='${Nombre}',
     Edad= '${Edad}',
     Sexo= '${Sexo}',
     Peso_inicial = '${Peso_inicial}',
     Peso_final = '${Peso_final}',
     Talla_inicial = '${Talla_inicial}',
     Talla_final = '${Talla_final}'`

     conexion.query(sql, (err, rows, fields)=>{
         if(err) throw err
         else{
             res.json({status: 'cliente agregado'})
         }
     })
})
router.post('/',(req, res)=>{
    const{ idCliente, Nombre, Sexo, Peso_inicial, Peso_final, Talla_inicial, Talla_final} = req.body

    let sql = `insert into tb_avance set
     idCliente ='${idCliente}',
     Nombre= '${Nombre}',
     Sexo= '${Sexo}',
     Peso_inicial = '${Peso_inicial}',
     Peso_final = '${Peso_final}',
     Talla_inicial = '${Talla_inicial}',
     Talla_final = '${Talla_final}'`

     conexion.query(sql, (err, rows, fields)=>{
         if(err) throw err
         else{
             res.json({status: 'avance agregado'})
         }
     })
})
router.post('/',(req, res)=>{
    const{ idCliente, Fecha, Peso, Talla} = req.body

    let sql = `insert into tb_registro set
     idCliente ='${idCliente}',
     Fecha= '${Fecha}',
     Peso= '${Peso}',
     Talla = '${Talla}'`

     conexion.query(sql, (err, rows, fields)=>{
         if(err) throw err
         else{
             res.json({status: 'registro agregado'})
         }
     })
})
router.post('/',(req, res)=>{
    const{ idCliente,Nombre, Sexo, Experiencia, Telefono} = req.body

    let sql = `insert into tb_entrenador set
     idCliente='${idCliente}',
     Nombre= '${Nombre}',
     Sexo= '${Sexo}',
     Experiencia = '${Experiencia}',
     Telefono= '${Telefono}'`

     conexion.query(sql, (err, rows, fields)=>{
         if(err) throw err
         else{
             res.json({status: 'entrenador agregado'})
         }
     })
})
router.post('/',(req, res)=>{
    const{ idEntrenador, idCliente, Nombre_rutina, Dia, Descripcion} = req.body

    let sql = `insert into tb_entrenador set
     idEntrenador ='${idEntrenador}',
     idCliente= '${idCliente}',
     Nombre_rutina= '${Nombre_rutina}',
     Dia= '${Dia}',
     Descripcion= '${Descripcion}'`

     conexion.query(sql, (err, rows, fields)=>{
         if(err) throw err
         else{
             res.json({status: 'rutina agregada'})
         }
     })
})
router.post('/',(req, res)=>{
    const{ idRutina,idEntrenador,idCliente,Descripcion_Ej} = req.body

    let sql = `insert into tb_ejercicio set
     idRutina ='${idRutina}',
     idEntrenador= '${idEntrenador}',
     idCliente= '${idCliente}',
     Descripcion = '${Descripcion}',
     Descripcion_Ej = '${Descripcion_Ej}'`

     conexion.query(sql, (err, rows, fields)=>{
         if(err) throw err
         else{
             res.json({status: 'ejercicio agregado'})
         }
     })
})
router.post('/',(req, res)=>{
    const{ idCliente, Nombre_dieta, Descripcion, Inicio, Fin} = req.body

    let sql = `insert into tb_dieta set
     idCliente ='${idCliente}',
     Nombre_dieta = '${Nombre_dieta}',
     Descripcion = '${Descripcion}',
     Inicio = '${Inicio}',
     Fin = '${Fin}'`

     conexion.query(sql, (err, rows, fields)=>{
         if(err) throw err
         else{
             res.json({status: 'dieta agregada'})
         }
     })
})
router.post('/',(req, res)=>{
    const{idDieta, idCliente, Informe} = req.body

    let sql = `insert into tb_dietacompletada set
     idDieta ='${idDieta}',
     idCliente = '${idCliente}',
     Informe= '${Informe}'`

     conexion.query(sql, (err, rows, fields)=>{
         if(err) throw err
         else{
             res.json({status: 'Informe agregado'})
         }
     })
})
router.post('/',(req, res)=>{
    const{ Nombre, Rol, Password} = req.body

    let sql = `insert into tb_usuario set
     Nombre ='${Nombre}',
     Rol = '${Rol}',
     Password = '${Password}'`

     conexion.query(sql, (err, rows, fields)=>{
         if(err) throw err
         else{
             res.json({status: ' usuario agregado'})
         }
     })
})
//eliminar
router.delete('/:id',(req, res)=>{
    const {id} = req.params

    let sql = `delete from tb_cliente where idCliente = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'cliente eliminado'})
        }
    })
});
router.delete('/:id',(req, res)=>{
    const {id} = req.params

    let sql = `delete from tb_avance where idAvance = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'avance eliminado'})
        }
    })
});
router.delete('/:id',(req, res)=>{
    const {id} = req.params

    let sql = `delete from tb_registro where idRegistro = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'registro eliminado'})
        }
    })
});
router.delete('/:id',(req, res)=>{
    const {id} = req.params

    let sql = `delete from tb_entrenador where idEntrenador = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'entrenador eliminado'})
        }
    })
});
router.delete('/:id',(req, res)=>{
    const {id} = req.params

    let sql = `delete from tb_rutina where idrutina = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'rutina eliminada'})
        }
    })
});
router.delete('/:id',(req, res)=>{
    const {id} = req.params

    let sql = `delete from tb_ejercicio where idEjercicio = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'ejercicio eliminado'})
        }
    })
});
router.delete('/:id',(req, res)=>{
    const {id} = req.params

    let sql = `delete from tb_dieta where idDieta = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'dieta eliminada'})
        }
    })
});
router.delete('/:id',(req, res)=>{
    const {id} = req.params

    let sql = `delete from tb_dietaCompletada where idDietaCompletada = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'DietaCompletada eliminada'})
        }
    })
});
router.delete('/:id',(req, res)=>{
    const {id} = req.params

    let sql = `delete from tb_usuario where idUsuario = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'usuario eliminado'})
        }
    })
});

//modificar
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{Nombre, Edad, Sexo, Peso_inicial, Peso_final, Talla_inicial, Talla_final} = req.body
    const{} = req.body

    let sql = `update tb_cliente set
    Nombre ='${Nombre}',
    Edad= '${Edad}',
    Sexo= '${Sexo}',
    Peso_inicial = '${Peso_inicial}',
    Peso_final = '${Peso_final}',
    Talla_inicial = '${Talla_inicial}',
    Talla_final = '${Talla_final}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'cliente modificado'})
        }
    })
               
})
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{idCliente, Nombre, Sexo, Peso_inicial, Peso_final, Talla_inicial, Talla_final} = req.body

    let sql = `update tb_avance set
    idCliente ='${idCliente}',
    Nombre= '${Nombre}',
    Sexo= '${Sexo}',
    Peso_inicial = '${Peso_inicial}',
    Peso_final = '${Peso_final}',
    Talla_inicial = '${Talla_inicial}',
    Talla_final = '${Talla_final}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'avance modificado'})
        }
    })
               
})
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{idCliente, fecha, peso, talla} = req.body

    let sql = `update tb_progreso set
    idCliente ='${idCliente}',
    fecha = '${fecha}',
    peso = '${peso}',
    talla = '${talla}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'progreso modificado'})
        }
    })
               
})
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{idCliente,Nombre,Sexo,Experiencia,Telefono} = req.body

    let sql = `update tb_entrenador set
    idCliente ='${idCliente}',
    Nombre= '${Nombre}',
    Sexo= '${Sexo}',
    Experiencia = '${Experiencia}',
    Telefono = '${Telefono}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'entrenador modificado'})
        }
    })
               
})
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{idEntrenador,idCliente, Nombre_rutina,Dia,Descripcion} = req.body

    let sql = `update tb_rutina set
    idEntrenador ='${idEntrenador}',
    idCliente= '${idCliente}',
    Nombre_rutina = '${Nombre_rutina}',
    Dia = '${Dia}',
    Descripcion = '${Descripcion}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'rutina modificada'})
        }
    })
               
})
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{idRutina, idEntrenador, idCliente, Descripcion_Ej} = req.body

    let sql = `update tb_ejercicio set
    idRutina ='${idRutina}',
    idEntrenador= '${idEntrenador}',
    idCliente = '${idCliente}',
    Descripcion_Ej = '${Descripcion_Ej}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'ejercicio modificado'})
        }
    })
               
})
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{idCliente, Nombre_Dieta, Descripcion, Inicio, Fin} = req.body

    let sql = `update tb_dieta set
    idCliente ='${idCliente}',
    Nombre_rutina = '${Nombre_Dieta}',
    Descripcion = '${Descripcion}',
    Inicio = '${Inicio}',
    Fin = '${Fin}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: ' dieta modificada'})
        }
    })
               
})
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{idDieta, idCliente, Informe} = req.body

    let sql = `update tb_dietaCompletada set
    idDieta ='${idDieta}',
    idCliente= '${idCliente}',
    Informe = '${Informe}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'dietacompletada modificado'})
        }
    })
               
})
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{Nombre, Rol, Password} = req.body

    let sql = `update tb_usuario set
    Nombre= '${Nombre}',
    Rol = '${Rol}',
    Password= '${Password}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'usuario modificado'})
        }
    })
               
})





module.exports = router
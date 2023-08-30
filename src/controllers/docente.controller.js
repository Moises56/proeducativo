import { pool } from "../database.js";

export const Docente = async(req, res) => {
  res.render("/academia/docente");

};


export const CuentasEstudiantes = async(req, res) => {
    //mostrar todos los usuarios
    // console.log("estudiantes: " + req.session.usuario)
    //   if (req.session.usuario && req.session.usuario.role === 'docente') {
    // pool.query('SELECT * FROM usuarios WHERE role = ? ORDER BY nombre DESC, email DESC', ['estudiante'], function(error, results) {
    //   if (error) throw error;
    //   console.log("estudiantes: " + results)
    // });
       res.render('/academia/cuentasestudiante');
    //   });
    // } else {
    //   res.redirect('/');
    // }
  };

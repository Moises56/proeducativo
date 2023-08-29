import { pool } from "../database.js";

export const renderAddLink = (req, res) => res.render("links/add");

export const CuentasEstudiantes = async(req, res) => {
    const response = await pool.query('SELECT * FROM usuarios');
    res.status(200).json(response.rows);
};

// if (req.session.usuario && req.session.usuario.role === 'docente') {
//     pool.query('SELECT * FROM usuarios WHERE role = ? ORDER BY nombre DESC, email DESC', ['estudiante'], function(error, results) {
//       if (error) throw error;
//       res.render('CuentasEstudiantes', { estudiantes: results });
//     });
//   } else {
//     res.redirect('/');
//   }
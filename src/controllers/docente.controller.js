import { pool } from "../database.js";

export const renderDocente = (req, res) => res.render("Docente/CuentasEstudiantes");

export const CuentasEstudiantes = async(req, res) => {
    //mostrar todos los usuarios
    const usuarios = await pool.query("SELECT * FROM usuarios");
    res.render("Docente/CuentasEstudiantes", { usuarios });


};
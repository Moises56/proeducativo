import passport from "passport";
import { encryptPassword } from "../lib/helpers.js";
import { pool } from "../database.js";

//listar todos los temas de un docente y renderizar el formulario para crear un nuevo test
export const renderAddTest = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM temas WHERE docente_id = ?", [
    req.user.id,
  ]);
  //mostrar por consola los temas
  console.log(rows);

  res.render("test/addTest", { temas: rows });
};


// Ruta para crear un nuevo test
export const addTest = async (req, res) => {
    const { nombre,  tema_id } = req.body;
    await pool.query("INSERT INTO tests set ?", [
      {
        nombre,
        tema_id,
        docente_id: req.user.id,
      },
    ]);
    await req.setFlash("success", "Tema creado con exito");
      res.redirect("/temas");
  };
  
  // listar los test
    export const renderTest = async (req, res) => {
        const [rows] = await pool.query("SELECT * FROM tests WHERE docente_id = ?", [
        req.user.id,
        ]);
        //mostrar por consola los temas
        // console.log(rows);
    
        res.render("test/listTest", { tests: rows });
    };


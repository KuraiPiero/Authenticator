const router = require("express").Router();
const Usuario = require("../Models/formularioDeRegistro");
const { validadorDeRegistro } = require("../validadores");
router.get("/", (req, res) => {
  res.send("entrando a registro");
});

router.post("/usreg", async (req, res) => {
  //Validador de registro
  const { error } = validadorDeRegistro(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //validar si el usuario existe
  const usuarioExistente = await Usuario.findOne({
    claveUsuario: req.body.claveUsuario
  });
  if (usuarioExistente)
    return res.status(400).send("Este usuario ya esta registrado");

  //validar si el correo existe
  const correoExistente = await Usuario.findOne({
    correo: req.body.correo
  });
  if (correoExistente) return res.status(400).send("Este core ya esta en uso");

  //crear un nuevo usuario
  const usuario = new Usuario({
    primerNombre: req.body.primerNombre,
    apellido: req.body.apellido,
    claveDeUsuario: req.body.claveDeUsuario,
    contraseña: req.body.contraseña,
    correo: req.body.correo,
    genero: req.body.genero,
    direccion: req.body.direccion,
    fecha: req.body.fecha
  });
  console.log(usuario);
  try {
    const salvarUsuario = await usuario.save();
    res.send({
      salvarUsuario
    });
  } catch (err) {
    res.status(400).send(err);
  }
  console.log("Registrado");
});

router.post("/userlog", (req, res) => {
  res.send("register");
});
module.exports = router;

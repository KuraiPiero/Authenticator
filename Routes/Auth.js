const router = require("express").Router();
const Usuario = require("../Models/formularioDeRegistro");
const { validadorDeRegistro } = require("../validadores");
router.get("/", (req, res) => {
  res.send("entrando a registro");
});

router.post("/usreg", async (req, res) => {
  const { error } = validadorDeRegistro(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //
  const usuario = new Usuario({
    primerNombre: req.body.primerNombre,
    apellido: req.body.apellido,
    claveUsuario: req.body.claveUsuario,
    contraseña: req.body.contraseña,
    email: req.body.email,
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

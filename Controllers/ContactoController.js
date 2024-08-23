class ContactoController {
  index(req, res) {
    // const usuario = req.session.usuario
    const usuario = req.session.usuario;
    const params = { usuario: usuario };
    res.render("./contacto/", params);
  }

  show(req, res) {}

  store(req, res) {}

  update(req, res) {}

  delete(req, res) {}
}

export default new ContactoController()
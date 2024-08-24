class ContactoController {
  index(req, res) {
    // const usuario = req.session.usuario
    const usuario = req.session.usuario;
    // console.table(usuario);
    // const contacto = usuario.contacto
    const index = req.session.index;
    const params = { usuario: usuario, index: index };

    res.render("./contacto/", params);
  }

  redi(req, res) {
    const usuario = req.session.usuario;
    // console.table(usuario);
    // const contacto = usuario
    // console.log({ usuario: usuario });
    const params = { usuario: usuario };
    res.render("./contacto/store", { usuario });
  }

  show(req, res) {
    const id = req.params.id;
    const index = req.session.index;
    const usuario = req.session.usuario[index].contactos[id];
    console.log({ usuario: usuario });
    const contacto = usuario;
    const params = { contacto: contacto, id: id };
    console.log(usuario);
    res.render("contacto/show", { contacto });
  }

  newstore(req, res) {
    const contacto = req.body;
    // const usuario = req.session.usuario;

     const usuario = req.session.usuario;
     console.table(usuario);
     // const contacto = usuario.contacto
     const index = req.session.index;
     const params = { usuario: usuario, index: index };

    res.render("./contacto/", params);
  }

  store(req, res) {
    const contacto = req.body.contacto;
    const usuario = req.session.usuario;

    // usuario.contacto.push(contacto)

    res.render("./contacto/store");
  }

  update(req, res) {
    const user = req.body;
    const id = req.params.id;
    const index = req.session.index;
    const newusuario = req.session.usuario;

    newusuario[index].contactos[id].nome = user.nome;
    newusuario[index].contactos[id].email = user.email;

    const usuario = newusuario;
    // console.log(usuario[index].contactos[id])
    // const contacto = usuario.contactos;

    const contacto = usuario[index].contactos[id];
    // console.log(contacto)
    const params = { usuario: usuario, contacto: contacto, id: id };
    res.render("contacto/", { usuario, index });
  }

  up(req, res) {
    const id = req.params.id;
    const index = req.session.index;
    const usuario = req.session.usuario;
    // console.log("ID:",id)
    const contacto = usuario[index].contactos[id];
    // console.log({contacto: contacto})
    res.render("./contacto/update", { contacto });
  }

  delete(req, res) {
    const index = req.session.index;
    const usuario = req.session.usuario;
    const id = req.params.id;
    usuario[index].contactos[id] = "";
    console.log("Usuario:", usuario[index].contactos);
    console.log("fgjchvkjbnl;ç");
    res.redirect("../contacto");
  }
}

export default new ContactoController()
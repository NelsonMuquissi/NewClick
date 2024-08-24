class ContactoController {
  index(req, res) {
    // const usuario = req.session.usuario
    const usuario = req.session.usuario;
    console.table(usuario)
    // const contacto = usuario.contacto
    const index = req.session.index;
    const params = { usuario: usuario, index: index};
 
    res.render('./contacto/', params);
  }

  redi(req, res){
    const usuario = req.session.usuario 
    console.table(usuario);
    // const contacto = usuario
    console.log({usuario: usuario})
    const params = { usuario: usuario };
    res.render('./contacto/store', {usuario});
  }

  show(req, res) {
     const id = req.params.id;
     const contacto = req.session.usuario.contacto[id];
     const params = { contacto: contacto, id: id };
     res.render("contacto/show", params);
  }

  store(req, res) {
    const contacto = req.body.contacto
    const usuario = req.session.usuario

    // usuario.contacto.push(contacto)

    res.redirect('/contacto')
  }

  update(req, res) {
    const id = req.params.id
    const usuario = session.usuario
    const contacto = usuario.contacto[id]
    const params = {usuario: usuario, contacto: contacto, id: id}
    res.render("contacto/update", params);
  }

  delete(req, res) {
    const usuario = req.session.usuario
    const id = req.params.id
    usuario.contacto.splice(id,1)
    res.redirect("/contacto");
  }
}

export default new ContactoController()
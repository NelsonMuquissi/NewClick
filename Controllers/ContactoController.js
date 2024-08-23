class ContactoController{

    index(req, res){
        const usuario = req.session.usuario
        const params = {usuario: usuario}
        res.render('./contacto/contacto', params)
    }

}

export default new ContactoController()
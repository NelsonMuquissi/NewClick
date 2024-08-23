class ContactoController{

    index(req, res){
        // const usuario = req.session.usuario
        const usuario = req.body
        const params = {usuario: usuario}
        res.render('./contacto/', params)
    }

}

export default new ContactoController()

class HomeController {

  home(req, res, next) {
    res.render("home", { title: "Express" });
  }

  login(req, res, next){ 
    const nome = req.body.usuario.nome
    const email = req.body.usuario.email

    if(nome && email){
      const Usuario = req.body.usuario
      
      usuario['contactos'] = []
      req.session.usuario = usuario

      res.redirect('/contactos')
    }

  }

  logout(req, res, next){
    req.session.destroy()
    res.redirect('/')
  }
}

export default new HomeController()
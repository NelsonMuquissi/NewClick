
class HomeController {

  home(req, res, next) {
    res.render("home");
  }

  login(req, res, next){ 
    const nome = req.body.nome
    const email = req.body.email
    
    

    if(nome && email){
      const Usuario = req.body.usuario
      
      usuario['contactos'] = []

      res.redirect('/contactos')
    }

  }

  logout(req, res, next){
    req.session.destroy()
    res.redirect('/')
  }
}

export default new HomeController()
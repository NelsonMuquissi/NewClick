
class HomeController {

  home(req, res, next) {
    res.render("home");
  }

  login(req, res, next){ 
    const nome = req.body.nome
    const email = req.body.email
    
    console.log("Nome",nome)

    if(nome && email){
      const usuario = req.body.usuario
      
      // usuario['contacto'] = []

      res.redirect('./contacto/contacto', usuario)
    }

  }

  logout(req, res, next){
    req.session.destroy()
    res.redirect('/')
  }
}

export default new HomeController()

class HomeController {

  home(req, res, next) {
    res.render("home");
  }

  login(req, res, next){ 
    const nome = req.body.nome
    const email = req.body.email

    if(nome && email){
      const usuario = req.body
      
      usuario['contacto'] = []
      req.session.usuario = usuario

      res.redirect("/contacto")
    }else{
      res.redirect("/");
    }

  }

  logout(req, res, next){
    req.session.destroy()
    res.redirect('/')
  }
}

export default new HomeController()
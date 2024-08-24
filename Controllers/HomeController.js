
class HomeController {

  home(req, res, next) {
    res.render("home");
  }

  login(req, res, next){ 
    const nome = req.body.nome
    const email = req.body.email

    if(nome && email){
      const usuario = [
        {
          nome: "nelson",
          email: "nelson@gmail.com",

          contactos: [
            {
              nome: "muquissi",
              email: "muquissi@gmail.com",
            },
            {
              nome: "zangui",
              email: "zangui@gmail.com",
            },
          ],
        },
      ];       
       
      let i = 0
      let index = 0
      usuario.map(user => {
        console.log(user.nome)
        if(user.email == email){
          index = i
        }
        i++
      })

      console.log("Index enconrado", index)

      req.session.usuario = usuario
      req.session.index = index

      res.redirect('/contacto/')
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
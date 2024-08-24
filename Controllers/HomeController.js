
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
          id: 0,
          nome: "nelson",
          email: "nelson@gmail.com",

          contactos: [
            {
              id: 0,
              nome: "muquissi",
              email: "muquissi@gmail.com",
            },
            {
              id: 1,
              nome: "zangui",
              email: "zangui@gmail.com",
            },
          ],
        },
        {
          id: 1,
          nome: "nel",
          email: "nel@gmail.com",

          contactos: [
            {
              id: 0,
              nome: "muqu",
              email: "muqu@gmail.com",
            },
            {
              id: 1,
              nome: "zan",
              email: "zan@gmail.com",
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
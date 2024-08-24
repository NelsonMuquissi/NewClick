
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
          email: "@",

          contactos: [
            {
              nome: "cont",
              email: "cont@",
            },
            {
              nome: "cont1",
              email: "cont1@",
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
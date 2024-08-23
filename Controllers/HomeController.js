
class HomeController {

  home(req, res, next) {
    res.render("home", { title: "Express" });
  }
}

export default new HomeController()
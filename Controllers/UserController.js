class UserController {

  user(req, res, next) {
    res.send("respond with a resource");
  }
}


export default new UserController()
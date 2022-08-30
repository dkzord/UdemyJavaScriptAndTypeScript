class HomeController {
  async index(req, res) {
    res.json('Index da HomeController');
  }
}

export default new HomeController();

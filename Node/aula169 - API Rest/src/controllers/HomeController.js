import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Fernando',
      sobrenome: 'Cavalcanti',
      email: 'fernando@aluno.com',
      idade: 232,
      peso: 573,
      altura: 2.70,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();

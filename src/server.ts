import express from 'express';

const app = express();

app.use(express.json());

app.post('/chars', (request, response) => {
  console.log(request.body);

  const chars = [
    { name: 'Jarlindo', idade: 22},
    { name: 'Marlinda', idade: 18},
    { name: 'Caique', idade: 35}
  ]

  return response.json(chars);
});

app.listen(3333);

// console.log("Iniciando a Construção de Personagens...")
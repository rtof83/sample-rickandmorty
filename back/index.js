const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

// rota principal - exemplo
app.get('/', (_, res) => {
  res.send('rota principal');
})

// rota para personagens
app.get('/character', async (_, res) => {
  let character = [];

  await axios.get('https://rickandmortyapi.com/api/character')
          .then(({ data }) => {
            character = data.results
          })
          .catch(e => console.log(e));

  try {
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
})


// rota para episodios
app.get('/episode', async (_, res) => {
  let episode = [];

  await axios.get('https://rickandmortyapi.com/api/episode')
          .then(({ data }) => {
            episode = data.results
          })
          .catch(e => console.log(e));

  try {
    res.status(200).json(episode);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
})

// rota para localizações
app.get('/location', async (_, res) => {
  let location = [];

  await axios.get('https://rickandmortyapi.com/api/location')
          .then(({ data }) => {
            location = data.results
          })
          .catch(e => console.log(e));

  try {
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
})

// rota para localização por ID
app.get('/location/:id', async (req, res) => {
  const id = req.params.id;
  let location = [];

  await axios.get(`https://rickandmortyapi.com/api/location/${id}`)
          .then(({ data }) => {
            location = data
          })
          .catch(e => console.log(e));

  try {
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
})

// rota para episódios por ID
app.get('/episode/:id', async (req, res) => {
  const id = req.params.id;
  let episode = [];

  await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
          .then(({ data }) => {
            episode = data
          })
          .catch(e => console.log(e));

  try {
    res.status(200).json(episode);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
})

// rota para personagem por ID
app.get('/character/:id', async (req, res) => {
  const id = req.params.id;
  let character = [];

  await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
          .then(({ data }) => {
            character = data
          })
          .catch(e => console.log(e));

  try {
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
})

// escutando conexão
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

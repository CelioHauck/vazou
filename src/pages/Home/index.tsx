import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { METER } from '../../navigator/CONSTANTS';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box p={4}>
      <Box mb={4}>
        <Typography variant="h3">Bem vindo!</Typography>
      </Box>
      <Box mb={2}>
        <Typography paragraph>
          Soluções para detecção de gas são cada vez mais necessários para
          garantir a segurança de todos ! Tanto que existem leis que exigem
          sensores para detectar gazes que possam causar algum tipo de acidente,
          como por exemplo, a lei municipal 5303/98 | Lei nº 5303 de 22 de junho
          de 1998
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography paragraph>
          Ela diz que: "DISPÕE SOBRE A OBRIGATORIEDADE DO USO DE APARELHO SENSOR
          DE VAZAMENTO DE GÁS NOS ESTABELECIMENTOS COMERCIAIS, INDUSTRIAIS E
          PRÉDIOS RESIDENCIAIS DO MUNICÍPIO DE FLORIANÓPOLIS E DÁ OUTRAS
          PROVIDÊNCIAS." para saber mais sobre essa lei clique{' '}
          <a href="https://cm.jusbrasil.com.br/legislacao/996657/lei-5303-98">
            aqui.
          </a>
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography paragraph>
          O site vazou tem o intuito de informar ao usuário quando ocorrer algum
          tipo de vazamento perigoso ou critico, para conseguir acompanhar da
          melhor formar possivel é necessário habilitar a sua permissão para
          receber notificações em segundo plano.
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography paragraph>
          Você tambem pode acompanhar os niveis de vazamento{' '}
          <Link to={`${METER}`}>aqui</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;

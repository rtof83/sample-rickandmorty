import { React } from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Home = () => {
  return (
        <Grid gap={3}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              className="gridButton">

          <Link to={'/character'}>
            <Button variant="contained">Personagens</Button>
          </Link>

          <Link to={'/episode'}>
            <Button variant="contained">Episódios</Button>
          </Link>

          <Link to={'/location'}>
            <Button variant="contained">Localização</Button>
          </Link>
        </Grid>
  );
}

export default Home;
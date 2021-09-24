import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import ReactSpeedometer, {
  CustomSegmentLabelPosition,
} from 'react-d3-speedometer';
import { getMeters } from '../../services/meter';

const Meter = () => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      getMeters()
        .then((e) => {
          console.log(e);
        })
        .catch((e) => console.log(e));
    }, 1700);
    return () => {
      clearInterval(time);
    };
  });

  const handleTeste = () => {
    setQuantity((old) => {
      return 800;
    });
  };

  return (
    <Box p={4}>
      <Box mb={4} flex="1 1 auto">
        <Typography variant="h6">Medição do gás</Typography>
      </Box>
      <Box
        width={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <ReactSpeedometer
          customSegmentStops={[0, 80, 750, 1000]}
          segmentColors={['firebrick', 'tomato', 'gold', 'limegreen'].reverse()}
          value={quantity}
          currentValueText="Niveis de vazamento!"
          customSegmentLabels={[
            {
              text: 'Critico',
              position: CustomSegmentLabelPosition.Inside,
              color: '#555',
            },
            {
              text: 'Perigoso',
              position: CustomSegmentLabelPosition.Inside,
              color: '#555',
              fontSize: '19px',
            },
            {
              text: 'Ok',
              position: CustomSegmentLabelPosition.Inside,
              color: '#555',
            },
          ].reverse()}
        />
        <Box>
          <Button variant="outlined" color="primary" onClick={handleTeste}>
            Teste
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Meter;

import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@material-ui/core';
import ReactSpeedometer, {
  CustomSegmentLabelPosition,
} from 'react-d3-speedometer';
import { getLastMeter } from '../../services/meter';
import { hasValidToken } from '../../infrastructure/firebase';

const Meter = () => {
  const [quantity, setQuantity] = useState(0);
  const [permissionMessage, setPermissionMessage] = useState('');

  const handleVerifyPermission = () => {
    hasValidToken(setPermissionMessage);
  };

  useEffect(() => {
    const time = setInterval(() => {
      getLastMeter()
        .then((result) => {
          if (result) {
            const { value } = result;
            setQuantity(() => {
              if (value > 1000) {
                return 1000;
              }
              return value;
            });
          } else setQuantity(0);
        })
        .catch((e) => console.log(e));
    }, 1700);
    return () => {
      clearInterval(time);
    };
  });

  useEffect(() => {
    handleVerifyPermission();
  }, []);
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
          customSegmentStops={[0, 400, 800, 1000]}
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
          <Typography variant="body1" style={{ fontWeight: 'bolder' }}>
            {permissionMessage}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Meter;

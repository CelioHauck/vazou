import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import ReactSpeedometer, {
  CustomSegmentLabelPosition,
} from 'react-d3-speedometer';
import { getMeters } from '../../services/meter';
import {
  hasValidToken,
  onMessageListener,
} from '../../infrastructure/firebase';

const Meter = () => {
  const [quantity, setQuantity] = useState(0);
  const [hiddenMessage, setHiddenMessage] = useState(true);
  const [isTokenFound, setTokenFound] = useState(false);

  useEffect(() => {
    const time = setInterval(() => {
      getMeters()
        .then((result) => {
          if (result) {
            const { value } = result;
            setQuantity((old) => {
              if (value > 1000) {
                return old;
              }
              return value;
            });
          }
        })
        .catch((e) => console.log(e));
    }, 1700);
    return () => {
      clearInterval(time);
    };
  });

  const handleVerifyPermission = () => {
    hasValidToken(setTokenFound);
    setHiddenMessage(false);
    // setQuantity((old) => {
    //   return 800;
    // });
  };

  // onMessageListener()
  //   .then((payload) => {
  //     // setShow(true);
  //     // setNotification({
  //     //   title: payload.notification.title,
  //     //   body: payload.notification.body,
  //     // });
  //     console.log(payload);
  //   })
  //   .catch((err) => console.log('eu?'));

  const onMessageWithToken = () => {
    if (isTokenFound) {
      console.log('oii');
      onMessageListener()
        .then((payload: any) => {
          // setShow(true);
          // setNotification({
          //   title: payload.notification.title,
          //   body: payload.notification.body,
          // });
          new Notification(payload?.notification.title);
          console.log(payload);
        })
        .catch((err) => console.log('eu?'));
    }
  };

  onMessageWithToken();
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
          customSegmentStops={[0, 80, 600, 1000]}
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
          {!hiddenMessage && (
            <Box>
              <Typography>
                {isTokenFound ? 'Permissão habilitada' : 'Permissão negada'}
              </Typography>
            </Box>
          )}

          <Button
            variant="outlined"
            color="primary"
            onClick={handleVerifyPermission}
          >
            Verificar permissão
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Meter;

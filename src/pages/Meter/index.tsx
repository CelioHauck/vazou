import { Box, Typography } from '@material-ui/core';
import ReactSpeedometer, {
  CustomSegmentLabelPosition,
} from 'react-d3-speedometer';

const Meter = () => {
  return (
    <Box p={4}>
      <Box mb={4} flex="1 1 auto">
        <Typography variant="h6">Medição do gás</Typography>
      </Box>
      <Box width={1} display="flex" alignItems="center" justifyContent="center">
        <ReactSpeedometer
          customSegmentStops={[0, 80, 750, 1000]}
          segmentColors={['firebrick', 'tomato', 'gold', 'limegreen'].reverse()}
          value={333}
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
      </Box>
    </Box>
  );
};

export default Meter;

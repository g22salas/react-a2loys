import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Fast Growing Occupations
      </Typography>
      <Typography variant="h5" component="div">
      $56,230.00
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Wind Turbine Service Technicians
      </Typography>
      <Typography variant="body2">
      About 1,900 openings for wind turbine technicians are projected each year, on average, over the decade.
      </Typography>
      <br />
      <Typography variant="caption">
        Certificate
      </Typography>
    </CardContent>
    <CardActions>
    <Button size="small">Find Jobs</Button>
      <Button size="small">Get Training</Button>
     
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

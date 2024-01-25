import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function VaAccordion() {
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
    setExpanded2(false); 
    setExpanded3(false); 
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
    setExpanded1(false); 
    setExpanded3(false); 
  };

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
    setExpanded2(false); 
    setExpanded1(false);
  };

  return (
    <div className='-mt-2 '>
      <div >
        <Card sx={{boxShadow: 'none', border: 'none', padding: 0, margin: 0 }}>
          <CardActions sx={{padding: 0, margin: 0 }} disableSpacing>
            <p className="text-sm font-semibold text-black 2xl:text-sm">
              Transfer via ATM
            </p>
            <ExpandMore
              onClick={handleExpandClick1}
              aria-expanded={expanded1}
              aria-label="show more"
              
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded1} timeout="auto" unmountOnExit>
            <hr />
            <CardContent sx={{padding: 0, margin: 0 }}>
              <Typography sx={{margin: 0, marginTop: 3}} paragraph>
                <div className="mt-2 text-black text-[9px]">
                  <ol>
                    <li>masi kosong</li>
                  </ol>
                </div>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <hr/>
      </div>

      <div>
        <Card sx={{ boxShadow: 'none', border: 'none' }}>
          <CardActions sx={{padding: 0, marginTop: 1 }} disableSpacing>
            <p className="text-sm font-semibold text-black 2xl:text-sm">
              Transfer via Internet Banking
            </p>
            <ExpandMore
              onClick={handleExpandClick2}
              aria-expanded={expanded2}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded2} timeout="auto" unmountOnExit>
            <hr />
            <CardContent sx={{padding: 0, margin: 0 }}>
              <Typography sx={{margin: 0, marginTop: 3}} paragraph>
                <div className="mt-2 text-black text-[9px]">
                  <ol>
                    <li>1. Login to <span className="font-semibold">Internet Banking</span></li>
                    <li>2. Select <span className="font-semibold">Transfer Dana</span></li>
                    <li>3. Select <span className="font-semibold">Transfer ke BCA Virtual Account</span></li>
                    <li>4. Input <span className="font-semibold">Virtual Account Number</span>, eg. <span className="font-semibold">780 0112 5785 8072</span> <span className="block ml-2.5">as <span className="font-semibold">No. Virtual Account</span></span></li>
                    <li>5. Click <span className="font-semibold">Lanjutkan</span> dan <span className="font-semibold">Kirim</span></li>
                    <li>6. <span className="font-semibold">Payment receipt</span> displayed</li>
                    <li>7. Payment Done</li>
                  </ol>
                </div>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <hr/>
      </div>

      <div>
        <Card sx={{ boxShadow: 'none', border: 'none' }}>
          <CardActions sx={{padding: 0, marginTop: 1 }} disableSpacing>
            <p className="text-sm font-semibold text-black 2xl:text-sm">
              Transfer via Mobile Banking
            </p>
            <ExpandMore
              onClick={handleExpandClick3}
              aria-expanded={expanded3}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded3} timeout="auto" unmountOnExit>
            <hr />
            <CardContent sx={{padding: 0, margin: 0 }}>
              <Typography sx={{margin: 0, marginTop: 3}} paragraph>
                <div className="mt-2 text-black text-[9px]">
                <ol>
                  <li>1. Login to <span className="font-semibold">Internet Banking</span></li>
                  <li>2. Select <span className="font-semibold">Transfer Dana</span></li>
                  <li>3. Select <span className="font-semibold">Transfer ke BCA Virtual Account</span></li>
                  <li>4. Input <span className="font-semibold">Virtual Account Number</span>, eg. <span className="font-semibold">780 0112 5785 8072</span> <span className="block ml-2.5">as <span className="font-semibold">No. Virtual Account</span></span></li>
                  <li>5. Click <span className="font-semibold">Lanjutkan</span> dan <span className="font-semibold">Kirim</span></li>
                  <li>6. <span className="font-semibold">Payment receipt</span> displayed</li>
                  <li>7. Payment Done</li>
                </ol>
                </div>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <hr/>
      </div>
    </div>
  );
}

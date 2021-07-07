import React from 'react';
import { Box } from '@material-ui/core';
import { CoinDetailsTabValues } from '../../../../models';

interface Props {
  children?: React.ReactNode;
  index: CoinDetailsTabValues;
  value: CoinDetailsTabValues;
}

const TabPanel: React.FC<Props> = ({ children, value, index, ...other }) => {

  return (
    <Box
      flex="1"
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <>
          {children}
        </>
      )}
    </Box>
  );
}

export default TabPanel

import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, LinearProgress, Typography } from '@material-ui/core';
import { formatNumber, roundDecimals } from '../../../../common/helpers';
import { Coin } from '../../../../models';
import CirculatingSupplyTooltip from '../atoms/CirculatingSupplyTooltip'

const useStyles = makeStyles((theme: Theme) => ({
  progressBar: {
    marginTop: theme.spacing(1),
    width: '84%',
    float: 'right',
    borderRadius: 12,
    height: 6,
    minWidth: 150,
    '& .MuiLinearProgress-bar': {
      borderRadius: 12
    }
  }
}));

interface Props {
  coin: Coin
}

const CirculatingSupplyCell: React.FC<Props> = ({ coin }) => {
  const classes = useStyles();

  const circulatingSupply = coin.circulatingSupply || 0;
  const totalSupply = coin.totalSupply || 0;

  return (
    <CirculatingSupplyTooltip
      coinSymbol={coin.symbol.toUpperCase()}
      circulatingSupply={circulatingSupply}
      totalSupply={totalSupply}
    >
      <Box>
        <Typography variant="subtitle2" noWrap>
          {formatNumber(roundDecimals(circulatingSupply, 0))} {coin.symbol.toUpperCase()}
        </Typography>
        {circulatingSupply < totalSupply &&
          <LinearProgress
            className={classes.progressBar}
            variant="determinate"
            color="secondary"
            value={circulatingSupply / totalSupply * 100}
          />
        }
      </Box>
    </CirculatingSupplyTooltip>
  );
}

export default CirculatingSupplyCell
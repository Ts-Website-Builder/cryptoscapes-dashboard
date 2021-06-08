import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { Avatar, Box, Button, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles<Theme, { color: string }>((theme: Theme) => ({
  button: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    backgroundColor: theme.palette.card.paper,
    padding: 12,
    borderRadius: 12,
    '& .MuiSkeleton-root': {
      margin: 'auto'
    }
  },
  flexbox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 12,
    '& .MuiAvatar-root': {
      height: theme.spacing(4),
      width: theme.spacing(4),
      color: (props: { color: string }) => props.color,
      backgroundColor: 'transparent',
    },
  },
  headerContainer: {
    height: 30,
    margin: '0 2% 0 8%',
    textAlign: 'left',
    color: (props: { color: string }) => props.color,
    '& .MuiTypography-root': {
      lineHeight: 1.0
    }
  }
}));

interface Props {
  header: string;
  price: string;
  time: string;
  icon: JSX.Element;
  color: string;
  selected: boolean;
  onClick: () => void;
}

const GasIndicator: React.FC<Props> = ({ header, price, time, icon, color, selected, onClick }) => {
  const classes = useStyles({ color });

  return (
    <Button className={classes.button} onClick={onClick} variant={selected ? "outlined" : 'text'}>
      <Box className={classes.flexbox}>
        <Avatar variant="rounded">
          {icon}
        </Avatar>
        <Box className={classes.headerContainer}>
          <Typography variant="subtitle2" noWrap>{header}</Typography>
          <Typography variant="caption" noWrap>{time}</Typography>
        </Box>
      </Box>
      {price ? (
        <Typography variant="body1" noWrap>{price} Gwei</Typography>
      ) : (
        <Skeleton animation="wave" height={24} width="50%" />
      )}
    </Button>
  )
}

export default GasIndicator

import React from 'react'

import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import References from './component/References'
import Intro from './component/Intro'
import Hydrogels from './component/Hydrogels'
import Chitosan from './component/Chitosan'
import Conclusion from './component/Conclusion'
import Agar from './component/Agar'
import white from './img/white.jpg'
import cabbage from './img/cabbage.jpg'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 45,
    fontWeight: 'bolder',
    fontFamily: 'Rokkit',
    color: 'white',
  },
  title2: {
    fontSize: 40,
    fontWeight: 'bolder',
    fontFamily: 'Rokkit',
    color: 'white',
    paddingTop: 20,
  },
  divider: {
    margin: 20,
  },
  img: {
    backgroundImage: `url(${cabbage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    height: '100vh',
    overflow: 'hidden',
    margin: -10,
    display: 'flex',
    justifyContent: 'center',
    filter: 'blur(10px)',
  },
  txtContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    padding: 10,
    textAlign: 'center',
  },
  container: {
    height: 'auto',
    backgroundImage: `url(${white})`,
    margin: -10,
    boxShadow: '0 0 8px 8px white',
    display: 'flex',
    justifyContent: 'center',
    backgroundRepeat: 'repeat-y'
  },
  content: {
    width: '65%',
    padding: 30,
    backgroundColor: '#f4f4f4',
    marginTop: 150,
    marginBottom: 30
  },
}))

export default function App() {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.img} />
      <div className={classes.txtContainer}>
        <Typography className={classes.title}>We've Talked About Alternative Food,</Typography>
        <Typography className={classes.title2}>
          But What About Alternative Food Packaging?
        </Typography>
      </div>
      <div className={classes.container}>
        <div id='text-container' className={classes.content}>
          <Intro />
          <Divider className={classes.divider} />
          <Hydrogels />
          <Divider className={classes.divider} />
          <Chitosan />
          <Divider className={classes.divider} />
          <Agar />
          <Divider className={classes.divider} />
          <Conclusion />
          <Divider className={classes.divider} />
          <References />
        </div>
      </div>
    </div>
  )
}

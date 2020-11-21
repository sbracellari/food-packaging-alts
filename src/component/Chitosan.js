import React from 'react'

import Typography from '@material-ui/core/Typography'

import chitosan from '../img/chitosan.png'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  title: {
    padding: 20,
    fontSize: 22,
    fontWeight: 'bolder',
    textAlign: 'center',
    fontFamily: 'Rokkit',
  },
  section: {
    textAlign: 'justify',
    padding: '10px 70px',
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    width: '80%',
    margin: 50,
  },
}))

export default function Chitosan() {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.title}>Chitosan</Typography>
      <Typography className={classes.section}>
        Chitosan is mainly isolated from <strong>crustacean waste</strong> and is the{' '}
        <strong>second most abundant polysaccharide (carbohydrate) in the world.</strong> It can be
        used in a similar way that hydrogels are used, by casting it into a film that will
        eventually be wrapped around the food. However, unlike hydrogels, chitosan can also be used
        as a <strong>coating that is placed directly onto the food</strong>, either by dipping or
        spraying.
      </Typography>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={chitosan} alt='chitosan film' />
      </div>
      <Typography className={classes.section}>
        Let’s talk about some of the advantages of chitosan. Again, like hydrogel, it is{' '}
        <strong>FDA approved</strong> (which is very important for obvious reasons). The{' '}
        <strong>abundance</strong> of chitosan alone is a huge benefit as well; it implies that it
        would be a relatively
        <strong> low-cost alternative</strong>, which is <em>huge</em> if we’re trying to find an
        alternative comparable to plastic. Let’s now look at chitosan in the same way that we looked
        at hydrogels.
        <ul>
          <li>
            <strong>
              <em>Biodegradability.</em>
            </strong>{' '}
            Like hydrogels, chitosan is also biodegradable, since it is coming from an animal.
          </li>
          <li>
            <strong>
              <em>Absorbability.</em>
            </strong>{' '}
            Though perhaps not to the same scale as hydrogels, chitosan also has swelling
            properties, which in turn helps to extend the shelf life of food staples like fruits,
            vegetables, and meats.
          </li>
        </ul>
        Another advantage of chitosan that we did not see much with hydrogels is that chitosan is{' '}
        <strong>antimicrobial</strong>. It can{' '}
        <strong>fight against Gram-positive and Gram-negative bacteria, yeast, and fungi</strong>.
      </Typography>
      <Typography className={classes.section}>
        As far as disadvantages go, there are a couple. Generally, chitosan has{' '}
        <strong>less thermal and mechanical properties when compared to hydrogels</strong>. This is
        usually remedied by mixing the chitosan with other compounds to create a sort of hybrid
        substance that is more suitable for packaging.
      </Typography>
    </>
  )
}

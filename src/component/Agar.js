import React from 'react'

import Typography from '@material-ui/core/Typography'

import agar from '../img/agar.png'
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

export default function Agar() {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.title}>Agar</Typography>
      <Typography className={classes.section}>
        The last item on the list is agar. This might be the one that you’ve heard of before - it’s
        more commonly recognized as edible food when compared to hydrogels and chitosan. You might
        have even heard about the popular trend that picked up a few years ago involving the
        preparation of clear, jello-like desserts called raindrop cakes made from agar powder.
      </Typography>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={agar} alt='hydrogel' />
      </div>
      <Typography className={classes.section}>
        Agar is similar to chitosan in that it’s also a <strong>heavily abundant</strong> and{' '}
        <strong>renewable</strong> alternative, as it is a{' '}
        <strong>polysaccharide that is extracted from algae</strong>. Its derivation into a food
        packaging alternative is a bit different from chitosan and hydrogels, though. With those, we
        saw some kind of chemical solution that was dried and cast into films. Agar is a bit simpler
        in that all you have to do is{' '}
        <strong>
          boil some water, dissolve it, and then let it set, similar to how you would prepare
          gelatin
        </strong>
        . This makes agar a bit more accessible to those who’d like to dabble in the art of
        alternative food packaging themselves.
      </Typography>
      <Typography className={classes.section}>
        Unfortunately, agar is probably the farthest from an ideal alternative out of the options
        we’ve talked about. In terms of the four qualities that any food packaging alternative
        should have, agar really only checks off the “biodegradability” box. It does have some other
        advantages, though, so let’s talk about those.
        <ul>
          <li>
            <strong>
              <em>Transparency.</em>
            </strong>{' '}
            Agar is completely transparent, as you can see from that yummy dessert photo I posted
            above. This is good for a couple of reasons - first of all, it’s less off-putting to
            consumers. If agar was naturally yellow or brown, it probably wouldn’t be very
            attractive when wrapped around your food. More importantly, though, is that the
            transparency allows the consumer to see the state of their food better than if it were
            wrapped in translucent plastic. This way, you’d know that what your buying looks and is
            fresh.
          </li>
          <li>
            <strong>
              <em>Absorbability.</em>
            </strong>{' '}
            The fact that agar is heat sealable only means good things for the freshness of your
            food. If you can apply an airtight seal to agar the way you can plastic, then you know
            that your food is only going to last that much longer.
          </li>
        </ul>
        A few other notable mentions are that agar, like chitosan, is <strong>antimicrobial</strong>
        , so it can fight off all those bad bacteria that don’t belong anywhere near our food. Agar
        also helps to battle against excess condensation on the surface of the food that it
        encloses.
      </Typography>
      <Typography className={classes.section}>
        Now let’s talk about the disadvantages.{' '}
        <strong>
          In its pure state, agar has basically no mechanical, thermal, or swelling properties
        </strong>
        . It’s brittle, has low elasticity, high water sensitivity, and poor thermal stability. I
        know what you’re thinking:
        <em> why is this even an option then if it has nothing we’re looking for?</em> And that’s a
        good point. Fortunately, you can remedy this by doing something very similar to what you’d
        do with chitosan: make a hybrid. Mixing agar with other food-safe substances is a good way
        to strengthen it and lessen the burden of these disadvantages.
      </Typography>
    </>
  )
}

import React from 'react'

import Typography from '@material-ui/core/Typography'

import hydrogel from '../img/hydrogel.png'
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

export default function Hydrogels() {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.title}>Hydrogels</Typography>
      <Typography className={classes.section}>
        Hydrogels are <strong>hydrophilic, 3 dimensional networks of polymer chains</strong>, which
        is really just fancy talk for a substance that can{' '}
        <strong>absorb a lot of liquid without any sort of structural changes</strong>. Most
        hydrogels can absorb up to 100% of their weight in water, with some superabsorbent hydrogels
        capable of absorbing thousands of times their dry weight.
      </Typography>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={hydrogel} alt='hydrogel' />
      </div>
      <Typography className={classes.section}>
        Hydrogels can either be natural or synthetic, with the first synthetic polymers arising in
        the early 1960s. They’re present in some pretty common, everyday items, like contact lenses
        and diapers - why do you think diapers are so absorbent? They eventually found their way
        into the food industry by means of food packaging.{' '}
        <strong>Hydrogels can be cast into biodegradable films and dried</strong>, allowing them to
        act as a sort of barrier between your food and the outside world. Without going into the
        actual casting process, it really doesn’t get more simple than that.
      </Typography>
      <Typography className={classes.section}>
        So why do we want a hydrogelic film wrapped around our food as opposed to some plastic?
        Well, most importantly, they’re <strong>FDA approved</strong>, so we know that they’re at
        least food safe. But that isn’t really enough to justify them as a packaging alternative.
      </Typography>
      <Typography className={classes.section}>
        Remember those criteria I mentioned earlier about what makes a good food packaging
        alternative? Let’s talk about hydrogels in terms of those that are applicable:
        <ul>
          <li>
            <strong>
              <em>Biodegradability.</em>
            </strong>{' '}
            This one is pretty straightforward. Hydrogels break down naturally and wouldn’t be
            adding to landfills the way plastics to.
          </li>
          <li>
            <strong>
              <em>Absorbability.</em>
            </strong>{' '}
            This is arguably the most important aspect of a hydrogel, since it’s literal definition
            revolves around being super absorbent. Hydrogels are sometimes described as “smart”,
            meaning that they can quickly respond to their environment and react by increasing or
            decreasing hydration levels. This decrease in water activity is essential as it slows
            down the growth rate of mold, yeast, and other bacteria. It can also decrease the
            softening of crispy items such as chips or biscuits. The takeaway here is that moisture
            control is very important in prolonging shelf life, and hydrogels just so happen to be
            pretty good at that.
          </li>
          <li>
            <strong>
              <em>Thermal properties.</em>
            </strong>{' '}
            As mentioned above, hydrogels are what we call “smart”, and this extends into its
            thermal properties as well. In addition to the ability to react to stimuli like pH
            levels, hydrogels can also react to increases/decreases in temperature and respond
            accordingly.
          </li>
        </ul>
        All of these properties come together to help hydrogels achieve what is called{' '}
        <strong>active food packaging</strong> - packaging that interacts directly with the
        contained food product to reduce microbial growth and extend shelf life.
      </Typography>
      <Typography className={classes.section}>
        So these hydrogels sound great, right? They’re good at keeping your food fresher for longer,
        help slow the growth of any bacteria, and they aren’t bad for the environment - what could
        go wrong? Unfortunately, there is one pretty significant concern when it comes to these
        super polymers: <strong>disintegration</strong>. The very same hydratability that makes
        hydrogels so great is also its worst enemy; hydrogels can sometimes reach what is called an
        <strong> equilibrium swelling level</strong>, in which case they can begin to dissolve. This
        isn’t very common, but it’s kind of a big problem. You wouldn’t want to get your food home
        and find that its packaging has completely disintegrated.
      </Typography>
      <Typography className={classes.section}>
        This is where synthetic hydrogels would help us out - we can tweak them just enough to
        minimize the chance for disintegration while maximizing swelling capabilities, allowing for
        full optimization.
      </Typography>
    </>
  )
}

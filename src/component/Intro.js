import React from 'react'

import Typography from '@material-ui/core/Typography'

import plastic from '../img/plastic.jpg'
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

export default function Intro() {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.title}>
        For the past 5 decades or so, the food industry has been using petroleum-based plastic
        polymers to package our food products.
      </Typography>
      <Typography className={classes.section}>
        You’ve probably heard of a couple - <strong>polyethylene</strong> and{' '}
        <strong>polypropylene</strong> are two commonly used ones. Knowing what we know about
        plastic now, you’re probably thinking to yourself:{' '}
        <em>50 years? That has to be so bad for our environment! </em>
        And you wouldn’t be wrong. But, hindsight is 20/20, and at the time, plastic was the most
        practical and economical option. Practical because it’s extremely readily available, and
        economical because it costs almost nothing to use.
      </Typography>
      <Typography className={classes.section}>
        You might be wondering why the industry started using plastic in the first place. The simple
        answer is that there was an{' '}
        <strong>increased demand from consumers for fresher and safer food</strong>, which led to
        the <strong>increased use of plastic as a way to package that food</strong>. It makes sense;
        if the people want a longer shelf life for their food, and you have this material that is
        safe, low cost, and readily available, you would use it, too. But like I said, hindsight is
        20/20, and we know now that plastic really isn’t the best option for food packaging when it
        comes to our environment.
      </Typography>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={plastic} alt='plastic bottles' />
      </div>
      <Typography className={classes.section}>
        Think about how much plastic packaging you are removing from your food on a weekly basis -
        it’s probably a lot. Our fruits are bagged in it, our snacks are boxed in it, and our meats
        are wrapped in it. And whether that plastic goes to the trash bin or the recycling bin, some
        of it will inevitably end up in a landfill, because{' '}
        <strong>plastic is neither 100% recyclable nor biodegradable.</strong> This is obviously not
        great for our planet, and fortunately, we’ve come to realize that.{' '}
        <strong>
          Upward trending spikes in petroleum prices and increased knowledge about how unhealthy
          plastic use is for the environment has left us searching for alternatives.
        </strong>
      </Typography>
      <Typography className={classes.section}>
        There are a few criteria that must be met when choosing a food packaging alternative (this
        is assuming that the chosen substance is food-safe, for obvious reasons): generally, we want
        to choose something that is <strong>biodegradable</strong> and has promising{' '}
        <strong>swelling, thermal, and mechanical properties</strong>. The first one,
        biodegradability, is pretty obvious; the substance should break down naturally over time so
        that it doesn’t end up in a landfill. The next few may sound a bit intimidating, but when it
        comes down to it, we’re just looking for something that can absorb excess moisture, is heat
        tolerant, and can perform well under stress (i.e. it isn’t brittle), respectively.
      </Typography>
      <Typography className={classes.section}>
        I’m going to tell you about 3 food packaging alternatives that meet these requirements:
        <strong> hydrogel, chitosan, and agar</strong>. Some of these may sound familiar to you -
        and that’s because they’re pretty common substances. We’re going to explore the ways in
        which these substances are used, what they’re really good at doing, and what they’re not so
        good at doing. Let’s get right into it.
      </Typography>
    </>
  )
}

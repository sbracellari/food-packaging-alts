import React from 'react'

import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import plastic from './img/plastic.jpg'
import hydrogel from './img/hydrogel.png'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    margin: -10,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    width: '60%',
    backgroundColor: '#ffffff',
    marginTop: 150,
    marginBottom: 20,
    padding: 30,
    textAlign: 'justify',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bolder',
    padding: 40,
    textAlign: 'center',
    fontFamily: 'Rokkit',
  },
  subsection: {
    padding: '10px 30px',
    fontSize: 18,
  },
  section: {
    fontFamily: 'Rokkit',
    fontWeight: 'bolder',
    fontSize: 22,
    padding: '10px 30px',
    textAlign: 'center',
  },
  divider: {
    margin: 20,
  },
}))

export default function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.title}>
          We've Talked About Alternative Food, But What About Alternative Food Packaging?
        </Typography>
        <div>
          <Typography className={classes.subsection}>
            For the past 5 decades or so, the food industry has been using petroleum-based plastic
            polymers to package our food products, and you’ve probably heard of a couple -
            polyethylene and polypropylene are two commonly used ones. Knowing what we know about
            plastic now, you’re probably thinking to yourself - “50 years? That has to be so bad for
            our environment!” - and you wouldn’t be wrong. But, hindsight is 20/20, and at the time,
            plastic was the most practical and economical option. Practical because it’s extremely
            readily available, and economical because it costs almost nothing to use.
          </Typography>
          <Typography className={classes.subsection}>
            You might be wondering why the industry started using plastic in the first place. The
            simple answer is that there was an increased demand from consumers for fresher and safer
            food, which led to the increased use of plastic as a way to package that food. It makes
            sense; if the people want a longer shelf life for their food, and you have this material
            that is safe, low cost, and readily available, you would use it, too. But like I said,
            hindsight is 20/20, and we know now that plastic really isn’t the best option for food
            packaging when it comes to our environment.
          </Typography>
          <div style={{ padding: 70 }}>
            <img style={{ width: '100%' }} src={plastic} alt='fruit in plastic bag' />
          </div>
          <Typography className={classes.subsection}>
            Think about how much plastic packaging you are removing from your food on a weekly basis
            - it’s probably a lot. Our fruits are boxed in it, our snacks are bagged in it, and our
            meats are wrapped in it. And whether that plastic goes to the trash bin or the recycling
            bin, some of it will inevitably end up in a landfill, because plastic is neither 100%
            recyclable nor biodegradable. This is obviously not great for our planet, and
            fortunately, we’ve come to realize that. Upward trending spikes in petroleum prices and
            increased knowledge about how unhealthy plastic use is for the environment has left us
            searching for alternatives.
          </Typography>
          <Typography className={classes.subsection}>
            There are a few criteria that must be met when choosing a food packaging alternative
            (this is assuming that the chosen substance is food-safe, for obvious reasons):
            generally, we want to choose something that is biodegradable and has promising swelling,
            thermal, and mechanical properties. The first one, biodegradability, is pretty obvious;
            the substance should break down naturally over time so that it doesn’t end up in a
            landfill. The next few may sound a bit intimidating, but when it comes down to it, we’re
            just looking for something that can absorb excess moisture, is heat tolerant, and can
            perform well under stress (i.e. it isn’t brittle), respectively.
          </Typography>
          <Typography className={classes.subsection}>
            I’m going to tell you about 3 food packaging alternatives that meet these requirements:
            hydrogel, chitosan, and agar. Some of these may sound familiar to you - and that’s
            because they’re pretty common substances. We’re going to explore the ways in which these
            substances are used, what they’re really good at doing, and what they’re not so good at
            doing. Let’s get right into it.
          </Typography>
        </div>
        <Divider className={classes.divider} />
        <div>
          <Typography className={classes.section}>Hydrogels</Typography>
          <Typography className={classes.subsection}>
            Hydrogels are hydrophilic, 3 dimensional networks of polymer chains, which is really
            just fancy talk for a substance that can absorb a lot of liquid without any sort of
            structural changes. Most hydrogels can absorb up to 100% of their weight in water, with
            some superabsorbent hydrogels capable of absorbing thousands of times their dry weight.
          </Typography>
          <div style={{ padding: 70 }}>
            <img style={{ width: '100%' }} src={hydrogel} alt='fruit in plastic bag' />
          </div>
          <Typography className={classes.subsection}>
            Hydrogels can either be natural or synthetic, with the first synthetic polymers arising
            in the early 1960s. They’re present in some pretty common, everyday items, like contact
            lenses and diapers. But how did they find their way into the food industry? Well, to put
            it simply, they found their way by acting as food packaging, but you already know that.
            Essentially, hydrogels can be cast into biodegradable films and dried, allowing them to
            act as a sort of barrier between your food and the outside world. Without going into the
            actual casting process, it really doesn’t get more simple than that.
          </Typography>
          <Typography className={classes.subsection}>
            So why do we want a hydrogelic film wrapped around our food as opposed to some plastic?
            Well, most importantly, they’re FDA approved, so we know that they’re at least food
            safe. But that isn’t really enough to justify them as a packaging alternative.
          </Typography>
          <Typography className={classes.subsection}>
            Remember those criteria I mentioned earlier about what makes a good food packaging
            alternative? Let’s talk about hydrogels in terms of those that are applicable:
            <ul>
              <li>
                <em>Biodegradability.</em> This one is pretty straightforward. Hydrogels break down
                naturally and wouldn’t be adding to landfills the way plastics to.
              </li>
              <li>
                <em>Absorbability.</em> This is arguably the most important aspect of a hydrogel,
                since it’s literal definition revolves around being super absorbent. Hydrogels are
                sometimes described as “smart”, meaning that they can quickly respond to their
                environment and react by increasing or decreasing hydration levels. This decrease in
                water activity is essential as it slows down the growth rate of mold, yeast, and
                other bacteria. It can also decrease the softening of crispy items such as chips or
                biscuits. The takeaway here is that moisture control is very important in prolonging
                shelf life, and hydrogels just so happen to be pretty good at that.
              </li>
              <li>
                <em>Thermal properties.</em> As mentioned above, hydrogels are what we call “smart”,
                and this extends into its thermal properties as well. In addition to the ability to
                react to stimuli like pH levels, hydrogels can also react to increases/decreases in
                temperature and respond accordingly.
              </li>
            </ul>
            All of these properties come together to help hydrogels achieve what is called “active
            food packaging” - packaging that interacts directly with the contained food product to
            reduce microbial growth and extend shelf life.
          </Typography>
          <Typography className={classes.subsection}>
            So these hydrogels sound great, right? They’re good at keeping your food fresher for
            longer, help slow the growth of any bacteria, and they aren’t bad for the environment -
            so what could go wrong? Unfortunately, there is one pretty significant concern when it
            comes to these super polymers: disintegration. The very same hydratability that makes
            hydrogels so great is also its worst enemy; hydrogels can sometimes reach what is called
            an “equilibrium swelling level”, in which case it can begin to dissolve. This isn’t very
            common, but it’s kind of a big problem. You wouldn’t want to get your food home and find
            that its packaging has completely disintegrated. That probably wouldn’t make for a very
            good day.
          </Typography>
          <Typography className={classes.subsection}>
            This is where synthetic hydrogels would help us out - we can tweak them just enough to
            minimize the chance for disintegration while maximizing swelling capabilities, allowing
            for full optimization.
          </Typography>
        </div>
      </div>
    </div>
  )
}

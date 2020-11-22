import React from 'react'

import Typography from '@material-ui/core/Typography'

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
}))

export default function Conclusion() {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.title}>So, which alternative is better?</Typography>
      <Typography className={classes.section}>
        If we just look at each substance in its pure state, then the winner is clearly hydrogels.
        It's got thermal and mechanical properties, is biodegradable, FDA approved, and its <em>super</em> absorbent.
        But if we’re being realistic, we know that the science behind isn’t just comparing these
        things in their pure state. It’s pretty likely that whatever is selected, whether it be
        something we talked about today or not, will be some sort of hybrid; multiple elements will
        be combined into one to make the most optimal food packaging alternative.
      </Typography>
      <Typography className={classes.section}>
        We also shouldn’t look at it in the sense that one substance has to package everything. We
        could use the more water-absorbent options to package foods with a lot of moisture (like
        fruits and vegetables), and save the less absorbent ones for things like chips and crackers.
        Just because one option may have some disadvantages doesn’t mean that it’s good for nothing.
        It’s all about optimization and effective use of resources.
      </Typography>
    </>
  )
}

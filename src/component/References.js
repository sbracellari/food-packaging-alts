import React, { useState } from 'react'

import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  tooltip: {
    fontSize: 14,
  },
}))

export default function References() {
  const classes = useStyles()
  const [expanded, set_expanded] = useState(false)

  const handleExpandClick = () => {
    set_expanded(!expanded)
  }

  return (
    <>
      <Typography className={classes.title}>
        References
        <Tooltip
          placement='bottom'
          title={expanded ? 'Click to hide references' : 'Click to show references'}
          classes={{
            tooltip: classes.tooltip,
          }}
        >
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </IconButton>
        </Tooltip>
      </Typography>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <Typography className={classes.section}>
          <ul>
            <li>
              [1] Cazón, Patricia, and Manuel Vázquez. “Mechanical and Barrier Properties of
              Chitosan Combined with Other Components as Food Packaging Film.” Environmental
              Chemistry Letters, vol. 18, no. 2, 21 Oct. 2019, pp. 257–267.
            </li>
            <li>
              [2] Farris, Stefano, et al. “Development of Polyion-Complex Hydrogels as an
              Alternative Approach for the Production of Bio-Based Polymers for Food Packaging
              Applications: a Review.” Trends in Food Science & Technology, vol. 20, no. 8, 2009,
              pp. 316–332.
            </li>
            <li>
              [3] Kumar, Santosh, et al. “Chitosan Based Nanocomposite Films and Coatings: Emerging
              Antimicrobial Food Packaging Alternatives.” Trends in Food Science & Technology, vol.
              97, Mar. 2020, pp. 196–209.
            </li>
            <li>
              [4] Batista, Rejane Andrade, et al. “Hydrogel as an Alternative Structure for Food
              Packaging Systems.” Carbohydrate Polymers, vol. 205, Feb. 2019, pp. 106–116.
            </li>
            <li>
              [5] Mostafavi, Fatemeh Sadat, and Davood Zaeim. “Agar-Based Edible Films for Food
              Packaging Applications - A Review.” International Journal of Biological
              Macromolecules, vol. 159, 15 Sept. 2020, pp. 1165–1176.
            </li>
          </ul>
        </Typography>
      </Collapse>
    </>
  )
}

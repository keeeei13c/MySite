import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    global: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    globalTitle: {
      fontWeight: 700,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    globalText: {
      textAlign: 'center',
      '& > p': {
        color: theme.palette.text.secondary,
        margin: 0,
      },
    },
  })
)

interface Props {
  title: string
  subtitle: string
  titleComponent?: React.ElementType
}

const GlobalContent: React.FunctionComponent<Props> = ({ title, subtitle, titleComponent = 'h2' }) => {
  const classes = useStyles()

  return (
    <section>
      <Container maxWidth="md" className={classes.global}>
        <div className={classes.globalText}>
          <Typography component={titleComponent} className={classes.globalTitle}>
            {title}
          </Typography>
          <p>{subtitle}</p>
        </div>
      </Container>
    </section>
  )
}

export default GlobalContent

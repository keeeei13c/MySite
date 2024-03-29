import React from 'react'
import Link from 'next/link'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { AppBar, Toolbar } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import MuiLink from '@material-ui/core/Link'
import Nav from './nav'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navbar: {
      boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(0, 0, 0, 0.2)',
      background: '#454545',
      color: '#eaeaea',
      '& a': {
        color: '#eaeaea',
      },
    },
    container: {},
    toolbar: {
      padding: '0',
      display: 'grid',
      gridTemplate: '"title . nav" auto / auto 1fr auto',
    },
    title: {
      gridArea: 'title',
      '& > a': {
        fontSize: '2em',
        fontWeight: 700,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
    accent: {
      color: theme.palette.primary.main,
    },
    small: {
      fontSize: '0.4em',
    },
  })
)

interface Props {
  siteTitle: string
  siteDescription: string
  twitterUrl: string
  githubUrl: string
  siteTitleComponent: React.ElementType
}

const Header: React.FunctionComponent<Props> = ({ twitterUrl, githubUrl, siteTitleComponent }) => {
  const classes = useStyles()

  return (
    <AppBar position="sticky" className={classes.navbar}>
      <Container maxWidth="md" className={classes.container}>
        <Toolbar className={classes.toolbar}>
          <Link href="/" passHref>
            <MuiLink>大学生エンジニアの活動記録</MuiLink>
          </Link>
          <Nav twitterUrl={twitterUrl} githubUrl={githubUrl} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header

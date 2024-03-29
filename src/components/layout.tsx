import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Head from 'next/head'
import Header from './header'
import { motion } from 'framer-motion'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      '& section': {
        padding: `${theme.spacing(10)}px 0`,
        '&:nth-child(even)': {
          background: theme.palette.background.paper,
        },
      },
    },
  })
)

interface Props {
  title?: string
  description?: string
  twitterUrl?: string
  githubUrl?: string
  siteTitleComponent?: React.ElementType
}

const Layout: React.FunctionComponent<Props> = ({
  title = 'fukudakei',
  description = '',
  twitterUrl = 'https://twitter.com/elle_0000000',
  githubUrl = 'https://github.com/keeeei13c',
  siteTitleComponent = 'h1',
  children,
}) => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="wrapper">
        <Header
          siteTitle={title}
          siteDescription={description}
          twitterUrl={twitterUrl}
          githubUrl={githubUrl}
          siteTitleComponent={siteTitleComponent}
        />
        <main className={classes.main}>
          <motion.div
            initial={{
              x: -30,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
            }}
            exit={{
              x: 100,
              opacity: 0,
              transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
            }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </>
  )
}

export default Layout

import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import NextLink from 'next/link'
import dateformat from 'dateformat'

import Layout from '../components/layout'
import GlobalContent from './global'
import SocialMeta from '../components/social-meta'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Container, Typography, Chip } from '@material-ui/core'
import MuiLink from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    postList: {
      '& > .container': {
        display: 'grid',
        gridTemplateColumns: 'repeat',
        gridGap: theme.spacing(4),
        [theme.breakpoints.down('xs')]: {
          gridTemplateColumns: '1fr',
        },
      },
      '& article': {
        position: 'relative',
        '& > .cat': {
          position: 'absolute',
          top: theme.spacing(2),
          left: theme.spacing(4),
        },
      },
      '& .post': {
        display: 'block',
        paddingTop: theme.palette.text.primary,
        height: '100%',
        '&:nth-child(even)': {
          background: theme.palette.background.paper,
        },
        '&:hover': {
          textDecoration: 'none',
        },
      },
      '& .wrapper': {
        background: theme.palette.background.paper,
        padding: `0 ${theme.spacing(2)}px 0 ${theme.spacing(2)}px`,
        margin: `-${theme.spacing(2)}px 0 ${theme.spacing(2)}px`,
        borderRadius: theme.spacing(1),
        boxShadow: '0 1px 4px 1px rgba(0,0,0,0.1)',
        height: '100%',
      },
      '& .image': {
        display: 'inline-block',
        maxWidth: '100%',
        margin: `-${theme.spacing(2)}px 0 ${theme.spacing(2)}px`,
        borderRadius: theme.spacing(1),
        overflow: 'hidden',
      },
      '& .title': {
        marginBottom: theme.spacing(0.5),
      },
      '& .date': {
        color: theme.palette.text.secondary,
      },
    },
  })
)
interface Meta {
  title: string
  date: string
  category: string
  url: string
  image: string
}
interface MDXElement extends __WebpackModuleApi.RequireContext {
  meta: Meta
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function importAll(r: any): Array<MDXElement> {
  return r.keys().map(r)
}

const previewItems: Array<MDXElement> = importAll(require.context('./blog', false, /\.mdx$/))

function dateSortDesc(a: MDXElement, b: MDXElement) {
  const date1 = new Date(a.meta.date)
  const date2 = new Date(b.meta.date)
  if (date1 > date2) return -1
  if (date1 < date2) return 1
  return 0
}

const items: Array<ReactElement> = previewItems.sort(dateSortDesc).map(({ meta }: { meta: Meta }) => {
  return (
    <article key={meta.url}>
      <NextLink href={meta.url} passHref>
        {/* <MuiLink className="post" > */}
        <div className="wrapper">
          <img src={meta.image} alt={meta.title} className="image" />
          <div className="text">
            <Typography component="h3" variant="h2" className="title">
              {meta.title}
            </Typography>
            <div className="date">{dateformat(meta.date, 'yyyy.mm.dd')}</div>
          </div>
        </div>
        {/* </MuiLink> */}
      </NextLink>
      <Chip className="cat" size="small" label={meta.category} color="primary" />
    </article>
  )
})

const BlogIndex: NextPage = () => {
  const classes = useStyles()

  return (
    <>
      <Layout title="blog">
        <SocialMeta title="Blog" url="https://keeeei13c/blog" />
        <GlobalContent title="Blog" subtitle="ブログ" />
        <section className={classes.postList}>
          <Container maxWidth="md" className="container">
            {items}
          </Container>
        </section>
      </Layout>
    </>
  )
}
export default BlogIndex

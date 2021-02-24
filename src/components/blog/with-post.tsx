import React, { ReactElement } from 'react';
import NextLink from 'next/link';
import { MDXProvider } from '@mdx-js/react';
import dataformat from 'dateformat';


import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';

import components from './blog-components';
import Layout from '../layout';
import SocialMeta from '../social-meta';
import BlogLayout from './blog-layout';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    singlePost: {
      '& .blog-image': {
        display: 'inline-block',
        maxWidth: '100%',
        margin: `-${theme.spacing(15)}px 0 ${theme.spacing(4)}px`,
        borderRadius: theme.spacing(1),
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
        overflow: 'hidden',
      },
      '& main': {},
    },
  }),
);

interface Meta {
  title: string;
  image: string;
  url?: string;
  category: string;
  tag: string[];
  date: string;
}

const withPost = (meta: Meta) => ({ children }: { children: ReactElement }) => {
  const classes = useStyles();
  const date = dataformat(meta.date ? new Date(meta.date) : new Date(), 'yyyy.mm.dd HH:MM');

  return (
    <Layout title={`Blog - ${meta.title}`} siteTitleComponent="h3">
      <SocialMeta
        title={`${meta.title}`}
        // url={`${meta.url}`}
        image={`${meta.image}`}
      />
      <BlogLayout
        title={meta.title}
        date={date}
        titleComponent="h1"
        category={meta.category}
        tag={meta.tag}
      />
      <section className={classes.singlePost}>
        <Container maxWidth="sm">
          <img src={meta.image} alt="main" className="blog-image" />
          <MDXProvider components={components}>
            <main className="markdown-body">{children}</main>
          </MDXProvider>
        </Container>
      </section>
      <section>
        <Container maxWidth="sm">
          <NextLink href="/blog" passHref>
            <Button variant="contained" color="primary">
              ← 一覧へ戻る
            </Button>
          </NextLink>
        </Container>
      </section>
    </Layout>
  );
};

export default withPost;

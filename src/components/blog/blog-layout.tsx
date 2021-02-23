import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Chip } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    blog: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    blogTitle: {
      fontWeight: 700,
      letterSpacing: theme.spacing(0.5),
      marginBottom: theme.spacing(1),
    },
    blogText: {
      textAlign: 'center',
      '& > .date': {
        color: theme.palette.text.secondary,
        margin: `0 0 ${theme.spacing(1)}px 0`,
      },
      '& > .chip:not(:last-child)': {
        marginRight: theme.spacing(0.5),
      },
    },
  }),
);

interface Props {
  title: string;
  date: string;
  titleComponent?: React.ElementType;
  category: string;
  tag: Array<string>;
}

const BlogLayout: React.FunctionComponent<Props> = ({
  title,
  date,
  titleComponent = 'h2',
  category,
  tag,
}) => {
  const classes = useStyles();

  return (
    <section>
      <Container maxWidth="md" className={classes.blog}>
        <div className={classes.blogTitle}>
          <Typography component={titleComponent} variant="h1" className={classes.blogTitle}>
            {title}
          </Typography>
          <p className="date">{date}</p>
          <Chip size="small" label={category} color="primary" className={clsx('chip', 'cat')} />
          {tag &&
            tag.length &&
            tag.map(t => (
              <Chip
                key={t}
                variant="outlined"
                size="small"
                label={`#${t}`}
                color="primary"
                className="chip"
              />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogLayout;

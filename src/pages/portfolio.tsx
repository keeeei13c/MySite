import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Chip, IconButton } from '@material-ui/core'
import { Link as LinkIcon, GitHub as GitHubIcon } from '@material-ui/icons'
import Layout from '../components/layout'
import PortfolioFooter from '../components/portfolio-footer'
import GlobalContent from './global'



interface Work {
    title: string,
    date: string,
    src: string,
    link?: string,
    github?: string,
    skills: Array<string>,
    body: ReactElement,
}

const WorkItems: Array<Work> = [
  {
    title: 'Portfolio サイト',
    date: '2021.02 - Now',
    src: 'static/images/home.png',
    github: "https://github.com/keeeei13c/portfolio",
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'Material-UI',
      'Vercel',
    ],
        
    body: (
      <p>
        このポートフォリオサイトです。
        <br />
                今まではHTML/CSSをつかってのWebサイト制作を行っていましたが、モダンな技術を使用してみたくて作りました。
        <br />
                以下のようなことを行っています。
        <br />
                ・React/Next.js/TypeScriptで静的サイト
        <br />
                ・UIライブラリにMaterial UI
        <br />
      </p>
    ),
  },
];


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
      letterSpacing: theme.spacing(0.5),
      marginBottom: theme.spacing(1),
    },
    globalText: {
      textAlign: 'center',
      '& > p': {
        color: theme.palette.text.secondary,
        margin: 0,
      },
    },
    workItem: {
      '& > .container': {
        display: 'flex',
        flexDirection: 'row',
        '& > .sectionHeader': {
          flex: 1,
          textAlign: 'center',
          padding: `0 ${theme.spacing(2.5)}px 0 0`,
        },
        '& > .sectionBody': {
          flex: 1,
          padding: `0 0 0 ${theme.spacing(2.5)}px`,
        },
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          '& > .sectionHeader, & > .sectionBody': {
            padding: 0,
          },
        },
      },
      '&:nth-child(odd) > .container': {
        flexDirection: 'row-reverse',
        '& > .sectionHeader': {
          padding: `0 0 0 ${theme.spacing(2.5)}px`,
        },
        '& > .sectionBody': {
          padding: `0 ${theme.spacing(2.5)}px 0 0`,
        },
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          '& > .sectionHeader, & > .sectionBody': {
            padding: 0,
          },
        },
      },
      '& .image': {
        maxWidth: '100%',
        borderRadius: theme.spacing(2),
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
      },
      '& .link-icons': {
        margin: `${theme.spacing(1)}px 0`,
      },
      '& .title': {
        letterSpacing: theme.spacing(0.5),
        fontWeight: 700,
      },
      '& .date': {
        color: theme.palette.text.secondary,
      },
      '& .skills > *': {
        margin: theme.spacing(0.5),
      },
    },
  }),
);

const WorkIndex: NextPage = () => {
    const classes = useStyles();

    const items = WorkItems.map(WorkItem => {
        return (
            <section className={classes.workItem}>
                <Container maxWidth='md' className='container'>
                    <div className="sectionHeader">
                        <img src={WorkItem.src} alt={WorkItem.title} className="image" />
                        <div style={{ textAlign: 'center' }} className="link-icons">
                            <IconButton
                                color="inherit"
                                href={WorkItem.link ?? ''}
                                disabled={!WorkItem.link}
                                target="_blank"
                                rel="noopener"
                                aria-label="Link"
                            >
                                <LinkIcon />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                href={WorkItem.github ?? ''}
                                disabled={!WorkItem.github}
                                target="_blank"
                                rel="noopener"
                                aria-label="Link"
                            >
                                <GitHubIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className="sectionBody">
                        <Typography component="h2" className="title">
                            {WorkItem.body}
                        </Typography>
                        <p className="date">{WorkItem.date}</p>
                        <div className="skills">
                            {WorkItem.skills.map(skill => {
                                return (
                                    <Chip key={skill} size="small" label={skill} color="primary" variant="outlined" />
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </section>
        )
    })
  return (
      <>
        <Layout title="portfolio">
            <GlobalContent title="portfolio" subtitle="制作物" />
            {items}
      </Layout>
      <PortfolioFooter />
      </>
  )
};

export default WorkIndex;

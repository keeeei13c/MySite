import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    aboutTitle: {
      fontWeight: 700,
      letterSpacing: theme.spacing(0.5),
      fontSize: 30,
      textAlign: 'center',
      marginBottom: '100px',
    },
    aboutSite: {
      height: '700px',
      backgroundColor: '#dcdcdc',
    },
    aboutText: {
      textAlign: 'center',
      fontSize: '16px',
    },
  })
)

const AboutSite: React.FunctionComponent = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.aboutSite}>
        <section>
          <Container>
            <Typography component="h2" className={classes.aboutTitle}>
              ABOUT THIS SITE
            </Typography>
            <div className={classes.aboutText}>
              <p>ご覧いただきありがとうございます。</p>
              <p>React、Nextのtutorialを一通りやったあと勉強の延長で作りました。</p>
              <p>サイトの目的としては制作物とGitHubを一箇所にまとめるためにあります。</p>
              <p>使用技術はReact.js、Next.js、TypeScript、Material UIです。</p>
              <p>TypeScriptは初めて使ったのですが、型宣言に慣れるまで本当に何度も叱られました。</p>
              <p>このサイト制作を終えて少し成長を感じられました。</p>
              <p>製作期間：15日</p>
            </div>
          </Container>
        </section>
      </div>
    </>
  )
}

export default AboutSite

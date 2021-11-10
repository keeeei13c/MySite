import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    copyRightText: {
      fontSize: '12px',
      display: 'block',
      textAlign: 'center',
      color: '#fff',
    },
    copyRight: {
      padding: '10px 0',
      backgroundColor: '#595959',
    },
  })
)

const CopyRight: React.FunctionComponent = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.copyRight}>
        <Container>
          <small className={classes.copyRightText}>©2021/Fukuda Kei/All Right Reserved</small>
        </Container>
      </div>
    </>
  )
}

export default CopyRight

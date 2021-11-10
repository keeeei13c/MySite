import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    careerText: {
      textAlign: 'center',
      letterSpacing: theme.spacing(0.5),
    },
  })
)
const Career: React.FunctionComponent = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.careerText}>
        <Divider />
        <p>福田 圭</p>
        <Divider />
        <p>23卒文系大学生</p>
        <Divider />
        <p>趣味：美術館巡り</p>
        <Divider />
        <p>使用技術/使用ツール</p>
        <Divider />
      </div>
    </>
  )
}

export default Career

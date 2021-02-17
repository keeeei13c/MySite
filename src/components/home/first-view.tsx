import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) => createStyles({
    first: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    firstTitle: {
        fontWeight: 700,
        letterSpacing: theme.spacing(0.5),
        fontSize: 60,
        marginTop: '180px'
    },
    firstView: {
        height: '700px',
    },
}),
);

const FirstView: React.FunctionComponent = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.firstView}>
            <section>
                <Container maxWidth="md" className={classes.first} >
                    <Typography component="h2" className={classes.firstTitle}>FUKUDA KEI</Typography>
                             <h3>PORTFOLIO</h3>
                </Container>
            </section>
            </div>
        </>
    )

}

export default FirstView;
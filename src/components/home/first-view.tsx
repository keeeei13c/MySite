import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) => createStyles({
    first: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    firstImage: {
        height: '100%',
        marginBottom: theme.spacing(5),
    },
    firstTitle: {
        fontWeight: 700,
        letterSpacing: theme.spacing(0.5),
        fontSize: 25,
    },
    // firstText: {
    //     textAlign: 'center',
    //     '& > p ': {
    //         color: theme.palette.text.secondary,
    //     },
    // },
}),
);

const FirstView: React.FunctionComponent = () => {
    const classes = useStyles();

    return (
        <>
            <section>
                <Container maxWidth="md" className={classes.first} >
                    <img src="" alt="" className={classes.firstImage} />
                    <Typography component="h2" className={classes.firstTitle}>
                            welcome to my page 
                    </Typography>
                </Container>
            </section>
        </>
    )

}

export default FirstView;
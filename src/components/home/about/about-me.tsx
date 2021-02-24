import React, { ReactElement } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// import Typography from '@material-ui/core/Typography'
import Skills from './skills'
import Career from './career'
import { Typography } from '@material-ui/core'


const useStyles = makeStyles((theme: Theme) => createStyles({
    aboutMe: {
     height: '800px',
     backgroundColor: '#fff',
    },
    aboutTitle: {
        fontWeight: 700,
        letterSpacing: theme.spacing(0.5),
        fontSize: 30,
        textAlign: 'center',
        marginBottom: '100px',
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#fff'
    },
    image: {
        borderRadius: '999px',
        maxWidth: '100%',
        maxHeight: '100%',
        margin: '0 auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
        
    },
    imageWrapper: {
        // backgroundColor: '#000',
        width: '300px',
        height: '300px',
        position: 'relative',
    },
    careerWrapper: {

    }

}),
);

const AboutMe: React.FunctionComponent = () => {

    const classes = useStyles();
    
    return (
        <div className={classes.aboutMe}>
            <section >
                <Container className='container'>
                    <Typography component="h2" className={classes.aboutTitle}>
                        ABOUT ME
                    </Typography>
                        <div className={classes.wrapper}>
                            <div className={classes.imageWrapper}>
                            <img src="static/images/about-me.png"
                                className={classes.image} />
                        </div>
                        <div className={classes.careerWrapper}>
                            <Career />
                            <Skills />
                        </div>
                       </div>
                </Container>
            </section>
        </div>
    )
}

export default AboutMe;
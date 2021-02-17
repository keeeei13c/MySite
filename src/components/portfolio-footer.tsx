import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        footer: {
            padding: '10px 0',
            backgroundColor: '#595959',
        },
        footerText: {
            fontSize: '10px',
            textAlign: 'center',
            color: '#fff',
        },
    }))
    
const PortfolioFooter: React.FunctionComponent = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.footer}>
                <Container>
                    <p className={classes.footerText}>developing now...</p>
                </Container>
            </div>
        </>
        
    );
}

export default PortfolioFooter; 
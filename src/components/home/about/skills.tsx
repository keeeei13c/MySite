import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Chip } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

interface AboutMeSkill {
    skills1: Array<string>,
    // skills2: Array<string>,
    skills3: Array<string>,
}

const AboutMeSkills: Array<AboutMeSkill> = [
    {
        skills1: [
            'HTML',
            'CSS',
            'SCSS',
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
        ],
        // skills2: [ 
        //     'Ruby',
        //     'Ruby on Rails',
        //     'MySQL',
        //     'AWS',
        // ],
        skills3: [
            'Visual Studio Code',
            'Slack',
            'Vercel',
            'Material UI'
        ],
    },
];

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        skills: {
            margin: theme.spacing(2),
            ' & > *': {
               margin: `${theme.spacing(0.5)}px`,
           }
        }
    })
);

const Skills: React.FunctionComponent = () => {
    const classes = useStyles();

    const skills1 = AboutMeSkills.map(AboutMeSkill => {
        return (
            <div className={classes.skills}>
                {AboutMeSkill.skills1.map(skill => {
                    return (
                        <Chip
                            key={skill}
                            label={skill}
                            color="primary"
                            variant="outlined"
                        />
                    );
                    
                })}
            </div>
        )
    }) 
    //skill2のスキルを取得したら解禁
    // const skills2 = AboutMeSkills.map(AboutMeSkill => {
    //     return (
    //         <div className={classes.skills}>
    //             {AboutMeSkill.skills2.map(skill => {
    //                 return (
    //                     <Chip
    //                         key={skill}
    //                         label={skill}
    //                         color="primary"
    //                         variant="outlined"
    //                     />
    //                 );
    //             })}
    //         </div>
    //     )
    // }) 
    const skills3 = AboutMeSkills.map(AboutMeSkill => {
        return (
            <div className={classes.skills}>
                {AboutMeSkill.skills3.map(skill => {
                    return (
                        <Chip
                            key={skill}
                            label={skill}
                            color="primary"
                            variant="outlined"
                        />
                    );
                    
                })}
            </div>
        )
    }) 
    return (
        <>
                    {skills1} 
                    <Divider />
                    {/* {skills2} 
                    <Divider /> */}
                    {skills3}
                    <Divider />
            </>

    )
}

export default Skills;
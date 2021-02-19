import React, { Component } from 'react'
import { NextPage } from 'next'
import Layout from '../components/layout'
// import GlobalContent from './global'

import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => {
    createStyles({

    })
})


const BlogIndex: NextPage = () => {
    const classes = useStyles();

    return (
        <>
            <Layout>
                <h1>Blog</h1>
            </Layout>
        </>
    )
}
export default BlogIndex
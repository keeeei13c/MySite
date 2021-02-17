import React, { Component } from 'react'
import { NextPage } from 'next'
import Layout from '../components/layout'
import GlobalContent from './global'

const Blog: NextPage = () => {
    return (
        <>
            <Layout>
                <GlobalContent title="blog" subtitle="ブログ" />
                <Component>
                    
                </Component>
            </Layout>
        </>
        

    )
}

export default Blog;
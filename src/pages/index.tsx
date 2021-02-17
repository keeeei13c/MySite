import React from 'react'
import { NextPage } from 'next'
import FirstView from '../components/home/first-view'
import AboutSite from '../components/home/about-site'
import AboutMe from '../components/home/about-me/about-me'
import Copyright from '../components/home/copy-right'
import Layout from '../components/layout'

const Index: NextPage = () => {
  return (
    <Layout title="fukudakei">
      <FirstView />
      <AboutSite />
      <AboutMe />
      <Copyright />
    </Layout>
  );
};

export default Index;
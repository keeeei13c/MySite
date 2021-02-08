import React from 'react'
import { NextPage } from 'next'
import FirstView from '../components/home/first-view'
import Layout from '../components/layout'

const Index: NextPage = () => {
  return (
    <Layout title="fukudakei(layout)">
      <FirstView />
    </Layout>
  );
};

export default Index;
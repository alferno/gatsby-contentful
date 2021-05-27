import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const Index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello!</h1>
      <h2>I'm Alferno, from Jaipur, Rajasthan.</h2>
      <p>
        Have a great time visiting <p style={{ fontStyle: 'bold' }}>Gatsby</p>{' '}
        powered website.
      </p>
    </Layout>
  )
}

export default Index

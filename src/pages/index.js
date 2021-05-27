import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const Index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello!</h1>
      <h2>I'm XXX, xyz.</h2>
      <p>
        Check out my <Link to="/blog">Blog</Link>
      </p>
      <p>
        need a developer? <Link to="/contact">Contact me</Link>{' '}
      </p>
      <p>
        <Link to="/about">About Us</Link>
      </p>
    </Layout>
  )
}

export default Index

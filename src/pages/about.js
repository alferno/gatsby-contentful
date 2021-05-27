import { Link } from 'gatsby'
import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout'

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About us</h1>
      <p>We are trying to learn gatsby.</p>
      <p>
        <Link to="/contact">Contact Us</Link>
      </p>
    </Layout>
  )
}

export default About

import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact details</h1>
      <p>Email: aniandp@gmail.com</p>
      <p>
        Twitter :{' '}
        <Link to="https://twitter.com/sociopath_anl">sociopath_anl</Link>
      </p>
    </Layout>
  )
}

export default Contact

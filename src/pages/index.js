import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout/layout'
import  Seo  from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'



const HomePage =()=>{

  return (
    <Layout pageTitle="Home" >
      
      <StaticImage 
      alt="Ada Hegerberg kissing a football"
      src="../images/ada.png" 
      width={200}
      height={200}
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home page" />

export default HomePage
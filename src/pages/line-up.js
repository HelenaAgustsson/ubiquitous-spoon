import * as React from 'react'
import {graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Row from '../components/row/row'
import Player from '../components/player/player'
import Seo from '../components/seo'
import {GatsbyImage, getImage } from 'gatsby-plugin-image'


const About = ({data}) => {
  const forwards = data.allMdx.nodes.filter(node => node.frontmatter.position==="forward")
  const strikers = data.allMdx.nodes.filter(node => node.frontmatter.position==="striker")
  const midfielders = data.allMdx.nodes.filter(node => node.frontmatter.position==="midfielder")
  const defenders = data.allMdx.nodes.filter(node => node.frontmatter.position==="defender")
  const keepers = data.allMdx.nodes.filter(node => node.frontmatter.position==="keeper")
console.log(keepers)
  return (
    <Layout pageTitle="Line up">
      <Row title="Striker" players={strikers}>
      {
        strikers.map((node) => (
          <Player 
            key={node.id} 
            name={node.frontmatter.title} 
            imageSRC={node.frontmatter.hero_image} 
            imageAlt={node.frontmatter.hero_image_alt} >
          </Player>
        ))
      }
      </Row>
      <Row title="Forwards">
      {
        forwards.map((node) => (
          <Player 
            key={node.id} 
            name={node.frontmatter.title} 
            imageSRC={node.frontmatter.hero_image} 
            imageAlt={node.frontmatter.hero_image_alt} >
          </Player>
        ))
      }
      </Row>
      <Row title="Midfielders">
      {
        midfielders.map((node) => (
          <Player 
            key={node.id} 
            name={node.frontmatter.title} 
            imageSRC={node.frontmatter.hero_image} 
            imageAlt={node.frontmatter.hero_image_alt} >
          </Player>
        ))
      }
      </Row>
      <Row title="Defenders">
      {
        defenders.map((node) => (
          <Player 
            key={node.id} 
            name={node.frontmatter.title} 
            imageSRC={node.frontmatter.hero_image} 
            imageAlt={node.frontmatter.hero_image_alt} >
          </Player>
        ))
      }
      </Row>
      <Row title="Keepers">
      {
        keepers.map((node) => (
          <Player 
            key={node.id} 
            name={node.frontmatter.title} 
            imageSRC={node.frontmatter.hero_image} 
            imageAlt={node.frontmatter.hero_image_alt} >
          </Player>
        ))
      }
      </Row>
    </Layout>
  )
}

export const query=graphql`
query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
        club
        position
        hero_image {
          childImageSharp {
            gatsbyImageData(height: 300, aspectRatio: 1.5, quality: 100)
          }
        }
        hero_image_alt
      }
      id
      excerpt(pruneLength: 20)
    }
  }
}
`

export const Head = () => <Seo title="Line up" />

export default About;
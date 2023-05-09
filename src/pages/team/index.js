import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Dream Team">
      <ul>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h4>
              <Link to={`${node.frontmatter.slug}`}>{node.frontmatter.title}</Link> 
            </h4>
            <p>Club: {node.frontmatter.club}</p>
            
          </article>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          club
        }
        id
        excerpt(pruneLength: 20)
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage
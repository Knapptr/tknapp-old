import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PostCard from "../components/PostCard"

const PostPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      {posts.map(post => {
        post = post.node
        return <PostCard post={post} />
      })}
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(filter: { frontmatter: { location: { eq: "posts" } } }) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            image {
              publicURL
              relativePath
              name
            }
          }
        }
      }
    }
  }
`
export default PostPage

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
    allMarkdownRemark {
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
              name
            }
          }
        }
      }
    }
  }
`
export default PostPage

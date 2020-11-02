import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PostCard from "../components/PostCard"

const PostPage = ({ data }) => {
  let posts = data.allMarkdownRemark.edges
  posts = posts.sort((a, b) => {
    let c = new Date(a.node.frontmatter.date)
    let d = new Date(b.node.frontmatter.date)
    return d - c
  })
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

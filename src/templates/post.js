import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import postStyle from "./post.module.scss"
const PostTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className={`${postStyle.fullPost}`}>
        <date className={postStyle.date}>{post.frontmatter.date}</date>
        <div className={`${postStyle.header} `}>
          <h1 className={postStyle.header}>{post.frontmatter.title}</h1>
        </div>
        <div className={postStyle.postContent}>
          <blockquote className={postStyle.description}>
            {post.frontmatter.description}
          </blockquote>
          <div
            className={"d-flex flex-dir-col flex-justify-center"}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
      <div className="d-flex flex-justify-center">
        <Link
          to={`/${post.frontmatter.location}`}
          className={postStyle.bottomLink}
        >
          Go Back
        </Link>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
        location
      }
    }
  }
`

export default PostTemplate

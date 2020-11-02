import React from "react"
import { Link } from "gatsby"
import postCardStyle from "./postCardStyle.module.scss"

const PostCard = ({ post }) => {
  console.log(post.frontmatter.image.publicURL)
  return (
    <div className={postCardStyle.borderBox}>
      <div className={postCardStyle.contentBox}>
        <div>
          <div className={postCardStyle.titleAndImageBox}>
            <div className="d-flex flex-dir-col">
              <time className={postCardStyle.date}>
                {post.frontmatter.date}
              </time>
              <Link to={post.fields.slug} className={postCardStyle.title}>
                {post.frontmatter.title}
              </Link>
              <div>
                <p className={postCardStyle.description}>
                  {post.frontmatter.description}
                </p>
              </div>
            </div>
            <img
              className={postCardStyle.image}
              src={post.frontmatter.image.publicURL}
              alt={post.frontmatter.image.name}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}
export default PostCard

// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const GetBlogItem = props => {
  const {content} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = content

  return (
    <Link to={`/blogs/${id}`} className="link">
      <div className="blogItemContainer">
        <img className="image1" src={imageUrl} alt={`item${id}`} />
        <div className="itemInfo">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="authorInfo">
            <img className="image2" src={avatarUrl} alt={`avatar${id}`} />
            <p className="authorName">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default GetBlogItem

// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }

    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData

    return (
      <div className="blogContainer">
        {isLoading ? (
          <Loader type="TailSpin" color="00BFFF" height={50} width={50} />
        ) : (
          <div className="blogInfo">
            <h2 className="blogTitle">{title}</h2>
            <div className="authorDetails">
              <img className="image3" src={avatarUrl} alt={author} />
              <p className="authorNameDetails">{author}</p>
            </div>
            <img className="image4" src={imageUrl} alt={title} />
            <p className="blogContent">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails

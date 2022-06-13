const totalLikes = (blogs) => {
  const reducer = (sum, val) => {
    return sum + val.likes
  }

  return blogs.length === 
    0 ? 0 
    : blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const maxLikes = Math.max(...blogs.map(blog => blog.likes), -1)
  
  return blogs.length === 0 
    ? {} 
    : (({author, likes, title}) => ({ author, likes, title }))(blogs.find(blog => blog.likes === maxLikes))
}

module.exports = {
  totalLikes,
  favoriteBlog
}
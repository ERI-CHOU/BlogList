const totalLikes = (blogs) => {
  const reducer = (sum, val) => {
    return sum + val.likes
  }

  return blogs.length === 0 ? 0 : blogs.reduce(reducer, 0)
}

module.exports = {
  totalLikes
}
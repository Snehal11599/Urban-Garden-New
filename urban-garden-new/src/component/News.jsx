import React from 'react'
import Banner from './Banner'
import NewsCard from './NewsCard'
import NewsItem from './NewsItem'

const News = () => {
  return (
    <div>

      <Banner title="News" />
      <NewsCard />
      <br></br>
      <NewsItem />
    </div>
  )
}

export default News
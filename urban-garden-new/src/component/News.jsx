import React from 'react'
import Banner from './Banner'
import LatestPost from './LatestPost'
import NewsCard from './NewsCard'
import NewsItem from './NewsItem'
import Tags from './Tags'

const News = () => {
  return (
    <div>

      <Banner title="News" />
      <NewsCard />
      <br></br>
      <NewsItem />
      <LatestPost/>
      <Tags/>
    </div>
  )
}

export default News
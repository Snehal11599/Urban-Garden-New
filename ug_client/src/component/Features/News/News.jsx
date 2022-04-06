import React from 'react'
import Banner from '../../CommonComponent/Banner'
import LatestPost from '../../CommonComponent/LatestPost'
import NewsCard from './NewsCard'
import NewsItem from '../../CommonComponent/NewsItem'
import Tags from '../../CommonComponent/Tags'

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
import axios from 'axios';
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";


const NewsBoard = ({category}) => {

  const[articles , setArticles] = useState([]);

  useEffect(() => {
    const VITE_API_KEY="45fa04d730cd49ffaa9a44af80ba162f";


    
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${VITE_API_KEY}`

    axios.get(url)
    .then((res) => setArticles(res.data.articles))
    .catch((error) => console.eror("No news found",error))

  },[category]);

  console.log(articles)





  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>

      {articles.map((news,index) => {
        return <NewsItem key={index} title = {news.title} description = {news.description} src = {news.urlToImage} url = {news.url}/>
      } )}
    </div>
  )
}

export default NewsBoard
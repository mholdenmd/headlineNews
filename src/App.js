
import './App.css';
import {useState}  from 'react';


function App() {

  const [topHeadlines, setTopHeadlines] = useState([])

  
  const getNews = () => {
    console.log("clicked!")

    fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=bf9482c6b383478781980d699f27e9de")
    .then(response => {
      console.log("*******")
      console.log(response)
      console.log("*******")
      return response.json()
    })
    .then(response => {
      console.log("!!!!!!!!")
      console.log(response)
      console.log("!!!!!!!!")
      setTopHeadlines(response.articles)


    })
    .catch(err => {
      console.error(err)
    })
  
  }
  


  return (
    <div className="App">
      <button onClick = {getNews} >Get some news </button>
      {topHeadlines.map((newsArticle,idx) =>{ //this allows me to 
        return <div class="card">
        
        <div class="card-body">
          <h4 class="card-title">{newsArticle.title}</h4>
          <p class="card-text">
            {newsArticle.description}
          </p>
          <a href={newsArticle.url} class="btn btn-primary btn-lg">Go to news articles</a>
        </div>
      </div>
      
        
      })}
      
    </div>
  );

}
export default App;



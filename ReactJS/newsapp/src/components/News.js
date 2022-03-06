import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f56956ec980d43248a36cf3a26ed4f69";
    let data = await fetch(url);
    let parsedData = await data.json;
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-4">
        <h2>Frequent Fast News</h2>
        <div className="row ">
          <div className="col md-4">
            <NewsItem title={"mytitle"} description={"mydesc"} />
          </div>
          {/* {this.state.articles.map((element) => {
            return (
              <div className="col md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })} */}
        </div>
      </div>
    );
  }
}

export default News;

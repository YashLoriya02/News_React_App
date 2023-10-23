import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps = {
        country : "in",
        pageSize : 8,
        category : "general",
    }
    
    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading : false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=d03e5803eea94334a4f1ffc485d4da6e&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData);
        this.setState({ articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading : false,
         })
    }

    prevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=d03e5803eea94334a4f1ffc485d4da6e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading : false,
        })
    }

    nextClick = async () => {

        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        }

        else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=d03e5803eea94334a4f1ffc485d4da6e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({
                loading : true
            })
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading : false
            })
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center' id='title_change' >Toofan Express - Top HeadLines </h1>
                {this.state.loading && <Spinner/>}
                <div className="row" >
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 92) : ""} imageUrl={element.urlToImage} newsUrl={element.url} mode2 = {this.state.mode2} publishedAt = {element.publishedAt} author = {element.author} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type='button' onClick={this.prevClick} className="btn btn-primary">&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize )} type='button' onClick={this.nextClick} className="btn btn-primary">Next &rarr;</button>
                </div>
            </div>
        )
    }
}

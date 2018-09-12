import React, { Component } from 'react'
import { Link } from "react-router-dom"
 //import "./Article.css"

export default class RecipeList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="recipes">
                    {
                        this.props.recipes.map(recipe =>
                            <div key={recipe.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title" className="recipe-name">
                                        {recipe.title}
                                    </h5>
                                    <div className="card-body">
                                    <h5 className="card-title" className="recipe-cookTime">
                                        {recipe.cookTime}
                                    </h5>
                                    <div className="card-body">
                                    <h5 className="card-title" className="recipe-name">
                                        {recipe.title}
                                    </h5>

                                    <section className="card-title" className="article-Description">
                                        {article.Description}
                                    </section>
                                    <h6>
                                    <a href={`${article.url}`}>Visit the Link</a>

                                    
                                        {/* <Link className="nav-link" to={`${article.url}`}>Details</Link> */}
                                    </h6>
                                    <h6>
                                    
                                        <button type="button" className="btn btn-primary"
                                            onClick={() => this.props.deleteArticle(article.id, "articles")}>Delete</button>
                                    

                                    <button type="button" className="btn btn-primary"
                                            onClick={() => this.props.history.push(`/articles/Edit/${article.id}`)}>Edit</button>
                            {/* //         <a href="#"
                            // onClick={() =>  this.props.history.push(`/articles/Edit/${article.id}`)}
                        
                            //     className="card-link">Edit</a> */}

                                    </h6> 
                                </div>
                            </div>
                        )
                    }
                </section>
                <p></p>
                <div className="articleButton">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            this.props.history.push("/articles/new")
                        }
                        }>Create New Article
                </button>
                </div>
            </React.Fragment>
        )
    }
}
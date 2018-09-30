// import React, { Component } from "react"
// import StarRatingComponent from 'react-star-rating-component';
// import {Button} from 'reactstrap';
// import APIManager from "../../Module/APIManager";
// import AddReview from "../Review/AddReview"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



// import Review from "../Review/Review"
// export default class FavoriteDetail extends Component {

//     constructor() {
//         super();

//         this.state = {
//             rating: 0,
//             review:"",
            
//             userName: ""
//         };
//     }
    
//     onStarClick(nextValue, prevValue, name) {
//         this.setState({ rating: nextValue });
       
        
//         let id =  parseInt(this.props.match.params.favoriteId)
//         console.log(id)
//         let body = {rating: nextValue}  //sets body to updated rating
//         APIManager.postrating(id, body)
//         .then(() => {r=>r.json()
//             console.log("rating added")
//             // const localRating = APIManager.getOneRecipe('rating')
//         })        
        
//     }

   

    
    
    
//     render() {
//         // const { goBack } = this.props.navigation;
//         const { rating } = this.state;
//         const favorite = this.props.favorites.find(r => r.id === parseInt(this.props.match.params.favorite.recipeId)) || {}
//         console.log(favorite)
//         return (
//             <section className="recipe-detail">
//                 <div key={this.props.favorite.recipe.id} className="card">
//                     <div className="card-detail">
//                         <h4 className="card-title">
//                             <img top width="30%" src={this.props.favorite.recipe.image} className="recipe-image" />
//                             <br />
//                             {this.props.favorite.recipe.title}
//                         </h4>
//                         <ul className="ingredientList">

//                             {
//                                 this.props.favorite.recipe.ingredients.split("•").map(ingredient =>{
//                                     return  <li key={ingredient} className="recipe-ingredients">
//                                         {ingredient}
//                                     </li>

//                                 })
//                             }


//                         </ul>
//                         {/* <p className="card-direction">{recipe.direction}</p>
//                             <a href="#"
//                                 onClick={() => this.props.deleteRecipe(recipe.id)
//                                     .then(() => this.props.history.push("/recipes"))}
//                                 className="card-link">Delete</a>
//                         <div>
//                             <h5>Recipe Rating: {rating}</h5>
//                             <StarRatingComponent
//                                 name="rate1"
//                                 starCount={5}
//                                 value={this.state.rating}
//                                 onStarClick={this.onStarClick.bind(this)}
//                             />
//                         </div> */}
                           
                        

//                             {/* <AddReview addReview={this.props.addReview}/>
//                             <section className="reviews">
//                     {
//                         this.props.reviews.map(review =>
                            
//                             <div key={review.id} className="card">
                               
//                                     <p className="card-title" className="review-name">
//                                         {review.review}
//                                     </p>

//                                      <time>
//                                      <FontAwesomeIcon icon="stroopwafel" />Posted on:{review.time}</time>
//                                     <h6>By: {review.name}</h6>


                        
//                                 </div>
                        
//                          ) } */}
                
                    
                
                
                            

//                     </div>
//                 </div>
//                 </section>
//         )
//     }
// }




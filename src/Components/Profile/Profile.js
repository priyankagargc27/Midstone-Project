

import React, { Component } from 'react'
import { Link } from "react-router-dom"
//import "./Recipe.css"
 //import "./Article.css"

export default class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="profiles">
                    {
                        this.props.profiles.map(profile =>
                            <div key={profile.id} className="card">
                                <div className="card-body">
                                   
                                    <h6>
                                    <img top width="30%" src={profile.Image} className="profile--image" />
                                         <br/>  {profile.name}

                                    <section className="card-title" className="profile-statement">
                                        {profile.statement}
                                    </section>
                              
                                   
                                    
                                       
                                    </h6> 
                                </div>
                            </div>
                        )
                    }
                </section>
                <p></p>
                {/* <div className="profileButton">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            this.props.history.push("/profiles/new")
                        }
                        }>Create New Profile
                </button>
                </div> */}
            </React.Fragment>
        )
    }
}


import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Profile.css"
 //import "./Article.css"

export default class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="myprofile">
                <div className="profile-card">
                    {
                        this.props.profiles.map(profile =>
                            <div key={profile.id} className="card">
                                <div className="cardbody">
                                   
                                    <div className="flex-container">
                                    <div className="profile-pic">
                                    <img top width="200%" src={profile.Image} className="profile--image" />
                                    </div>
                                         <br/>
                                         <div className="profile-des">
                                          <h2 className="profile-name"> {profile.name}</h2>

                                    <section className="card-title" className="profile-statement">
                                        {profile.statement}
                                    </section>
                                        </div>
                              
                                   
                                    
                                       
                                    </div> 
                                </div>
                            </div>
                        )
                    }
                </div>
                {/* <p></p>
                <div className="profileButton">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            this.props.history.push("/profiles/new")
                        }
                        }>Create New Profile
                </button>
                </div> */}
                </div>
            </React.Fragment>
        )
    }
}
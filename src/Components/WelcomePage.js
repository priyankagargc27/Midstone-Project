import React from 'react'
import {Container, Button,  Title} from 'bloomer'
import { Link } from 'react-router-dom'
const Welcome = props => {
    //Screen user sees on page load.
        return (
            <div class="container">
            <Container>
               <Container className="HomeCopy" pad={{vertical: 'none'}} primary={true}>
            <Title isSize="1" className="home-headline">
              Welcome To Save Recipe Management!
            </Title>
                
            
            
                
                  
                
            

          </Container>
        </Container>
        </div>
      )
    }
    
    export default Welcome;
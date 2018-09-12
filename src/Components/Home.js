import React from 'react'
import {Container, Button,  Title} from 'bloomer'
import { Link } from 'react-router-dom'
import "./Home.css"


const Home = props => {
//Screen user sees on page load.
    return (
        <div class="container">
        <Container>
           <Container className="HomeCopy" pad={{vertical: 'none'}} primary={true}>
        <Title isSize="1" className="home-headline">
          Welcome To Save Recipe Management!
        </Title>
        <p tag="h2">To get started First Register or Sign-In</p>
        <Button>
            <Link to={{
                pathname: "/Login"}}>
                Sign-in
            </Link>
        </Button>
        <Button>
            <Link to={{
              pathname: "/Register"}}>
              Register
            </Link>
        </Button>
      </Container>
    </Container>
    </div>
  )
}

export default Home;
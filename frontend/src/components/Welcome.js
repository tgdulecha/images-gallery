import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap';
const Welcome = () => (
                            <Jumbotron>
  <h1>Image gallery</h1>
  <p>
    This is a simple application, developed by tinsu, that retrieves photos using unsplash api. In order to start enter any term in the input field.
  </p>
  <p>
    <Button variant="primary" href="https://scholar.google.it/citations?user=BQttuuoAAAAJ&hl=en" target="_blank">Learn more about author</Button>
  </p>
</Jumbotron>

)
export default Welcome;
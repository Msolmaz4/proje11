import React from 'react'

import { Navbar ,Container,Nav} from 'react-bootstrap'

const Header = ({para}) => {
  return (
    <div>
<>
 
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand className='navbar' href="#home">Toplam Para ${para} </Navbar.Brand>
    
    </Container>
  </Navbar>

</>

    </div>
  )
}

export default Header
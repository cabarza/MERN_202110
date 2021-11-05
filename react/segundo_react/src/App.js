import { Router } from '@reach/router';
import { Container } from 'reactstrap';
import ContactAdmin from './components/contacts/admin';
import Home from './components/home/home';

function App() {
  return (
    <>
    <Container>
      <Router>
          <Home path="/"/>
          <ContactAdmin path="/contacts/*"/>

      </Router>
    </Container>
    </>
  );
}

export default App;

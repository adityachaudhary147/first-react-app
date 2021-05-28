import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";

function App() {
  return (
    <Router >
      < Header />
       <main className="py-6" >
         <Container>
         <Route path='/' component={ HomeScreen} exact />
         <Route path='/product/:id' component={ ProductScreen } />
         </Container>
       </main>
      < Footer />  
   
    </Router>
  );
}

export default App;

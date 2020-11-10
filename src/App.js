import Main from './views/Main'
import './App.css';
import { Router } from '@reach/router'
import ProductInfo from './components/ProductInfo'
import Update from './views/Update'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <ProductInfo path="/products/:id"  />
        <Update path="/products/:id/edit" />
      </Router>
    </div>
  );
}

export default App;

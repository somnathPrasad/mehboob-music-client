import './App.css';
import Header from "./components/Header"
import Cards from "./components/cards"

function App() {
  return (
    <div className="App">
      <Header />
      <Cards title="o-sanam" content="My latest creation" />
      <Cards title="a sanam" content="My latest creation" />
      <Cards title="b sanam" content="My latest creation" />
    </div>
  );
}

export default App;

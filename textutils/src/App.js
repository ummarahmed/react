import logo from './logo.svg';
import './App.css';

// let name = "Ummar";
let name = prompt("Enter your name: ")
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <p>
        <h1>Hello {name}, Welcome to Website :)</h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, nulla aut, sed ipsam deleniti magni iusto non amet pariatur fuga, delectus minima optio. Vel quam pariatur, alias dolores beatae expedita.
      </p>
    </div>
    </>
  );
}

export default App;

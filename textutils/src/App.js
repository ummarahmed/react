
import './App.css';
import About from './componants/About';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';


function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils"/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below"/>
        <About />
      </div>
      
    </>
  );
}

export default App;

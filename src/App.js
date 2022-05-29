import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Book from './Book/Book';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Book' element={<Book/>}/>
         <Route path='/Contact' element={<Contact/>}/>

       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;

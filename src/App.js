import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;

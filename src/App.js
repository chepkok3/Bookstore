import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

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

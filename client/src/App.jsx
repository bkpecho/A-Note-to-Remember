import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import About from './routes/about/About';
import AddNote from './routes/home/AddNote';
import Home from './routes/home/Home';
import ViewNote from './routes/home/ViewNote';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/note/:id" element={<ViewNote />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

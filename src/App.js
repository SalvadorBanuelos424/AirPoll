import About from "./components/page/About";
import Navbar from "./components/Navbar";
import Contact from "./components/page/Contact";
import Portfolio from "./components/page/Portfolio";
import Footer from "./components/Footer";
import Resume from "./components/page/Resume";
import React, {useState} from "react";


function App() {
  const [currentPage, setCurrentPage] = useState('About');
 

  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  
  return (
    <div className="App">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
    <main >
      {renderPage()}
    </main>
      <Footer />
    </div>
  );
}

export default App;
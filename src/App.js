import logo from './logo.svg';
import './App.scss';
import  Subject  from './Pages/Subject';
import  Classroom  from './Pages/Classroom';
import  Student  from './Pages/Student'; //for use the created components
import  Teacher  from './Pages/Teacher';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Navigation  from './Pages/Navigation/Navigation';

function App() {

  const relatedPage = 'Related Page';

  return (
     <Router>
      <div className="App container">
        
      <Navigation relatedPageName={relatedPage} />
        <Routes>
          <Route path='/student' element={<Student/>} />
          <Route path='/teacher' element={<Teacher/>} />
          <Route path='/subject' element={<Subject/>} />
          <Route path='/classroom' element={<Classroom/>} />
        </Routes>

      <footer className='footer'></footer>
       
    

      </div>
     </Router>

  );
}

export default App;

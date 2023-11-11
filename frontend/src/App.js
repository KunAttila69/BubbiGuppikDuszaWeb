import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import IntroPage from './Pages/IntroductionPage';
import HomePage from './Pages/Home';
import LoginPage from './Pages/Login';
import RegistartionPage from './Pages/Registration';
import TeacherDashBoard from './Pages/TeacherDashboard';
import JudgeDashboard from './Pages/JudgeDashboard';
import Game from './Pages/Game';
import PlayerDashboard from './Pages/PlayerDashboard';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path="/introduction" element={<IntroPage/>}/>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/register" element={<RegistartionPage/>}/>
        <Route exact path='/teacher-dashboard' element={<TeacherDashBoard/>}/>
        <Route exact path='/judge-dashboard' element={<JudgeDashboard/>}/>
        <Route exact path='/player-dashboard' element={<PlayerDashboard/>}/>
        <Route exact path='/game' element={<Game/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import Header from './components/header/header';
import Journeryboard from './components/journey-board/journeryboard';
import Main from './components/main/main';
import Noticeboard from './components/notice-board/noticeboard';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      < Journeryboard />
      < Noticeboard/>
    </div>
  );
}

export default App;

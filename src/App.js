import './App.css';
import {Button} from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';
const App=()=> {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Button variant='warning'>
          ورود
        </Button>
        <ul>
          <li>تماس با ما</li>
          <li>درباره ما</li>
          <li>رشدانا</li>
          <li><h3>لوگو</h3></li>

        </ul>
     </header>
     <div className='baner'>
       <img 
       src={require('./image/header.png')}
       >
       </img>
     </div>
    </BrowserRouter>
  );
}

export default App;

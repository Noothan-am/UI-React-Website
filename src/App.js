import './app.css'
import {Navbar} from './components/index'
import {Header} from './containers/index'
function App() {
  return (
    <div className="App">
      <div className='bg_gradient'>
        <Navbar/>
        <Header/>
      </div>
    </div>
  );
}

export default App;

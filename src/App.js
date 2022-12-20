import './app.css'
import {Navbar,SocialMedia} from './components/index'
import {Header,Main} from './containers/index'
function App() {
  return (
    <div className="App">
      <div className='bg_gradient'>
        <Navbar/>
        <Header/>
      </div>
      <SocialMedia/>
      <Main/>
    </div>
  );
}

export default App;
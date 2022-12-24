import './app.css'
import {Navbar,SocialMedia} from './components/index'
import {Header,Main,Features,EarlyAccess} from './containers/index'
function App() {
  return (
    <div className="App">
      <div className='bg_gradient'>
        <Navbar/>
        <Header/>
      </div>
      <SocialMedia/>
      <Main/>
      <Features/>
      <EarlyAccess/>
    </div>
  );
}

export default App;
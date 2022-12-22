
import './App.css';

function App() {
  return (
  <>
  <div className='heading col-md-12 mt-5'>
    <h2 className='mt-4'>WHEATHER</h2>
  </div>
  <div className='row mt-5'>
    <div className='col-md-6 div-search'>
      <img className='img-fluid image' src="https://as1.ftcdn.net/v2/jpg/01/52/26/16/1000_F_152261623_5O7XNZ8nT0si8ni0hUBJEnO2dAGbcsiX.jpg" />
      <input type="text" placeholder='Enter City Name'/>
    </div>

    <div className='col-md-6 display'>
      <h1>tikkal</h1>
    </div>

  </div>
  </>
  )
}

export default App;

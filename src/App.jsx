import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Jupiter } from './assets/components/Jupiter'
import { Marte } from './assets/components/Marte'
import { Mercurio } from './assets/components/Mercurio'
import { Tierra } from './assets/components/Tierra'
import { Venus } from './assets/components/Venus'
import {Sol} from './assets/components/Sol'
import { Navigation } from './assets/components/Navigation';

function App() {
  
  return (
    <>
      <BrowserRouter>
      <div>
        <h1 className='container d-flex justify-content-center'>Gallery Project</h1>
      </div>
      <div className='container d-flex justify-content-center'>
          <div className='container d-flex justify-content-center'>
              <Routes>
              <Route path='/sol' element={<Sol className='main-img-container'/>} />
              <Route path='/venus' element={<Venus className='main-img-container'/>} />
              <Route path='/jupiter' element={<Jupiter className='main-img-container'/>} />
              <Route path='/tierra' element={<Tierra className='main-img-container'/>} />
              <Route path='/marte' element={<Marte className='main-img-container'/>} />
              <Route path='/mercurio' element={<Mercurio className='main-img-container'/>} />
            </Routes>
          </div>
          <div className=''>
            <Navigation/>
          </div>
      </div>
      
      </BrowserRouter>
    </>
  )
}

export default App

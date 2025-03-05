import { Assessment } from './components/pages/Assessment/Assessment'
import { Main } from './components/pages/Main/Main'
// import { NotFound404 } from './components/pages/NotFound404/NotFound404'
// import { Assessment } from './components/pages/Assessment/Assessment'
import { Examples } from './components/pages/Examples/Examples'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
				<Route path='/' element={<Main />} />
				<Route path='/assessment' element={<Assessment />} />
        <Route path='/examples' element={<Examples />} />
				{/* <Route path='*' element={<NotFound404 />} /> */}
			</Routes>
    </>
  )
}

export default App

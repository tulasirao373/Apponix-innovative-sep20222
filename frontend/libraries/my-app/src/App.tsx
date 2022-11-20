// const App=()=>{

//   return <h1>hello</h1>
// }
// const Home = () => { return <><h1>hello im home</h1></>}


// export const App =()=>{

//   return (<><h1>hello</h1>
//   <h1>hello</h1>
//   <h1>hello</h1>
//   <h1>hello</h1>
//   <h1>hello</h1></>
//   )
// }

// export const App =()=>{

//   return (<>
//   </>
//   )
// }


import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


import { Contact, Home } from './pages'

export const App = () => {

    return (<>
    <Router>
        <Routes>
       < Route path='/' element={<Home/>}/>
       < Route path='/contact' element={<Contact/>}/>
       < Route path='/about' element={<h1>hello im about</h1>}/>
        </Routes>
        </Router> 
    
    </>)
}
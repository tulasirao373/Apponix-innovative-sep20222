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


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import { Contact, Home, MyLogin, Test } from './pages'
import Youtube from './pages/Youtube/Youtube'
import { Jewelery } from "./pages/jewelery";
import { Layout } from './pages/layout';
import { Register } from './pages/auth/register';

export const App = () => {

    return (<>
        <Router>
            <Layout>
                <Routes>
                    < Route path='/' element={<Home />} />
                    < Route path='/contact' element={<Contact />} />
                    < Route path='/about' element={<h1>hello im about</h1>} />
                    < Route path='/Youtube' element={<Youtube />} />
                    < Route path='/jewelery' element={<Jewelery />} />
                    < Route path='/login' element={<MyLogin />} />
                    < Route path='/test' element={<Test />} />
                    <Route path='/register' element={<Register/>}/>

                </Routes>
            </Layout>

        </Router>

    </>)
}
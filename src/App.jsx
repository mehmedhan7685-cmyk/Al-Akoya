import React from 'react'
import Home from './Components/Home/Home'
import { Route, Routes ,BrowserRouter } from 'react-router-dom'
import Services from './Services/Services'
import About from './About/About'
import Vission from './Vission&Mission/Vission'
import Contact from './Contact/Contact'
import ClientLogIn from './ClientLogIn/ClientLogIn'
import CreateYourAcount from './ClientLogIn/CreateYourAcount'
import BookNow from './BookNow/BookNow'
import Pop from './WelcomePop/Pop'
import ResetPassword from './ClientLogIn/ResetPassword'
import GuestOrderModal from './BookNow/GuestOrderModal'



const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='vision-mission' element={<Vission/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='login' element={<ClientLogIn/>}/>
        <Route path='acount' element={<CreateYourAcount/>}/>
        <Route path='book-now' element={<BookNow/>}/>
        <Route path='pop' element={<Pop/>}/>
        <Route path='resetPass' element={<ResetPassword/>}/>
        <Route path="order" element={<GuestOrderModal/>}/>

        {/* BookNow Sections [2,3,4,5,6] */}
        {/* <Route path='step2' element={<Step2/>}/> */}
      </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App


import React from 'react'
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import {logo}  from './assets'
import { Home,Createpost} from './pages';
import Footer from './components/Footer';
import { useAuth0 } from "@auth0/auth0-react";


const App = () => {

  const { user,loginWithRedirect ,isAuthenticated,logout} = useAuth0();
  console.log("current user : ", user);
  return (
    <BrowserRouter>
    
    <header className="w-full flex justify-between items-center bg-white sm:px-3 px-4 py-2 border-border-b-[#e6ebf4]">
  <Link to="/">
    <img src="https://api.logo.com/api/v2/images?logo=logo_50dca52a-fb4e-4d8c-b674-83ba1fd52e5f&u=1706533114226&format=svg&margins=166&width=1000&height=750&fit=contain" alt="logo" className="w-16 rounded-lg object-contain" />
  </Link>
  {isAuthenticated && <h3 className='italic hover:not-italic font-bold'>Hello {user?.name}</h3>}
  <div className="space-x-4">
    {isAuthenticated && <Link to="/create-post" className="font-inter font-medium bg-[#000] text-white px-4 py-3 rounded-lg">Create</Link>}
    {isAuthenticated ? (
      <button className='font-inter font-medium bg-[#000] text-white px-4 py-2 rounded-lg' onClick={e=> logout()}>Logout</button>
    ):(<button className='font-inter font-medium bg-[#000] text-white px-4 py-2 rounded-lg' onClick={e=> loginWithRedirect()}>Login</button>)}
  </div>
</header>
    <main className="sm:p-8 px-4 py-8 w-full text-white bg-[#100f0f] min-h-[calc(100vh-73px)]">
      <Routes> 
        
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<Createpost />} />
      </Routes>
      <Footer/>
    </main>
  </BrowserRouter>
    
  )
}

export default App
 
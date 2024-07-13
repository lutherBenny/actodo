
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
import { useState } from "react";




function App()
{

    const [users,setusers]=useState(
        [
            {
                username:"Luther",
                password:"123"
            },
            {
                username:"abc",
                password:"123"
            }
        ]
    )
    return(
        <div>
        <BrowserRouter>

        <Routes>
            <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
            <Route path='/Signup' element={<Signup users={users} setusers={setusers}/>}></Route>
            <Route path='/Landing' element={<Landing/>}></Route>
            

        </Routes>
        </BrowserRouter>
    </div>

    )
}


export default App

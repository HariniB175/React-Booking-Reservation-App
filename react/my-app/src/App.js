import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './home'
import List from './list'
import Hotel from './hotel'
function App(){
  return(
<div>

<BrowserRouter>
<Routes>
    <Route path="/"element={<Home></Home>}></Route>
    <Route path="/hotels" element={<List></List>}></Route>
    <Route path="/hotels/:id" element={<Hotel></Hotel>}></Route>

  </Routes>
</BrowserRouter>
{/* <video>
  <source  src='https://assets.mixkit.co/videos/preview/mixkit-pink-sunset-seen-from-a-plane-window-4204-large.mp4"'></source>
</video> */}





</div>
  )
}
export default App

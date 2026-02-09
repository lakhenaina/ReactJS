import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className='Parent'>
      <div className='card'>

        <div className='Top'>
          <img src='https://imgs.search.brave.com/ZyNDsok-KqN5jBJ5XqiFz-Ja9ltWWIzEKh_m1aWyc-M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEx/L05ldy1Hb29nbGUt/TG9nby00OTd4NTAw/LmpwZw'alt='logo'></img>
          <button>Save <Bookmark /></button>
          </div>
        
        <div className='center'> 
          <h1>Google <span>10 days ago</span></h1>
          
          <h1>Graphics Designer</h1>
        </div>

        <div className="buttom">
          <h3>$120/h</h3>
          <p>San Francisco,CA</p>
          <button>Apply Now</button>
        </div>
        </div>
      </div>
  )
}

export default App

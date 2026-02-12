import React from 'react'

const card = (props) => {

    console.log(props);
    

  return (
    <div className='parent'>
    <div className='card'> 
    <img src='https://images.unsplash.com/photo-1770009079271-4c3764aabffa?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='profile'></img>
    <h1>{props.user},{props.age}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, voluptatum!</p>

    <button>View profile</button>
    
    </div>
    </div>
  )
}

export default card

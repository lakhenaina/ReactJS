import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  
  
  return (
    <div id='right' className='h-full p-6 w-2/3  overflow-x-auto rounded-4xl flex flex-nowrap gap-10'>
       
     {props.users.map(function(elem,idx){

      return <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag}  />

    })}
      

    </div>
  )
}

export default RightContent

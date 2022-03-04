import React from 'react'

export default function About(props) {
  return (
    <div className='container my-3'style={{color:props.mode ==='dark'?'white':'black'}}>
        <h2>About Us</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ducimus, necessitatibus consequuntur praesentium enim officiis fugiat rerum eveniet illo perspiciatis vel aut quae nemo facere iste reiciendis corrupti cumque accusamus velit quidem. Voluptate, repudiandae?</p>
    </div>
  )
}

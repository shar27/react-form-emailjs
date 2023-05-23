import React from 'react'
import { useState } from 'react';

function Post({post}) {

    const [color, setColor] = useState(false)

    function handleChange (){
        setColor(!color)
    }

    console.log(post.fields);
    const {title, author, published} = post.fields;
    const {url} = post.fields.featured.fields.file;
  return (
    <div>
        <h1>{title}</h1>
        <img src={url} width={300} />
        <h3>{author}</h3>
        <h4>{published.slice(0,10)}</h4>
       
        <button 
        onClick={handleChange}
        style={{backgroundColor: color? "black":"grey"}}
        className='btn-black'>Read more</button>
       
    </div>
  )
}

export default Post
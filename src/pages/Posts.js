import React from 'react'
import { useState, useEffect } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful'
import Post from '../components/Post';





const client = createClient({
    space:"hs27784un5cq",
    accessToken:"JLdxF9fH5GAovXzgZY85OEvzTNDSRZWdLyQJKBzy8O8"
  })

export default function Posts() {

    const [blogPosts, setBlogPosts] = useState([])

  useEffect(()=> {
    const fetchBlogPosts = async () => {
      try{
        const blogPosts = await client.getEntries();
        setBlogPosts(blogPosts)
        console.log(blogPosts.items);
      } catch (err){
        console.log(err)
      }
      
    }
    fetchBlogPosts()


  }, [])

  console.log(blogPosts.items);
    return(
        
        <div>
          <h1 className='text-center p2'>Latest Articles</h1>
        <div className='grid-col-4' style={{textAlign:'center'}}>
       
        {blogPosts?.items?.map((post, id) => (
         <Post
         key={id}
         post={post}
         />
        ))}
      </div>
      </div>
    )
}

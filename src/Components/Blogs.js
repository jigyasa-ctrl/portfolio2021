import React from 'react'
import BlogPost from './BlogPost'

function Blogs() {
    return (
        <div className="blogs">
            <h1 id="blogs-h1">Recent Blogs</h1>
            <div>
                <BlogPost />
                <BlogPost />
                <BlogPost />
                
            </div>
        </div>
    )
}

export default Blogs

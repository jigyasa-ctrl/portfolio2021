import React from 'react'


function BlogPost() {
    return (
        <div className="blogpost" onClick={() => window.location.href = "https://medium.com/@jigyasaupadhyay60?p=b2e20229823b"}>
            <img src="https://images.unsplash.com/photo-1607970669494-309137683be5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"></img>
            <h2>Let's learn about execution context in javascript</h2>
        </div>
    )
}

export default BlogPost

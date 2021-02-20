import React from 'react'
import { useParams } from '@reach/router'

const BlogDisplay = () => {
    const params = useParams()
    const urlPath = params.title
    console.log(urlPath)
    
    return (
        <div>
            ncckmk
        </div>
    )
}

export default BlogDisplay

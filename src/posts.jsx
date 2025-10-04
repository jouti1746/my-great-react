
import { use } from 'react'

export default function Posts({postsPromise}){

     
    const posts = use(postsPromise);
    console.log(posts);
    return(
        <div className="card2">
            <h2>All posts are here</h2>
        </div>
    )
}
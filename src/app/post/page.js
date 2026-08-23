import Mypost from "./mypost";

async function getPosts () {
    let postData = await fetch('https://jsonplaceholder.typicode.com/posts')
    postData = await postData.json()
    return postData;
}

const Post = async () => {
  let posts = await getPosts();
  // console.log(posts);
  return (
    <>
       <h2>Posts | Fecth Data With API In Server Side Component</h2>
       {
          posts.map((post) => 
          <>
           <h4 key={post.id}># {post.id} Post Title: {post.title}</h4>
           <Mypost data={post.id} />
          </>
          )
       }
    </>
  )
}

export default Post;
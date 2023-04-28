import React from "react";

const Project = ({post, globalData}) => {

  console.log(post);
  console.log(globalData);
  
  return (
    <div>Project page</div>
  );
}

export async function getStaticPaths(){
    const res = await fetch(`${process.env.REST_API}/wp-json/wp/v2/cpt-project/`)
    const posts = await res.json()

    const paths = posts.map(post => ({
        params: {slug: post.slug},
    }))

    return {paths, fallback: false}
}

export async function getStaticProps({params}){
  const res = await fetch(`${process.env.REST_API}/wp-json/wp/v2/cpt-project?slug=${params.slug}`);
  const posts = await res.json()

  return{
    props: {
      post: posts[0]
    }
  }
}

export default Project
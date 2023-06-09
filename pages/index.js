import React from "react";
import Slider from "../bemit/09-components/c-slider/c-slider.js";

const Home = ({posts, globalData}) => {

  console.log(posts);
  console.log(globalData);
  
  return (
    <div>
      <div>Home page</div>
      <Slider posts={posts} />
    </div>
  );
}

export async function getStaticProps(){
  const res = await fetch(`${process.env.REST_API}/wp-json/wp/v2/cpt-project?_embed=true`);
  const posts = await res.json()

  return{
    props: {
      posts
    }
  }
}

export default Home
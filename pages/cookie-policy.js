import React from "react";

const CookiePolicy = ({page, globalData}) => {

  console.log(page);
  console.log(globalData);
  
  return (
    <div>Cookie policy page</div>
  );
}

export async function getStaticProps(){
  const res = await fetch(`${process.env.REST_API}/wp-json/wp/v2/pages?slug=cookie-policy`);
  const pages = await res.json()

  return{
    props: {
      page: pages[0]
    }
  }
}

export default CookiePolicy
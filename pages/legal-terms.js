import React from "react";

const LegalTerms = ({page, globalData}) => {

  console.log(page);
  console.log(globalData);
  
  return (
    <div>Legal terms page</div>
  );
}

export async function getStaticProps(){
  const res = await fetch(`${process.env.REST_API}/wp-json/wp/v2/pages?slug=legal-terms`);
  const pages = await res.json()

  return{
    props: {
      page: pages[0]
    }
  }
}

export default LegalTerms
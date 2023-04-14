import React from "react";
import { useRouter } from "next/router";

const Settings = () => {
  const router = useRouter();
  
  return (
    <div>Settings page, username: {router.query.username}</div>
  );
}

export default Settings
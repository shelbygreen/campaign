import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Layout from "../components/layout";

const FourOhFour = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <Layout>
        <h1>Oooooops...</h1>
        <h2>That page cannot be found.</h2>
      </Layout>
    </>
  );
};

export default FourOhFour;

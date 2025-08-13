import { getSignedUrl } from "../services/api";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const getData = async () => {
      await getSignedUrl();
    };
    getData();
  }, []);

  return (
    <>
      <h1>File Upload</h1>
      <input type="file" placeholder="Upload fasta file" />
    </>
  );
};

export default Home;

import axios from 'axios';
import { getSignedUrl } from '../services/api';
import { useState } from 'react';

const Home = () => {
  // useEffect(() => {
  //   const getData = async () => {
  //     await getSignedUrl();
  //   };
  //   getData();
  // }, []);
  const [file, setFile] = useState();

  const handleFileChange = async () => {
    // const file = e.target.files[0];
    if (!file) return;
    const fileName = file.name;
    const fileType = file.type;
    const folder = 'BicBioEng'; // Rename the folder to what is appropriate. David Isikwe.

    const { uploadUrl } = await getSignedUrl({ fileName, fileType, folder });

    if (uploadUrl) {
      try {
        const response = await axios.put(uploadUrl, file, {
          headers: { 'Content-Type': file.type },
        });
        if (response.ok) {
          alert(`${fileName} file uploaded successfully to S3.`);
        } else {
          alert(`${file.name} file upload failed to S3.`);
          console.error('DEBUG: S3 upload response not OK:', response);
        }
      } catch (error) {}
    } else {
      console.error('DEBUG: No presigned URL obtained, skipping S3 upload.');
    }
  };

  return (
    <>
      <h1>File Upload</h1>
      <input
        type='file'
        placeholder='Upload fasta file'
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type='button' onClick={handleFileChange} disabled={!file}>
        Submit
      </button>
    </>
  );
};

export default Home;

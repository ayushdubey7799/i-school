import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { getResumeFile } from "../../functions/api/resume/getBlobData";

// const Resume = () => {
//   const [blobUrl, setBlobUrl] = useState("");
//   const accessToken = useSelector((state) => state.auth.userData?.accessToken);
//   const clientCode = useSelector((state) => state.auth.userData?.user?.clientCode);

//   useEffect(() => {
//     const createBlobUrl = async () => {
//       const res = await getResumeFile(accessToken, clientCode);
//       const blob = new Blob([res], { type: "application/octet-stream" });

//       const url = URL.createObjectURL(blob);
//       setBlobUrl(url);
     
//     };

//     createBlobUrl();

//     return () => {
//       URL.revokeObjectURL(blobUrl);
//     };
//   }, []);

//   return (
//     <div>
//       {/* <a download='resume.pdf' href="blob:https://dev-api.intelliview.in/8d5bfa00-c617-48d9-b636-d63c9c9bf696">Download</a> */}
//       <a href={blobUrl} >
//         Download
//       </a>
//       {/* <iframe src="https://docs.google.com/document/d/1m9yv3oTF-uC3D-kQQbmTIbdPOrnuYJg_O5dBhmH5uoc/edit?usp=sharing" height="700" width="1000" frameborder="0"/> */}
//       <Display/>
//      </div>
//   );
// };

// export default Resume;

// const Display = React.memo(() => {
//   const docs = [
//     { 
//       // uri: require('../../files/Resume1.pdf'), 
//       uri: 'https://intelliview-pub.s3.ap-south-1.amazonaws.com/ReactExp.pdf',
//       fileType: "pdf",
//       fileName: "Resume.pdf"
//     },
//     { 
//       uri: 'https://intelliview-pub.s3.ap-south-1.amazonaws.com/TestingDoc.docx',
//       fileType: "docx",
//       fileName: "tewsting.docx"
//     }
// ];
// return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} style={{height:"90vh", width:"60%"}}/> 

// });


export const createBlobUrl = async (url) => {
  const blob = new Blob([url], { type: "application/octet-stream" });
  const blobUrl = URL.createObjectURL(blob);
  return blobUrl;
};
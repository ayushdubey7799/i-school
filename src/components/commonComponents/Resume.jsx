import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

// function Resume() {
//     const file = {
//     id: "169ae35e-4833-495f-8fb8-7ba5b9f5a759",
//         srcFilename: "Sangili Murugan.docx",
//         modFilename: "resumes/1700499007686_Sangili Murugan.docx",
//         clientCode: "BRAJ01",
//         filedir: "intelliview.braj01",
//         dataSrcType: "API"
//       }
//     const docs = [
//         { uri: "blob:https://dev-api.intelliview.in/2bd5b51d-88da-4156-b1cf-6128fac40626" }, // Remote file
//     ];

//     return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;

// }

// export default Resume;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getResumeFile } from "../../functions/api/resume/getResumeFile";

const Resume = () => {
  const [blobUrl, setBlobUrl] = useState("");
  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const clientCode = useSelector(
    (state) => state.auth.userData?.user?.clientCode
  );

  useEffect(() => {
    const createBlobUrl = async () => {
      const res = await getResumeFile(accessToken, clientCode);
      const blob = new Blob([res], { type: "application/octet-stream" });

      const url = URL.createObjectURL(blob);
      console.log(blob, url);
      setBlobUrl(url);
    };

    createBlobUrl();

    return () => {
      URL.revokeObjectURL(blobUrl);
    };
  }, []);

  return (
    <div>
      {/* <a download='resume.pdf' href="blob:https://dev-api.intelliview.in/8d5bfa00-c617-48d9-b636-d63c9c9bf696">Download</a> */}
      <a href={blobUrl} >
        Download
      </a>
      <br />
      <br />
      <iframe src={blobUrl} />
    </div>
  );
};

export default Resume;

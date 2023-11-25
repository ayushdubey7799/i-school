import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getResumeFile } from "../../functions/api/resume/getResumeFile";

const Resume = () => {
  const [blobUrl, setBlobUrl] = useState("");
  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const clientCode = useSelector((state) => state.auth.userData?.user?.clientCode);

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

  const docs = [
    { 
      uri: require('../../files/Resume1.pdf'), 
      fileType: "pdf",
      fileName: "Resume.pdf"
    }
];

return (<>
<DocViewer documents={docs} pluginRenderers={DocViewerRenderers} style={{height:"90vh", width:"40%"}}/> 
      {/* <a href={blobUrl} download="resume.pdf">
        Download
      </a> */}
     </>
  );
};

export default Resume;

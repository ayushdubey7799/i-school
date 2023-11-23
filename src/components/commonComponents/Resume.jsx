
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

function Resume() {
    const file = { 
    id: "169ae35e-4833-495f-8fb8-7ba5b9f5a759",
        srcFilename: "Sangili Murugan.docx",
        modFilename: "resumes/1700499007686_Sangili Murugan.docx",
        clientCode: "BRAJ01",
        filedir: "intelliview.braj01",
        dataSrcType: "API"
      }
    const docs = [
        { uri: file.modFilename }, // Remote file
    ];
    
    return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
    
}

export default Resume;

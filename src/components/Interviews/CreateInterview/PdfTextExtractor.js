import React, { useState } from 'react';
import pdfjs from 'pdfjs-dist/build/pdf.js';

function PdfTextExtractor() {
  const [pdfText, setPdfText] = useState('');

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const pdfData = new Uint8Array(e.target.result);

        try {
          const pdf = await pdfjs.getDocument(pdfData).promise;
          const textArray = [];

          for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const pageText = await page.getTextContent();
            pageText.items.forEach((item) => {
              textArray.push(item.str);
            });
          }

          const fullText = textArray.join('\n');
          setPdfText(fullText);
        } catch (error) {
          console.error('Error extracting text from PDF:', error);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".pdf" />
      <textarea
        rows="10"
        cols="50"
        readOnly
        value={pdfText}
      ></textarea>
    </div>
  );
}

export default PdfTextExtractor;

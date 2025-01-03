import React, { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';

// Set the workerSrc to point to the PDF.js worker file (make sure the version matches)
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;

const PdfReader = () => {
  const [text, setText] = useState('');

  // Function to extract text from the PDF
  const extractText = (file) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const pdfData = new Uint8Array(reader.result);
      const pdfDoc = await pdfjsLib.getDocument(pdfData).promise;

      let extractedText = '';

      // Extract text from each page
      for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
        const page = await pdfDoc.getPage(pageNum);
        const textContent = await page.getTextContent();
        extractedText += textContent.items.map(item => item.str).join(' ') + '\n';
      }

      setText(extractedText);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => extractText(e.target.files[0])}
      />
      <textarea
        value={text}
        readOnly
        rows={10}
        cols={50}
        style={{ width: '100%', marginTop: '10px' }}
      />
    </div>
  );
};

export default PdfReader;

import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const downloadPDF = () => {
  const input = document.getElementById('pdf-content');

  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save('download.pdf');
  });
};

const DownloadPDFButton = () => {
  return (
    <div>
      <button onClick={downloadPDF}>Download as PDF</button>
      <div id="pdf-content">
        {/* Content you want to convert to PDF */}
        <h1>Hello, World!</h1>
        <p>This is the content you want to download as a PDF.</p>
      </div>
    </div>
  );
};

export default DownloadPDFButton;
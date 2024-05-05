import React, { useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import pdf from '../assets/download.png'

const  DownloadPDFButton = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/getInfo');
      setData(response.data);
      saveToPDF();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const saveToPDF = () => {
    const doc = new jsPDF();
  
    doc.setFontSize(12);
    doc.text('Data from API', 20, 20);
    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);
  
    let y = 35;
    data.forEach((item, index) => {
      doc.text(`${index + 1}. Name: ${item.name}`, 20, y);
      doc.text(`   Email: ${item.email}`, 20, y + 5);
      doc.text(`   State: ${item.state}`, 20, y + 10);
      y += 20; // Increase the vertical position for the next item
    });
  
    doc.save('data.pdf');
  };
  
  

  return (
    <div className='left-four'>
      <img src={pdf}  onClick={fetchData} style={{width:100,height:80,cursor:'pointer'}}   />
       
    </div>
  );
};

export default DownloadPDFButton;
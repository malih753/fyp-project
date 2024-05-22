import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import pdf from '../assets/pdf.png'


const DownloadPDFButton = () => {
  const [fetchedData, setFetchedData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/info/getInfo', {
        withCredentials: true
      });
      console.log(response);
      setFetchedData(response.data?.info);
      saveToPDF(response.data?.info);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const saveToPDF = (data) => {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      console.error('Error: Data is null or empty');
      return;
    }

    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text('Data from API', 20, 20);
    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);

    let y = 35;

    if (Array.isArray(data)) {
      data.forEach((item, index) => {
        doc.text(`${index + 1}. Name: ${item.name}`, 20, y);
        doc.text(`   Email: ${item.email}`, 20, y + 5);
        doc.text(`   State: ${item.state}`, 20, y + 10); 
        doc.text(`   Package Name: ${item.package_name}`, 20, y + 15);
        doc.text(`   Package price: ${item.price}`, 20, y + 20);
    
        y += 30; // Increase the vertical position for the next item
      });
    } else {
      // Handle non-array data types
      doc.text(`1. Name: ${data.name}`, 20, y);
      doc.text(`   Email: ${data.email}`, 20, y + 5);
      doc.text(`   State: ${data.state}`, 20, y + 10);
      doc.text(`   Package Name: ${data.package_name}`, 20, y + 15);
      doc.text(`   Package price: ${data.price}`, 20, y + 20);
    }
    

    doc.save('data.pdf');
  };


  return (
    <div className='left-four'>
      <img src={pdf} onClick={fetchData} style={{ width: 100, height: 80, cursor: 'pointer' }} />
    </div>
  );
};




export default DownloadPDFButton;
import axios from 'axios';
import React, { useEffect, useState } from "react"
import '../Rental_code/rental.css';
import image from './logo.png';


function Rental() {
  const [date, setdate] = useState('');
  const [month, setmonth] = useState('');
  const [year, setyear] = useState('');
  const [vendorname, setvendorname] = useState('');
  const [vendorfathername, setvendorfathername] = useState('');
  const [vendorreligion, setvendorreligion] = useState('');
  const [vendorage, setvendorage] = useState('');
  const [vendoraddress, setvendoraddress] = useState('');
  const [vendoraadharnumber, setvendoraadharnumber] = useState('');
  const [vendorpannumber, setvendorpannumber] = useState('');
  const [purchasername, setpurchasername] = useState('');
  const [purchaserfathername, setpurchaserfathername] = useState('');
  const [purchaserreligion, setpurchaserreligion] = useState('');
  const [purchaserage, setpurchaserage] = useState('');
  const [purchaseraddress, setpurchaseraddress] = useState('');
  const [purchaseraadharnumber, setpurchaseraadharnumber] = useState('');
  const [purchaserpannumber, setpurchaserpannumber] = useState('');
  const [propertydetails, setpropertydetails] = useState('');
  const [ownerloanaccountnumber, setownerloanaccountnumber] = useState('');
  const [loansumnumbers, setloansumnumbers] = useState('');
  const [loansumwords, setloansumwords] = useState('');
  const [propertytobesold, setpropertytobesold] = useState('');
  const [propertyoldnumber, setpropertyoldnumber] = useState('');
  const [propertynewnumber, setpropertynewnumber] = useState('');
  const [propertypattanumber, setpropertypattanumber] = useState('');
  const [propertyaddress, setpropertyaddress] = useState('');
  const [propertyarea, setpropertyarea] = useState('');
  const [otherpropertiesforsale, setotherpropertiesforsale] = useState('');
  const [saleamountnumbers, setsaleamountnumbers] = useState('');
  const [saleamountwords, setsaleamountwords] = useState('');
  const [sumadvance1, setsumadvance1] = useState('');
  const [sum1mode1, setsum1mode1] = useState('');
  const [sum1mode1date, setsum1mode1date] = useState('');
  const [sum1mode1number, setsum1mode1number] = useState('');
  const [sum1mode1bankname, setsum1mode1bankname] = useState('');
  const [sum1mode1bankbranch, setsum1mode1bankbranch] = useState('');
  const [sumadvance2, setsumadvance2] = useState('');
  const [sum2mode2, setsum2mode2] = useState('');
  const [sum2mode2number, setsum2mode2number] = useState('');
  const [sum2mode2bankname, setsum2mode2bankname] = useState('');
  const [sum2mode2bankbranch, setsum2mode2bankbranch] = useState('');
  const [vendorbankname, setvendorbankname] = useState('');
  const [vendorbankbranch, setvendorbankbranch] = useState('');
  const [vendorbanknumber, setvendorbanknumber] = useState('');
  const [sumadvance3, setsumadvance3] = useState('');
  const [sum3mode3, setsum3mode3] = useState('');
  const [sum3mode3number, setsum3mode3number] = useState('');
  const [sum3mode3bankname, setsum3mode3bankname] = useState('');
  const [sum3mode3bankbranch, setsum3mode3bankbranch] = useState('');
  const [furtherpaymentdetails, setfurtherpaymentdetails] = useState('');
  const [directionalmeasurementsinfeet, setdirectionalmeasurementsinfeet] = useState('');
  const [witness1name, setwitness1name] = useState('');
  const [witness2name, setwitness2name] = useState('');
 
  
  const [downloadClicked, setDownloadClicked] = useState(false); // State to track if download button is clicked
  const [documentReady, setDocumentReady] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null); 
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/print_info_sale', {date,month,year,vendorname,vendorfathername,
      vendorreligion,vendorage,vendoraddress,vendoraadharnumber,vendorpannumber,purchasername,
      purchaserfathername,purchaserreligion,purchaserage,purchaseraddress,purchaseraadharnumber,
      purchaserpannumber,propertydetails,ownerloanaccountnumber,loansumnumbers,loansumwords,
      propertytobesold,propertyoldnumber,propertynewnumber,propertypattanumber,propertyaddress,
      propertyarea,otherpropertiesforsale,saleamountnumbers,saleamountwords,sumadvance1,sum1mode1,
      sum1mode1date,sum1mode1number,sum1mode1bankname,sum1mode1bankbranch,sumadvance2,sum2mode2,
      sum2mode2number,sum2mode2bankname,sum2mode2bankbranch,vendorbankname,vendorbankbranch,
      vendorbanknumber,sumadvance3,sum3mode3,sum3mode3number,sum3mode3bankname,sum3mode3bankbranch,
      furtherpaymentdetails,directionalmeasurementsinfeet,witness1name,witness2name

      },  { responseType: 'blob' }); // Set responseType to 'blob' to handle binary data
      
      // Pass the response data (blob) to the handleDownload function
      setDownloadUrl(window.URL.createObjectURL(new Blob([response.data])));
      setDocumentReady(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'updated_document_sale_deed.docx');
      document.body.appendChild(link);
      link.click();
      setDownloadClicked(true);
      setDocumentReady(false);
      setDownloadUrl(null);
    }
  };

  return (
    <div className="main-background">

    
          <div className="form-container">
          <td>        <div className='keep-it-middle'>

          <img src={image} alt="Login Icon" className="login-icon" />
            </div>
            <h1 className="kalam-bold" id='aligning-text'>Enter your details</h1></td>

          <form onSubmit={handleSubmit}>
            <div>
                <h2 className="kalam-bold">Document Details</h2>

                <label>Date:</label>
                <input type="text" value={date} onChange={(e) => setdate(e.target.value)} required/>
                <label>Month:</label>
                <input type="text" value={month} onChange={(e) => setmonth(e.target.value)} required/>
                <label>Year:</label>
                <input type="text" value={year} onChange={(e) => setyear(e.target.value)} required/>
            </div>
            
            <div>
                <h2 className="kalam-bold">Vendor Details</h2>
                <label>Name:</label>
                <input type="text" value={vendorname} onChange={(e) => setvendorname(e.target.value)} required/>
                <label>Father's Name:</label>
                <input type="text" value={vendorfathername} onChange={(e) => setvendorfathername(e.target.value)} required />
                <label>Religion:</label>
                <input type="text" value={vendorreligion} onChange={(e) => setvendorreligion(e.target.value)} required />
                <label>Age:</label>
                <input type="text" value={vendorage} onChange={(e) => setvendorage(e.target.value)} required/>
                <label>Address:</label>
                <input type="text" value={vendoraddress} onChange={(e) => setvendoraddress(e.target.value)} required/>
                <label>Aadhar Number:</label>
                <input type="text" value={vendoraadharnumber} onChange={(e) => setvendoraadharnumber(e.target.value)} required/>
                <label>PAN Number:</label>
                <input type="text" value={vendorpannumber} onChange={(e) => setvendorpannumber(e.target.value)} required/>
            </div>
            
            <div>
                <h2 className="kalam-bold">Purchaser Details</h2>
                <label>Name:</label>
                <input type="text" value={purchasername} onChange={(e) => setpurchasername(e.target.value)} required />
                <label>Father's Name:</label>
                <input type="text" value={purchaserfathername} onChange={(e) => setpurchaserfathername(e.target.value)} required/>
                <label>Religion:</label>
                <input type="text" value={purchaserreligion} onChange={(e) => setpurchaserreligion(e.target.value)}required />
                <label>Age:</label>
                <input type="text" value={purchaserage} onChange={(e) => setpurchaserage(e.target.value)} required/>
                <label>Address:</label>
                <input type="text" value={purchaseraddress} onChange={(e) => setpurchaseraddress(e.target.value)} required/>
                <label>Aadhar Number:</label>
                <input type="text" value={purchaseraadharnumber} onChange={(e) => setpurchaseraadharnumber(e.target.value)} required />
                <label>PAN Number:</label>
                <input type="text" value={purchaserpannumber} onChange={(e) => setpurchaserpannumber(e.target.value)} required/>
            </div>

            
            <div>
                <h2 className="kalam-bold">More Owner Details</h2>
                <label>Property Details:</label>
                <input type="text" value={propertydetails} onChange={(e) => setpropertydetails(e.target.value)} required/>
                <label>Owner Load Account Number:</label>
                <input type="text" value={ownerloanaccountnumber} onChange={(e) => setownerloanaccountnumber(e.target.value)} required/>
                <label>Sum of Loan:</label>
                <input type="text" value={loansumnumbers} onChange={(e) => setloansumnumbers(e.target.value)} required/>
                <label>Sum of Loan "in words":</label>
                <input type="text" value={loansumwords} onChange={(e) => setloansumwords(e.target.value)} required />
            </div>
            
            <div>
                <h2 className="kalam-bold">Property Details</h2>
                <label>Property To Be sold:</label>
                <input type="text" value={propertytobesold} onChange={(e) => setpropertytobesold(e.target.value)} required />
                <label>Property Old Number:</label>
                <input type="text" value={propertyoldnumber} onChange={(e) => setpropertyoldnumber(e.target.value)} required/>
                <label>Property New Number:</label>
                <input type="text" value={propertynewnumber} onChange={(e) => setpropertynewnumber(e.target.value)} required />
                <label>Property Patta Number:</label>
                <input type="text" value={propertypattanumber} onChange={(e) => setpropertypattanumber(e.target.value)} required/>
                <label>Property Address:</label>
                <input type="text" value={propertyaddress} onChange={(e) => setpropertyaddress(e.target.value)} required/>
                <label>Property Area:</label>
                <input type="text" value={propertyarea} onChange={(e) => setpropertyarea(e.target.value)} required/>
                <label>Other Properties For Sale:</label>
                <input type="text" value={otherpropertiesforsale} onChange={(e) => setotherpropertiesforsale(e.target.value)} />
            </div>
            
            <div>
                <h2 className="kalam-bold">Monetary Details</h2>
                <label>Sale Amount:</label>
                <input type="text" value={saleamountnumbers} onChange={(e) => setsaleamountnumbers(e.target.value)} required/>
                <label>Sale Amount "in words":</label>
                <input type="text" value={saleamountwords} onChange={(e) => setsaleamountwords(e.target.value)} required/>
                <label>Sum Advance 1:</label>
                <input type="text" value={sumadvance1} onChange={(e) => setsumadvance1(e.target.value)} required/>
                <label>Mode of Payment 1:</label>
                <input type="text" value={sum1mode1} onChange={(e) => setsum1mode1(e.target.value)} required/>
                <label>Date 1:</label>
                <input type="text" value={sum1mode1date} onChange={(e) => setsum1mode1date(e.target.value)}required />
                <label>Number 1:</label>
                <input type="text" value={sum1mode1number} onChange={(e) => setsum1mode1number(e.target.value)} required/>
                <label>Bank Name 1:</label>
                <input type="text" value={sum1mode1bankname} onChange={(e) => setsum1mode1bankname(e.target.value)} required/>
                <label>Bank Branch 1:</label>
                <input type="text" value={sum1mode1bankbranch} onChange={(e) => setsum1mode1bankbranch(e.target.value)} required/>
                <label>Sum Advance 2:</label>
                <input type="text" value={sumadvance2} onChange={(e) => setsumadvance2(e.target.value)} required/>
                <label>Mode of Payment 2:</label>
                <input type="text" value={sum2mode2} onChange={(e) => setsum2mode2(e.target.value)} required />
                <label>Number 2:</label>
                <input type="text" value={sum2mode2number} onChange={(e) => setsum2mode2number(e.target.value)} required/>
                <label>Bank Name 2:</label>
                <input type="text" value={sum2mode2bankname} onChange={(e) => setsum2mode2bankname(e.target.value)} required />
                <label>Bank Branch 2:</label>
                <input type="text" value={sum2mode2bankbranch} onChange={(e) => setsum2mode2bankbranch(e.target.value)} required/>
                <label>Vendor Bank Name:</label>
                <input type="text" value={vendorbankname} onChange={(e) => setvendorbankname(e.target.value)} required />
                <label>Vendor Bank Branch:</label>
                <input type="text" value={vendorbankbranch} onChange={(e) => setvendorbankbranch(e.target.value)} required/>
                <label>Vendor Bank Number:</label>
                <input type="text" value={vendorbanknumber} onChange={(e) => setvendorbanknumber(e.target.value)} required/>
                <label>Sum Advance 3:</label>
                <input type="text" value={sumadvance3} onChange={(e) => setsumadvance3(e.target.value)} required />
                <label>Mode of Payment 3:</label>
                <input type="text" value={sum3mode3} onChange={(e) => setsum3mode3(e.target.value)} required />
                <label>Number 3:</label>
                <input type="text" value={sum3mode3number} onChange={(e) => setsum3mode3number(e.target.value)} required/>
                <label>Bank Name 3:</label>
                <input type="text" value={sum3mode3bankname} onChange={(e) => setsum3mode3bankname(e.target.value)} required/>
                <label>Bank Branch 3:</label>
                <input type="text" value={sum3mode3bankbranch} onChange={(e) => setsum3mode3bankbranch(e.target.value)} required/>
                <label>Further Payment Details:</label>
                <input type="text" value={furtherpaymentdetails} onChange={(e) => setfurtherpaymentdetails(e.target.value)} required/>
            </div>

            <div>
                <h2 className="kalam-bold">Additional Details</h2>
                <label>Directional Measurements In Feet:</label>
                <input type="text" value={directionalmeasurementsinfeet} onChange={(e) => setdirectionalmeasurementsinfeet(e.target.value)} required/>
                <label>Name of 1st Witness:</label>
                <input type="text" value={witness1name} onChange={(e) => setwitness1name(e.target.value)} required/>
                <label>Name of 2nd Witness:</label>
                <input type="text" value={witness2name} onChange={(e) => setwitness2name(e.target.value)} required/>
            </div>
            <br />
    
      
            <div style={{ textAlign: 'center' }}>
            <button className="kalam-bold" type="submit">Submit</button>
          </div>  
          {documentReady && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button className="kalam-bold" onClick={handleDownload}>Download Document</button>
          </div>
        )}
   

      </form>
      </div>
      </div>
     
   
  );
}

export default Rental;

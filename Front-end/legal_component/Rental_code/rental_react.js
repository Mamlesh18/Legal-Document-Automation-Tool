import axios from 'axios';
import React, { useEffect, useState } from "react"
import './rental.css';
import image from './logo.png';

function Rental() {
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [date, setDate] = useState('');
  const [landlordname, setLandLordName] = useState('');
  const [landlordaddress1, setLandLordAddress1] = useState('');
  const [lordaddressline2, setLandLordAddressLine2] = useState('');
  const [lordcity, setlordcity] = useState('');
  const [lordstate, setlordstate] = useState('');
  const [lordpincode, setlordpincode] = useState('');
  const [tenantname, settenantname] = useState('');
  const [tenantaddress1, settenantaddress1] = useState('');
  const [tenantaddressline2, settenantaddressline2] = useState('');
  const [tencity, settencity] = useState('');
  const [tenstate, settenstate] = useState('');
  const [tenpincode, settenpincode] = useState('');
  const [leasepropertyaddress1, setleasepropertyaddress1] = useState('');
  const [leaseaddressline2, setleaseaddressline2] = useState('');
  const [leasecity, setleasecity] = useState('');
  const [leasestate, setleasestate] = useState('');
  const [leasepincode, setleasepincode] = useState('');
  const [category, setcategory] = useState('');
  const [xbedrooms, setxbedrooms] = useState('');
  const [xbathrooms, setxbathrooms] = useState('');
  const [xcarparks, setxcarparks] = useState('');
  const [xxxxsquarefeet, setxxxxsquarefeet] = useState('');
  const [leaseterm, setleaseterm] = useState('');
  const [leasestartdate, setleasestartdate] = useState('');
  const [onemonthnotice, setonemonthnotice] = useState('');
  const [monthlyrentalintextwords, setmonthlyrentalintextwords] = useState('');
  const [startingmetereading, setstartingmetereading] = useState('');
  const [rentaldeposititextwords, setrentaldeposititextwords] = useState('');
  const [item1, setitem1] = useState('');
  const [item3, setitem2] = useState('');
  const [item2, setitem3] = useState('');

  const [downloadClicked, setDownloadClicked] = useState(false); // State to track if download button is clicked
  const [documentReady, setDocumentReady] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null); // State to store the download URL

 
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/print_info', {city,state,
        date,landlordname,landlordaddress1,lordaddressline2,lordcity,lordstate,lordpincode,
        tenantname,tenantaddress1,tenantaddressline2,tencity,tenstate,tenpincode,leasepropertyaddress1,
        leaseaddressline2,leasecity,leasestate,leasepincode,category,xbedrooms,xbathrooms,xcarparks,
        xxxxsquarefeet,leaseterm,leasestartdate,onemonthnotice,monthlyrentalintextwords,startingmetereading,
        rentaldeposititextwords,item1,item2,item3
      }, { responseType: 'blob' }); // Set responseType to 'blob' to handle binary data
      
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
      link.setAttribute('download', 'updated_document_rental.docx');
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
                <h2 className="kalam-bold">Main Details</h2>
                <label>City:</label>
                <input type="text" value={city} onChange={(e) => setcity(e.target.value)} required />
                <label>State:</label>
                <input type="text" value={state} onChange={(e) => setstate(e.target.value)} required/>
                <label>Date:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
            </div>
            <div>
                <h2 className="kalam-bold">Owner Details</h2>
                <label>Landlord Name:</label>
      <input type="text" value={landlordname} onChange={(e) => setLandLordName(e.target.value)} required/>
  
              <label>landlordaddress1:</label>
                <input
                  type="text"
                  value={landlordaddress1}
                  onChange={(e) => setLandLordAddress1(e.target.value)}
                  required />
                <label>lordaddressline2:</label>
                <input
                  type="text"
                  value={lordaddressline2}
                  onChange={(e) => setLandLordAddressLine2(e.target.value)}
                  required  />
                </div>
                <label>lordcity:</label>
                <input
                  type="text"
                  value={lordcity}
                  onChange={(e) => setlordcity(e.target.value)} required
                />
                <label>lordstate:</label>
                <input
                  type="text"
                  value={lordstate}
                  onChange={(e) => setlordstate(e.target.value)} required
                />
                <label>lordpincode:</label>
                <input
                  type="text"
                  value={lordpincode}
                  onChange={(e) => setlordpincode(e.target.value)} required
                  pattern="\d{6}"

                />
            <div>
                <h2 className="kalam-bold">Tenant Details</h2>
                <label>tenantname:</label>
                <input
                  type="text"
                  value={tenantname}
                  onChange={(e) => settenantname(e.target.value)}  required
                />
                 <label>tenantaddress1:</label>
                <input
                  type="text"
                  value={tenantaddress1}
                  onChange={(e) => settenantaddress1(e.target.value)} required
                />
                 <label>tenantaddressline2:</label>
                <input
                  type="text"
                  value={tenantaddressline2}
                  onChange={(e) => settenantaddressline2(e.target.value)} required
                />
                 <label>tencity:</label>
                <input
                  type="text"
                  value={tencity}
                  onChange={(e) => settencity(e.target.value)} required
                />
                 <label>tenstate:</label>
                <input
                  type="text"
                  value={tenstate}
                  onChange={(e) => settenstate(e.target.value)} required
                />
                 <label>tenpincode:</label>
                <input
                  type="text"
                  value={tenpincode}
                  onChange={(e) => settenpincode(e.target.value)} required
                  pattern="\d{6}"

                />
            </div>
            <div>
              <h2 className="kalam-bold">Lease Details</h2>
              <label>leasepropertyaddress1:</label>
              <input
                type="text"
                value={leasepropertyaddress1}
                onChange={(e) => setleasepropertyaddress1(e.target.value)} required
              />
               <label>leaseaddressline2:</label>
              <input
                type="text"
                value={leaseaddressline2}
                onChange={(e) => setleaseaddressline2(e.target.value)} required
              />
               <label>leasecity:</label>
              <input
                type="text"
                value={leasecity}
                onChange={(e) => setleasecity(e.target.value)} required
              />
               <label>leasestate:</label>
              <input
                type="text"
                value={leasestate}
                onChange={(e) => setleasestate(e.target.value)} required
              />
               <label>leasepincode:</label>
              <input
                type="text"
                value={leasepincode}
                onChange={(e) => setleasepincode(e.target.value)} required
                pattern="\d{6}"

              />
              <label>leaseterm:</label>
              <input
                type="text"
                value={leaseterm}
                onChange={(e) => setleaseterm(e.target.value)} required
              />
              <label>leasestartdate:</label>
              <input
                type="text"
                value={leasestartdate}
                onChange={(e) => setleasestartdate(e.target.value)} required
              />
              <label>onemonthnotice:</label>
              <input
                type="text"
                value={onemonthnotice}
                onChange={(e) => setonemonthnotice(e.target.value)} required
              />
              <label>monthlyrentalintext&words:</label>
              <input
                type="text"
                value={monthlyrentalintextwords}
                onChange={(e) => setmonthlyrentalintextwords(e.target.value)} required
              />
              <label>startingmetereading:</label>
              <input
                type="text"
                value={startingmetereading}
                onChange={(e) => setstartingmetereading(e.target.value)} required
              />
              <label>rentaldeposititext&words:</label>
              <input
                type="text"
                value={rentaldeposititextwords}
                onChange={(e) => setrentaldeposititextwords(e.target.value)} required
              />
            </div>
            <div>
              <h2 className="kalam-bold">Other Details</h2>
              <label>category:</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setcategory(e.target.value)} required
              />
               <label>xbedrooms:</label>
              <input
                type="text"
                value={xbedrooms}
                onChange={(e) => setxbedrooms(e.target.value)} required
              />
               <label>xbathrooms:</label>
              <input
                type="text"
                value={xbathrooms}
                onChange={(e) => setxbathrooms(e.target.value)} required
              />
               <label>xcarparks:</label>
              <input
                type="text"
                value={xcarparks}
                onChange={(e) => setxcarparks(e.target.value)} required
              />
               <label>xxxxsquarefeet:</label>
              <input
                type="text"
                value={xxxxsquarefeet}
                onChange={(e) => setxxxxsquarefeet(e.target.value)} required
              />
              <label>item1:</label>
              <input
                type="text"
                value={item1}
                onChange={(e) => setitem1(e.target.value)} required
              />
              <label>item2</label>
              <input
                type="text"
                value={item2}
                onChange={(e) => setitem2(e.target.value)} required
              />
              <label>item3:</label>
              <input
                type="text"
                value={item3}
                onChange={(e) => setitem3(e.target.value)} required
              />
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

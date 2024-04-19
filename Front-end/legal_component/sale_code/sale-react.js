import axios from 'axios';
import React, {  useState } from "react"
import '../Rental_code/rental.css';
import image from './logo.png';

function Rental() {
  const [pet1name, setpet1name] = useState('');
  const [pet1age, setpet1age] = useState('');
  const [pet1occupation, setpet1occupation] = useState('');
  const [pet1address, setpet1address] = useState('');
  const [pet1mobileNo, setpet1mobileNo] = useState('');
  const [pet1emailid, setpet1emailid] = useState('');
  const [pet2name, setpet2name] = useState('');
  const [pet2age, setpet2age] = useState('');
  const [pet2occupation, setpet2occupation] = useState('');
  const [pet2address, setpet2address] = useState('');
  const [pet2mobileNo, setpet2mobileNo] = useState('');
  const [pet2emailid, setpet2emailid] = useState('');
  const [marriedplace, setmarriedplace] = useState('');
  const [marrieddate, setmarrieddate] = useState('');
  const [religion, setreligion] = useState('');
  const [registarplace, setregistarplace] = useState('');
  const [pet1premarstatus, setpet1premarstatus] = useState('');
  const [pet2premarstatus, setpet2premarstatus] = useState('');
  const [noofchildren, setnoofchildren] = useState('');
  const [childname, setchildname] = useState('');
  const [childage, setchildage] = useState('');
  const [childdob, setchilddob] = useState('');
  const [childcustody, setchildcustody] = useState('');
  const [section, setsection] = useState('');
  const [act, setact] = useState('');
  const [caseno, setcaseno] = useState('');
  const [idproof, setidproof] = useState('');
  const [marriageproof, setmarriageproof] = useState('');
  const [residentialproof, setresidentialproof] = useState('');
  const [propertydocument, setpropertydocument] = useState('');
  const [receipt, setreceipt] = useState('');

  const [downloadClicked, setDownloadClicked] = useState(false); // State to track if download button is clicked
  const [documentReady, setDocumentReady] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
 
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/print_info_divorce', {pet1name,pet1age,pet1occupation,pet1address,
      pet1mobileNo,pet1emailid,pet2name,pet2age,pet2occupation,pet2address,pet2mobileNo,
      pet2emailid,marriedplace,marrieddate,religion,registarplace,pet1premarstatus,pet2premarstatus,
      noofchildren,childname,childage,childdob,childcustody,section,act,caseno,idproof,marriageproof,
      residentialproof,propertydocument,receipt

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
      link.setAttribute('download', 'updated_document_divorce.docx');
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
                <h2 className="kalam-bold">1st Petitioner Details</h2>

                <label>Name:</label>
                <input type="text" value={pet1name} onChange={(e) => setpet1name(e.target.value)} required/>
                <label>Age:</label>
                <input type="text" value={pet1age} onChange={(e) => setpet1age(e.target.value)} required/>
                <label>Occupation:</label>
                <input type="text" value={pet1occupation} onChange={(e) => setpet1occupation(e.target.value)} required/>
                <label>Address:</label>
                <input type="text" value={pet1address} onChange={(e) => setpet1address(e.target.value)} required/>
                <label>Mobile Number: </label>
                <input type="text" value={pet1mobileNo} onChange={(e) => setpet1mobileNo(e.target.value)} required/>
                <label>Email ID:</label>
                <input type="text" value={pet1emailid} onChange={(e) => setpet1emailid(e.target.value)} required/>
            </div>
            
            <div>
                <h2 className="kalam-bold">2nd Petitioner Details</h2>
                <label>Name:</label>
                <input type="text" value={pet2name} onChange={(e) => setpet2name(e.target.value)} required/>
                <label>Age:</label>
                <input type="text" value={pet2age} onChange={(e) => setpet2age(e.target.value)} required/>
                <label>Occupation:</label>
                <input type="text" value={pet2occupation} onChange={(e) => setpet2occupation(e.target.value)} required/>
                <label>Address:</label>
                <input type="text" value={pet2address} onChange={(e) => setpet2address(e.target.value)} required/>
                <label>Mobile Number: </label>
                <input type="text" value={pet2mobileNo} onChange={(e) => setpet2mobileNo(e.target.value)} required/>
                <label>Email ID:</label>
                <input type="text" value={pet2emailid} onChange={(e) => setpet2emailid(e.target.value)} required/>

            </div>
            
            <div>
                <h2 className="kalam-bold">Marraige Details</h2>
                <label>Place of Marraige:</label>
                <input type="text" value={marriedplace} onChange={(e) => setmarriedplace(e.target.value)} required/>
                <label>Date of Marraige:</label>
                <input type="text" value={marrieddate} onChange={(e) => setmarrieddate(e.target.value)} required/>
                <label>Religion</label>
                <input type="text" value={religion} onChange={(e) => setreligion(e.target.value)} required />
                <label>Place of Registrar</label>
                <input type="text" value={registarplace} onChange={(e) => setregistarplace(e.target.value)} required/>
            </div>
            
            <div>
                <h2 className="kalam-bold">Premarital Status</h2>
                <label>Premarital Status of the 1st Petitioner</label>
                <input type="text" value={pet1premarstatus} onChange={(e) => setpet1premarstatus(e.target.value)} required/>
                <label>Premarital Status of the 2nd Petitioner</label>
                <input type="text" value={pet2premarstatus} onChange={(e) => setpet2premarstatus(e.target.value)} required/>

            </div>
            
            <div>
                <h2 className="kalam-bold">Children Details "if any"</h2>
                <label>Number of Children</label>
                <input type="text" value={noofchildren} onChange={(e) => setnoofchildren(e.target.value)} required/>
                <label>Name</label>
                <input type="text" value={childname} onChange={(e) => setchildname(e.target.value)} required/>
                <label>Age</label>
                <input type="text" value={childage} onChange={(e) => setchildage(e.target.value)} required/>
                <label>Date of Birth</label>
                <input type="text" value={childdob} onChange={(e) => setchilddob(e.target.value)} required/>
                <label>Custody</label>
                <input type="text" value={childcustody} onChange={(e) => setchildcustody(e.target.value)} required/>
            </div>
            
            <div>
                <h2 className="kalam-bold">Case Details</h2>
                <label>Section</label>
                <input type="text" value={section} onChange={(e) => setsection(e.target.value)} required/>
                <label>Act</label>
                <input type="text" value={act} onChange={(e) => setact(e.target.value)} required/>
                <label>Case Number</label>
                <input type="text" value={caseno} onChange={(e) => setcaseno(e.target.value)} required/>
            </div>
            
            <div>
                <h2 className="kalam-bold">Document Details "Yes/No and also Mention ID"</h2>
                <label>ID Proof</label>
                <input type="text" value={idproof} onChange={(e) => setidproof(e.target.value)} required/>
                <label>Marraige Proof</label>
                <input type="text" value={marriageproof} onChange={(e) => setmarriageproof(e.target.value)} required/>
                <label>Residential Proof</label>
                <input type="text" value={residentialproof} onChange={(e) => setresidentialproof(e.target.value)} required/>
                <label>Property Document</label>
                <input type="text" value={propertydocument} onChange={(e) => setpropertydocument(e.target.value)} required />
                <label>Reciept</label>
                <input type="text" value={receipt} onChange={(e) => setreceipt(e.target.value)} required />
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

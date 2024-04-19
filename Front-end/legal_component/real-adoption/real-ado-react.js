import axios from 'axios';
import React, { useEffect, useState } from "react"
import '../Rental_code/rental.css';
import image from './logo.png';




function Rental() {
const [casenumber, setcasenumber] = useState('');
const [caseyear, setcaseyear] = useState('');
const [childname, setchildname] = useState('');
const [childdob, setchilddob] = useState('');
const [childgender, setchildgender] = useState('');
const [childreligion, setchildreligion] = useState('');
const [petitionerfathername, setpetitionerfathername] = useState('');
const [petitionerparentnameoffather, setpetitionerparentnameoffather] = useState('');
const [petitionermothername , setpetitionermothername ] = useState('');
const [petitioneraddress, setpetitioneraddress] = useState('');
const [respondentfathername, setrespondentfathername] = useState('');
const [respondentparentnameoffather, setrespondentparentnameoffather] = useState('');
const [petitioner1religion , setpetitioner1religion ] = useState('');
const [petitioner2religion, setpetitioner2religion] = useState('');
const [petitioner1age, setpetitioner1age] = useState('');
const [petitioner2age, setpetitioner2age] = useState('');
const [advocatename, setadvocatename] = useState('');
const [advocateenrollment, setadvocateenrollment] = useState('');
const [advocateoffice, setadvocateoffice] = useState('');
const [advocatenumber, setadvocatenumber] = useState('');
const [respondent1religion, setrespondent1religion] = useState('');
const [respondent1age, setrespondent1age] = useState('');
const [respondentaddress, setrespondentaddress] = useState('');
const [respondentmothername, setrespondentmothername] = useState('');
const [respondent2age, setrespondent2age] = useState('');
const [respondentmarriagedate, setrespondentmarriagedate] = useState('');
const [childregistrationnumber, setchildregistrationnumber] = useState('');
const [registrationdate, setregistrationdate] = useState('');
const [handoverdate, sethandoverdate] = useState('');
const [adoptiondate, setadoptiondate] = useState('');
const [permissiondate, setpermissiondate] = useState('');
const [datetoday, setdatetoday] = useState('');
 
const [downloadClicked, setDownloadClicked] = useState(false); // State to track if download button is clicked
const [documentReady, setDocumentReady] = useState(false);
const [downloadUrl, setDownloadUrl] = useState(null); 
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/print_info_real_adoption', {casenumber,caseyear,childname,
      childdob,childgender,childreligion,petitionerfathername,petitionerparentnameoffather,petitionermothername ,
      petitioneraddress,respondentfathername,respondentparentnameoffather,petitioner1religion, petitioner1age ,
      petitioner2religion,petitioner2age,advocatename,advocateenrollment,advocateoffice,advocatenumber,
      respondent1religion,respondent1age,respondentaddress,respondentmothername,respondent2age,
      respondentmarriagedate,childregistrationnumber,registrationdate,handoverdate,adoptiondate,
      permissiondate,datetoday

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
      link.setAttribute('download', 'updated_document_adoption.docx');
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
                <h2 className="kalam-bold">Case Details</h2>
                <label>Case Number:</label>                 
                <input type="text" value={casenumber} onChange={(e) => setcasenumber(e.target.value)} required/>
                <label>Case Year:</label>                 
                <input type="text" value={caseyear} onChange={(e) => setcaseyear(e.target.value)} required/>
          </div>

          <div>
                <h2 className="kalam-bold">Child Details</h2>
                <label>Name:</label>                 
                <input type="text" value={childname} onChange={(e) => setchildname(e.target.value)} required/>
                <label>Date of Birth:</label>                 
                <input type="text" value={childdob} onChange={(e) => setchilddob(e.target.value)} required/>
                <label>Gender:</label>                 
                <input type="text" value={childgender} onChange={(e) => setchildgender(e.target.value)} required/>
                <label>Religion:</label>                 
                <input type="text" value={childreligion} onChange={(e) => setchildreligion(e.target.value)} required/>
          </div>

          <div>
                <h2 className="kalam-bold">Petitioner Details</h2>
                <label>Father's Name:</label>                 
                <input type="text" value={petitionerfathername} onChange={(e) => setpetitionerfathername(e.target.value)} required/>
                <label>Parent of the Father:</label>                 
                <input type="text" value={petitionerparentnameoffather} onChange={(e) => setpetitionerparentnameoffather(e.target.value)} required />
                <label>Mother's Name:</label>                 
                <input type="text" value={petitionermothername } onChange={(e) => setpetitionermothername (e.target.value)} required/>
                <label>Address:</label>                 
                <input type="text" value={petitioneraddress} onChange={(e) => setpetitioneraddress(e.target.value)} required/>
                <label>1st Petitioner's Religion:</label>                 
                <input type="text" value={petitioner1religion} onChange={(e) => setpetitioner1religion(e.target.value)} required/>
                <label>2nd Petitioner's Religion:</label>                 
                <input type="text" value={petitioner2religion} onChange={(e) => setpetitioner2religion(e.target.value)} required />
                <label>1st Petitioner Age:</label>        
                <input type="text" value={petitioner1age} onChange={(e) => setpetitioner1age(e.target.value)} required/>
                <label>2nd Petitioner Age:</label>        
                <input type="text" value={petitioner2age} onChange={(e) => setpetitioner2age(e.target.value)} required/>
          </div>
          
          <div>
                <h2 className="kalam-bold">Case Details</h2>
                <label>Case Number:</label>                 
                <input type="text" value={casenumber} onChange={(e) => setcasenumber(e.target.value)} required/>
                <label>Case Year:</label>                 
                <input type="text" value={caseyear} onChange={(e) => setcaseyear(e.target.value)} required/>
          </div>
          <div>
                <label>Responded Details:</label>                 
                <input type="text" value={respondentfathername} onChange={(e) => setrespondentfathername(e.target.value)} required/>
                <label>Father's Name:</label>                 
                <input type="text" value={respondentparentnameoffather} onChange={(e) => setrespondentparentnameoffather(e.target.value)} required/>
                <input type="text" value={respondent1religion} onChange={(e) => setrespondent1religion(e.target.value)} required/>
                <label>1st Respondent Age:</label>                 
                <input type="text" value={respondent1age} onChange={(e) => setrespondent1age(e.target.value)} required/>
                <label>2nd Respondent Age:</label>                 
                <input type="text" value={respondent2age} onChange={(e) => setrespondent2age(e.target.value)} required/>
                <label>Respondent Address:</label>                 
                <input type="text" value={respondentaddress} onChange={(e) => setrespondentaddress(e.target.value)} required/>
                <label>Mother's Name:</label>                 
                <input type="text" value={respondentmothername} onChange={(e) => setrespondentmothername(e.target.value)} required/>
                <label>Address:</label>                 
                <input type="text" value={respondentaddress } onChange={(e) => setrespondentaddress (e.target.value)} required/>
                <label>Marraige Date:</label>                 
                <input type="text" value={respondentmarriagedate} onChange={(e) => setrespondentmarriagedate(e.target.value)} required/>
          </div>

          <div>
                <h2 className="kalam-bold">Other Details</h2>
                <label>Child Registration Number:</label>                 
                <input type="text" value={childregistrationnumber} onChange={(e) => setchildregistrationnumber(e.target.value)} required/>
                <label>Registration Date:</label>                 
                <input type="text" value={registrationdate} onChange={(e) => setregistrationdate(e.target.value)} required/>
                <label>Hand Over Date:</label>                 
                <input type="text" value={handoverdate} onChange={(e) => sethandoverdate(e.target.value)} required/>
                <label>Adoption Date:</label>                 
                <input type="text" value={adoptiondate} onChange={(e) => setadoptiondate(e.target.value)} required/>
                <label>Permission Date:</label>                 
                <input type="text" value={permissiondate} onChange={(e) => setpermissiondate(e.target.value)} required/>
                <label>Date of Submission:</label>                 
                <input type="text" value={datetoday} onChange={(e) => setdatetoday(e.target.value)} required/>
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

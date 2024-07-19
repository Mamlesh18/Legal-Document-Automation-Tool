import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import Chatbot from '../chat-bot/chat-react'; // Import the Chatbot component
import logo1 from './sale.png';
import logo2 from './rent2.png';
import logo3 from './divorce.png';
import logo4 from './adoption.png';
import logo5 from './botlogo.png'
import backgroundImage from './back.png'; // Import the background image

function Main() {
    const [isChatbotOpen, setIsChatbotOpen] = useState(true); // Set chatbot open by default

      const bodyMainStyle = {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0 ,
        backgroundImage: `url(${backgroundImage})`, // Use the imported background image
        backgroundPosition: 'center',
        backgroundSize: '100% 120%', // Update background size
        height: '1280px'
    };

    const containerStyle = {
        width: '100%',
        paddingTop: '10px',
        paddingLeft:'500px',
        position: 'center',
    };

    const navbarRightStyle = {
        textAlign: 'right',
        padding: '150px 20px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#966f2b',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginLeft: '10px',
        textDecoration: 'none',
    };

    const buttonHoverStyle = {
        backgroundColor: '#453610',
    };

    const contentStyle = {
        marginTop: '50px',
    };

    const boxStyle = {
        display: 'inline-block',
        width: '200px',
        height: '250px',
        margin: '0 10px',
        textAlign: 'center',
        verticalAlign: 'middle',
        position: 'relative',
    };

    const boxImgStyle = {
        maxWidth: '50%', // Adjusted width
        maxHeight: '50%', // Adjusted height
        margin: 'auto', // Center the image
    };


    const boxH2Style = {
        margin: '10px 0 0',
        color: 'black',


    };

    const chanGer = {
        fontFamily: 'Arial, sans-serif',
        color:"#453610",
        paddingLeft:'600px',
        paddingTop: '250px',

    };
    const chatbotStyle = {
        position: 'fixed',
        bottom: '40px', // Increase the bottom spacing to move it up
        right: '20px',
        zIndex: '9999',
        border: '1px solid #ccc', // Add a border
        backgroundColor: '#fff', // Set background color
        borderRadius: '5px', // Add some border radius for a rounded appearance
        padding: '10px', // Add some padding for content spacing
    };
    

    return (
    
        <div style={bodyMainStyle}>
                    <div style={chatbotStyle}>

            {isChatbotOpen && <Chatbot setIsChatbotOpen={setIsChatbotOpen} />} {/* Render Chatbot at the top */}
            </div>

            <div style={navbarRightStyle}>
                <NavLink to="/login_react" >
                    <a style={buttonStyle}>Log In</a>
                </NavLink>
            </div>
            <h1 style={chanGer}>Automated Legal Documentation Assistant</h1>
            <div style={containerStyle}>
                <div style={contentStyle}>
                    <NavLink to="/rental_react" >
                        <div style={boxStyle}>
                            <div><img src={logo2} alt="Logo" style={boxImgStyle} /></div>
                            <h2 style={boxH2Style}>Rental</h2>
                        </div>
                    </NavLink>
                    <NavLink to="/sale-react" >
                        <div style={boxStyle}>
                            <div><img src={logo3} alt="Logo" style={boxImgStyle} /></div>
                            <h2 style={boxH2Style}>Divorce</h2>
                        </div>
                    </NavLink>
                    <NavLink to="/real-ado-react" >

                    <div style={boxStyle}>
                        <div><img src={logo4} alt="Logo" style={boxImgStyle} /></div>
                        <h2 style={boxH2Style}>Adoption</h2>
                    </div>
                    </NavLink>

                    <NavLink to="/real-sale" >
                        <div style={boxStyle}>
                            <div><img src={logo1} alt="Logo" style={boxImgStyle} /></div>
                            <h2 style={boxH2Style}>Sale Deed</h2>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Main;

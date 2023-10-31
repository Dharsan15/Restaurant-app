import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://imgs.search.brave.com/6VbXxTy04eTESNJ_31xRg1N7qysKOAtWMfOEn0v3SFI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vNmQwYTk0/MzItYTQ0Ni00ZDI3/LWE3N2MtNjBlMGRh/YmRlZmFmL2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0x/JnY9NjM2NjQyMjU2/MzU0NTcwMDAw.jpeg"
      />
    </div>
    <div className="nav-list">
      <ul className="list-items">
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const CardLayout = () => {

     <div className="restro-card">
            <img src=""/>

     </div>
    
}

const Body = () => <div className="body"></div>;

const AppLayout = () => <div></div>;

const root = ReactDOM.createRoot(document.getElementById("main"));

root.render(<Header />);

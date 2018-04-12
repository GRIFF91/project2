import React from 'react';

import "./footer.css";


const footer = (props) => {
    return (
    <div>
        <footer className="page-footer">
          <p id="contact"><a id="contact">Contact Me</a></p>
          <p id="email">example@email.com</p>
          <p id="facebook">Facebook:<a href="#" class="fa fa-facebook"></a></p>
          <p id="twitter">Twitter:<a href="#" class="fa fa-twitter"></a></p>
        </footer>
    </div>
    )
};

export default footer;
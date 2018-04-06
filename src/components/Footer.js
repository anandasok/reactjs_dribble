import React from 'react';

// Custom components
import FooterCol1 from './FooterCol1';
import FooterCol2 from './FooterCol2';
import FooterCol3 from './FooterCol3';
import FooterCol4 from './FooterCol4';
import FooterCol5 from './FooterCol5';

const Footer = () => {
    return(
        <div id="footer">
            <div id="footer-inner">
                <div className="container-fluid">
                    <div className="col-md-3 footer-col">
                        <FooterCol1 />
                    </div>

                    <div className="col-md-2 footer-col">
                        <FooterCol2 />
                    </div>

                    <div className="col-md-2 footer-col">
                        <FooterCol3 />
                    </div>

                    <div className="col-md-2 footer-col">
                        <FooterCol4 />
                    </div>

                    <div className="col-md-3 footer-col">
                        <FooterCol5 />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;
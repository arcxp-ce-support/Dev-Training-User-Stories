import React from 'react';
import './default.scss';
import PropTypes from 'prop-types';

const BasicLayout = (props) => {
    const [header, main, aside, footer] = props.children;

    return (
        <div>
            <div>
                <header className='col-lg-12 header'>
                    {header}
                </header>
                <div className="row">
                    <div className='col-md-8 main'>
                        {main}
                    </div>
                    <div className='col-md-4 aside'>
                        {aside}
                    </div>
                </div>
                <footer className='col-lg-12 footer'>
                    {footer}
                    <p>Copyright © 2020</p>
                </footer>
            </div>
        </div>
    )
 };

 BasicLayout.propTypes = {
    children: PropTypes.node,
  };

 BasicLayout.sections = ['Header', 'Main', 'Right Column', 'Footer'];
 
 export default BasicLayout;
import React, { useState } from 'react'
import Chart1 from './Chart1';
import "./Accounting.scss";
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './Chart4';
import { useMenuItemContext } from '../../components/context/Context';
import Header from '../../components/header/Header';

function Accounting() {
  const [show, setShow] = useState({
    menu: false,
  });
  const links = useMenuItemContext();
  const ownLinks = links[5].subLinks;  
  const menuLinks = links[5].menuLinks; 
  const rightLinks = ownLinks[0].subLinks;
  const moreLinks = links[5].moreLinks;
  return (
    <div className="Accounting pb-5">
      <div className="conatiner-fluid ">
      <Header data={ownLinks} rightLinks={rightLinks} moreLinks={moreLinks} menuLinks={menuLinks}/>
        <div className='row px-5 pt-5'>
        <Chart1 />
        <Chart2 />
        <Chart3 />
        <Chart4 />
        </div>
      </div>
    
    </div>
  )
}

export default Accounting;
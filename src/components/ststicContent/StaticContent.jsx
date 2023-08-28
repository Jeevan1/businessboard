import React from 'react';
import {LiaPenAltSolid} from "react-icons/lia";
import {TbMessageQuestion} from "react-icons/tb";
import "./StaticContent.scss";

function StaticContent({name, desc}) {
  return (
    <div className='StaticContent d-flex justify-content-center align-items-center flex-column gap-4'>
        <div>
            <LiaPenAltSolid className='icon text-secondary' style={{fontSize: '80px'}}/>
        </div>
        <div>
            <p className=' text-secondary pb-2' style={{fontSize: '17px'}}>You haven’t entered any {name}. Create your first one with ‘New {name}’.</p>
        </div>
        <div className='d-flex gap-3 text-secondary p-3 border border-3 rounded rounded-2' style={{maxWidth: '420px'}}>
            <TbMessageQuestion className = "icon w-25 h-25 d-flex alifn-items-start" style={{fontSize: '130px'}}/>
            <small>{desc}</small>
        </div>
    </div>
  )
}

export default StaticContent
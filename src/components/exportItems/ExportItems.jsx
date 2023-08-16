import React, { useEffect, useState } from 'react';
import "./ExportItems.scss";
import {HiOutlineChevronDown, HiOutlineChevronUp} from "react-icons/hi";
import {RxCross2} from "react-icons/rx";
import { useExportItemContext } from '../context/Context';

function ExportItems() {
  const [exportItem,setExportItem] = useExportItemContext();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExportItem({state:false});
    }, 5000)
  })
  return (
    <div className='ExportItems border rounded-1 shadow'>
        <div className="ExportItems__header p-3 d-flex justify-content-between align-items-center">
            <p>1 task(s) processing</p>
            <div className='d-flex align-items-center gap-3'>
                {!hide && <HiOutlineChevronDown className='icon' onClick={() => setHide(true)}/>}
                {hide && <HiOutlineChevronUp className='icon' onClick={() => setHide(false)}/>}
                <RxCross2 className='icon' onClick={() => setExportItem({state:false})}/>
            </div>
        </div>
        {!hide && <div className="ExportItems__content d-flex p-3 align-items-center justify-content-between">
            <p>Preparing Download: {exportItem.item}</p>
            <img src="./img/img/loading.gif" alt="" />
        </div>}
    </div>
  )
}

export default ExportItems;
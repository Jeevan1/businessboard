import React, { useState } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {FiChevronRight} from "react-icons/fi";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {BiChevronDown, BiSolidCircle} from "react-icons/bi";



const Chart4 = () => {
  const [active, setActive] = useState({
    trans: false,
    days:false,
  })
  const options = {
    chart: {
      type: 'pie'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        },
        showInLegend: true
      }
    },
    series: [
      {
        name: 'Data Series',
        data: [
          { name: 'Category A', y: 30, z: 5 }, // Here, 'z' represents the radius
          { name: 'Category B', y: 20, z: 10 },
          { name: 'Category C', y: 50, z: 15 }
        ]
      }
    ]
  };

  return (
    
        <div className="Accounting__content col-lg-6">
         <div className="container  border shadow rounded">
         <div className="Accounting__content__header d-flex justify-content-between align-items-center p-3">
            <div className="Accounting__content__header__1 d-flex align-items-center gap-2 text-primary">
              <h5>Payenments Breakdown </h5>
              <AiOutlineQuestionCircle className={'icon'}/>
            </div>
            <div className="Accounting__content__header__2 text-end py-1 d-flex">
          
              <div>
              <div>
              <div onClick={() =>setActive({trans: !active.days})}>
                <span className="">Last 3 months</span>
                <BiChevronDown className='icon' />
                </div>
          
                {active.days && <div className="sub__links">
                  <span>Include unreviewed transactions</span>
                  <span>Exclude unreviewed transactions</span>
                </div>}
              </div>
              </div>
            </div>
          </div>
          <div className="Accounting__content__data  align-items-center">
          <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
         </div>
        </div>
 
  );
}

export default Chart4;

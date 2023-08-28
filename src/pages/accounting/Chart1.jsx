import React, { useState } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {FiChevronRight} from "react-icons/fi";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {BiChevronDown, BiSolidCircle} from "react-icons/bi";



const Chart1 = () => {
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
    
        <div className="Accounting__content col-lg-6 ">
          <div className="container border shadow rounded">
          <div className="Accounting__content__header d-flex justify-content-between align-items-center p-3">
            <div className="Accounting__content__header__1 d-flex align-items-center gap-2 text-primary">
              <h5>Profit & Loss</h5>
              <AiOutlineQuestionCircle className={'icon'}/>
            </div>
            <div className="Accounting__content__header__2 text-end py-1">
              <div>
                <div>
                <div onClick={() =>setActive({trans: !active.trans})}>
                <span className="">Exclude unreviewed transactions</span>
                <BiChevronDown className='icon' />
                </div>
                {active.trans && <div className="sub__links">
                  <span>Include unreviewed transactions</span>
                  <span>Exclude unreviewed transactions</span>
                </div>}
                </div>
              </div>
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
          <div className="Accounting__content__data row align-items-center">
            <div className="chart col-lg-6">
            <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
            <div className="data col-lg-6 d-flex flex-column gap-2 px-3 py-0">
              <div className="data__1 w-100 border p-2 d-flex justify-content-between align-items-center">
                <div className="data__1__left">
                  <div className="d-flex align-items-center gap-2">
                    <BiSolidCircle className='icon text-info' />
                    NPR0
                  </div>
                  <small className="text-secondary">INCOME</small>
                </div>
                <div className="data__1__right">
                  <FiChevronRight className="icon"/>
                </div>
              </div>
              <div className="data__1 w-100 border p-2 d-flex justify-content-between align-items-center">
                <div className="data__1__left">
                  <div className="d-flex align-items-center gap-2">
                    <BiSolidCircle className='icon text-warning' />
                    NPR0
                  </div>
                  <small className="text-secondary">EXPENSE</small>
                </div>
                <div className="data__1__right">
                  <FiChevronRight className="icon"/>
                </div>
              </div>
              <div className="data__1 w-100 border p-2 d-flex justify-content-between align-items-center">
                <div className="data__1__left">
                  <div className="d-flex align-items-center gap-2">
                    <BiSolidCircle className='icon text-success' />
                    NPR0
                  </div>
                  <small className="text-secondary">PROFIT</small>
                </div>
                <div className="data__1__right">
                  <FiChevronRight className="icon"/>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
 
  );
}

export default Chart1;

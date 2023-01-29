import React from 'react';
import './minPageStyles';
import Header from './Header.jsx';
import Sider from './Sider.jsx';
import Tracking from './Tracking.jsx';
import Graph from './Graph.jsx';
export default function MainPage() {
  return (
    <div className="mainPage">
      <div className="headerDiv ">
        <div className="logoDiv"> Logo</div>
        <div className="utilsDiv"> Utils</div>
      </div>

      <div className="contentDiv">
        <div className="siderDiv">
          <Sider />
        </div>
        <div className="utilityDiv">
          <div className="trackingTabs">
            <Tracking />
          </div>
          <div className="graphDiv">
            <Graph />
          </div>
        </div>
      </div>
    </div>
  );
}

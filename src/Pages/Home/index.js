import React, { PureComponent } from "react";

class Home extends PureComponent {
  render() {
    return (
      <div className="container-fluid">
        <div className="body teacher-profile">
          <div className="profile">
            <div className="row c1">
              <div className="col-md-4">
                <div className="cell s1">
                  <i className="fa fa-users" />
                  <h4>登录用户</h4>
                  <h5>13,000</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cell s2">
                  <i className="fa fa-registered" />
                  <h4>新增注册</h4>
                  <h5>12,00</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cell s3">
                  <i className="fa fa-camera" />
                  <h4>课程新增学员</h4>
                  <h5>123</h5>
                </div>
              </div>
            </div>
            <div className="row c1">
              <div className="col-md-4">
                <div className="cell s4">
                  <i className="fa fa-safari" />
                  <h4>班级新增学员</h4>
                  <h5>666</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cell s5">
                  <i className="fa fa-opera" />
                  <h4>新增会员</h4>
                  <h5>1122</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cell s6">
                  <i className="fa fa-question" />
                  <h4>未回复问答</h4>
                  <h5>236</h5>
                </div>
              </div>
            </div>
            <div className="lk-chart">
              <div className="chart">
                <div id="main1" style={{height: '400px'}} />
              </div>
              <div className="chart">
                <div id="main2" style={{height: '400px'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home

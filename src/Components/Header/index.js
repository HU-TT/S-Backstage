import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Header extends PureComponent {
  render () {
    return (
      <div className="header">
      <nav className="navbar navbar-custom">
          <div className="navbar-header">
              <Link to='/home' className="navbar-brand">数据分发管理系统</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
              <li><Link to=''><i className="fa fa-cloud-upload"></i>教育云中心</Link></li>
              <li><Link to=''><i className="fa fa-xing"></i>CRM对接中心</Link></li>
              <li><Link to=''><i className="fa fa-yelp"></i>分销中心</Link></li>
              <li><Link to=''><i className="fa fa-user"></i>个人中心</Link></li>
              <li><Link to=''><i className="fa fa-bell"></i><span className="badge">20</span></Link></li>
              <li><Link to=''><i className="fa fa-sign-out"></i>退出</Link></li>
          </ul>
      </nav>
  </div>
    )
  }
}

export default Header

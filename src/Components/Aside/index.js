import React, { PureComponent } from 'react'
import { Link, withRouter } from 'react-router-dom';
import Avatar from '../../Common/uploads/avatar.png'

class Aside extends PureComponent {
  render () {
		const { location } = this.props
    return (
      <div className="aside">
            <div className="profile">
                <div className="avatar img-circle">
                    <img src={Avatar} />
                </div>
                <h4>旋之华</h4>
            </div>
            <div className="navs">
                <ul className="list-unstyled">
                    <li>
                        <Link to='/home' className={ location.pathname === '/home' ? 'active' : ''}>
                            <i className="fa fa-area-chart"></i>
                            数据分析
                        </Link>
                    </li>
                    <li>
                        <Link to='/user' className={ location.pathname === '/user' ? 'active' : ''}>
                            <i className="fa fa-users"></i>
                            用户中心
                        </Link>
                    </li>
                    <li>
                        <Link to=''>
                            <i className="fa fa-object-group"></i>
                            课程管理
                            <i className="arrow fa fa-angle-right"></i>
                        </Link>
                        <ul className="list-unstyled">
                            <li>
                                <Link href="./course_add.html">
                                    课程添加
                                </Link>
                            </li>
                            <li>
                                <Link href="./course_list.html">
                                    课程列表
                                </Link>
                            </li>
                            <li>
                                <Link href="./course_category.html">
                                    课程分类
                                </Link>
                            </li>
                            <li>
                                <Link href="./course_topic.html">
                                    课程专题
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="docent_list.html">
                            <i className="fa fa-bars"></i>
                            运营中心
                        </Link>
                    </li>
                    <li>
                        <Link href="sowing_list.html">
                            <i className="fa fa-calculator"></i>
                            LK建模中心
                        </Link>
                    </li>
                    <li>
                        <Link to=''>
                            <i className="fa fa-cog"></i>
                            设置中心
                            <i className="arrow fa fa-angle-right"></i>
                        </Link>
                        <ul className="list-unstyled">
                            <li><Link to=''>站点设置</Link></li>
                            <li><Link to=''>用户设置</Link></li>
                            <li><Link to=''>角色管理</Link></li>
                            <li><Link to=''>课程设置</Link></li>
                            <li><Link to=''>运营设置</Link></li>
                            <li><Link to=''>财务设置</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
  }
}

export default withRouter(Aside)

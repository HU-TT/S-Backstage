import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Rotation extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="body advert">
                    <ol className="breadcrumb">
                        <li><Link to=''>建模管理</Link></li>
                        <li className="active">建模列表</li>
                    </ol>
                    <div className="page-title">
                        <Link href="sowing_add.html" className="btn btn-danger btn-sm pull-right">添加模块</Link>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <form action="" className="form-inline">
                                <select name="" className="form-control input-sm">
                                    <option value="">按课程</option>
                                </select>
                                <select name="" className="form-control input-sm">
                                    <option value="">按学科</option>
                                </select>
                                <select name="" className="form-control input-sm">
                                    <option value="">按热度</option>
                                </select>
                                <select name="" className="form-control input-sm">
                                    <option value="">按日期</option>
                                </select>
                                <button className="btn btn-primary btn-sm">排序</button>
                            </form>
                        </div>
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <td>序号</td>
                                <th>模块名称</th>
                                <th>模块类型</th>
                                <th>上架时间</th>
                                <th>下架时间</th>
                                <th>访问次数</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>LK001</td>
                                <td>玩转H5+C3</td>
                                <td>录播课程</td>
                                <td>2010/10/01</td>
                                <td>2020/10/07</td>
                                <td>1900</td>
                                <td>
                                    <Link to='' className="btn btn-primary btn-xs">编辑</Link>
                                    <Link to='' className="btn btn-danger btn-xs">删除</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>LK002</td>
                                <td>玩转H5+C3</td>
                                <td>录播课程</td>
                                <td>2010/10/01</td>
                                <td>2020/10/07</td>
                                <td>1900</td>
                                <td>
                                    <Link to='' className="btn btn-primary btn-xs">编辑</Link>
                                    <Link to='' className="btn btn-danger btn-xs">删除</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>LK003</td>
                                <td>玩转H5+C3</td>
                                <td>录播课程</td>
                                <td>2010/10/01</td>
                                <td>2020/10/07</td>
                                <td>1900</td>
                                <td>
                                    <Link to='' className="btn btn-primary btn-xs">编辑</Link>
                                    <Link to='' className="btn btn-danger btn-xs">删除</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>LK004</td>
                                <td>玩转H5+C3</td>
                                <td>录播课程</td>
                                <td>2010/10/01</td>
                                <td>2020/10/07</td>
                                <td>1900</td>
                                <td>
                                    <Link to='' className="btn btn-primary btn-xs">编辑</Link>
                                    <Link to='' className="btn btn-danger btn-xs">删除</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>LK005</td>
                                <td>玩转H5+C3</td>
                                <td>录播课程</td>
                                <td>2010/10/01</td>
                                <td>2020/10/07</td>
                                <td>1900</td>
                                <td>
                                    <Link to='' className="btn btn-primary btn-xs">编辑</Link>
                                    <Link to='' className="btn btn-danger btn-xs">删除</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>LK006</td>
                                <td>玩转H5+C3</td>
                                <td>录播课程</td>
                                <td>2010/10/01</td>
                                <td>2020/10/07</td>
                                <td>1900</td>
                                <td>
                                    <Link to='' className="btn btn-primary btn-xs">编辑</Link>
                                    <Link to='' className="btn btn-danger btn-xs">删除</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>LK007</td>
                                <td>玩转H5+C3</td>
                                <td>录播课程</td>
                                <td>2010/10/01</td>
                                <td>2020/10/07</td>
                                <td>1900</td>
                                <td>
                                    <Link to='' className="btn btn-primary btn-xs">编辑</Link>
                                    <Link to='' className="btn btn-danger btn-xs">删除</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>LK008</td>
                                <td>玩转H5+C3</td>
                                <td>录播课程</td>
                                <td>2010/10/01</td>
                                <td>2020/10/07</td>
                                <td>1900</td>
                                <td>
                                    <Link to='' className="btn btn-primary btn-xs">编辑</Link>
                                    <Link to='' className="btn btn-danger btn-xs">删除</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>LK009</td>
                                <td>玩转H5+C3</td>
                                <td>录播课程</td>
                                <td>2010/10/01</td>
                                <td>2020/10/07</td>
                                <td>1900</td>
                                <td>
                                    <Link to='' className="btn btn-primary btn-xs">编辑</Link>
                                    <Link to='' className="btn btn-danger btn-xs">删除</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>LK010</td>
                                <td>玩转H5+C3</td>
                                <td>录播课程</td>
                                <td>2010/10/01</td>
                                <td>2020/10/07</td>
                                <td>1900</td>
                                <td>
                                    <Link to='' className="btn btn-primary btn-xs">编辑</Link>
                                    <Link to='' className="btn btn-danger btn-xs">删除</Link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <ul className="pagination pull-right">
                        <li><Link href="#">上一页</Link></li>
                        <li><Link href="#">1</Link></li>
                        <li><Link href="#">2</Link></li>
                        <li><Link href="#">3</Link></li>
                        <li><Link href="#">4</Link></li>
                        <li><Link href="#">5</Link></li>
                        <li><Link href="#">下一页</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Rotation;
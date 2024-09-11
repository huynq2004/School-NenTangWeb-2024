import React from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import { FaHome, FaCalendarAlt, FaTachometerAlt, FaRegUserCircle, FaThLarge } from 'react-icons/fa';
function Sidebar(props) {
    return (
        <div style={{ width: '20vw', textAlign: 'left'}}>
            <h2>TLU</h2>
            <hr/>
            <ul style={{listStyleType: 'none'}}>
                <li><FaHome/> <a href={''} style={{textDecoration: "none"}}>Trang chủ</a></li>
                <li><FaCalendarAlt/> <a href={''} style={{textDecoration: "none"}}>Quản lý khóa học</a></li>
                <li><FaTachometerAlt/> <a href={''} style={{textDecoration: "none"}}>Quản lý sinh viên</a></li>
                <li><FaRegUserCircle/> <a href={''} style={{textDecoration: "none"}}>Quản lý phòng học</a></li>
                <li><FaThLarge/> <a href={''} style={{textDecoration: "none"}}>Liên hệ</a></li>
            </ul>
            <hr/>
                <h6>TLU Quản lý</h6>
        </div>
    );
}

export default Sidebar;
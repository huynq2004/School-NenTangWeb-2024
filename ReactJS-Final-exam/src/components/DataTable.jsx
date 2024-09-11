import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import PopupForm from './PopupForm';
import {FaUserAstronaut} from 'react-icons/fa';
import ProgressBar from 'react-bootstrap/ProgressBar';

const DataTable = () => {
    const [data, setData] = useState([
        {
            id: 54,
            name: "Hoàng Hải Nam",
            company: "Công ty TNHH LG Việt Nam",
            status: "Hủy hợp đồng",
            due: "12 Tháng 12",
            progress: 71
        },
        {
            id: 55,
            name: "Phạm Tuấn Anh",
            company: "Công ty TNHH Huewei Việt Nam",
            status: "Đang chờ",
            due: "15 Tháng 12",
            progress: 54
        },
        {
            id: 56,
            name: "La Hồng Anh",
            company: "Công ty TNHH LG Việt Nam",
            status: "Đang tiến hành",
            due: "6 Tháng 12",
            progress: 97
        },
        {
            id: 57,
            name: "Ngô Tú Anh",
            company: "Công ty TNHH Pixel Việt Nam",
            status: "Đã hoàn thành",
            due: "19 Tháng 12",
            progress: 89
        }
    ]);

    const [showPopup, setShowPopup] = useState(false);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    return (
        <div>
            <div className="d-flex justify-content-between mb-3 bg-dark">
                <h3 className="text-white p-2">Quản lý nhân sự</h3>
            </div>
            <Table striped bordered hover>
                <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Hình ảnh</th>
                    <th>Tên</th>
                    <th>Công ty</th>
                    <th>Trạng thái</th>
                    <th>Ngày đến hạn</th>
                    <th>Mức độ hoàn thành công việc</th>
                    <th>Hành động</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td><FaUserAstronaut/></td>
                        <td>{item.name}</td>
                        <td>{item.company}</td>
                        <td>
                            {item.status === 'Hủy hợp đồng' && <span className="badge badge-danger text-danger">Hủy hợp đồng</span>}
                            {item.status === 'Đang chờ' && <span className="badge badge-secondary text-secondary">Đang chờ</span>}
                            {item.status === 'Đang tiến hành' &&
                                <span className="badge badge-primary text-primary">Đang tiến hành</span>}
                            {item.status === 'Đã hoàn thành' &&
                                <span className="badge badge-success text-success">Đã hoàn thành</span>}
                        </td>
                        <td>{item.due}</td>
                        <td><ProgressBar now={item.progress} label={`${item.progress}%`} /></td>
                        <td className="d-flex">
                            <Button variant="success" size="sm" onClick={() => setShowPopup(true)}>
                                Thuê
                            </Button>{' '}
                            <Button variant="danger" size="sm" onClick={() => handleDelete(item.id)}>
                                Sa thải
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Button variant="primary" size="sm" style={{float: 'left'}}>Xem báo cáo tổng quan</Button>
            {showPopup && (
                <PopupForm
                    show={showPopup}
                    onHide={() => setShowPopup(false)}
                />
            )}
        </div>
    );
};

export default DataTable;

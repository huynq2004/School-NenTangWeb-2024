import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const PopupForm = ({ show, onHide, onSave, data }) => {
    const [formData, setFormData] = useState({
        company: '',
        position: '',
        description: '',
    });

    useEffect(() => {
        if (data) {
            setFormData({
                company: '',
                position: '',
                description: '',
            });
        }
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.company && formData.position && formData.description) {
            onSave(formData);
        } else {
            alert('Vui lòng điền đầy đủ thông tin!');
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{'Thuê nhân sự'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Tên công ty</Form.Label>
                        <Form.Control
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            maxLength={20}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Vị trí</Form.Label>
                        <Form.Control
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            required
                            maxLength={15}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mô tả công việc</Form.Label>
                        <Form.Control
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-2 float-end">
                        Thuê
                    </Button>{' '}
                    <Button variant="light" onClick={onHide} className="mt-2 float-end">
                        Hủy
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default PopupForm;

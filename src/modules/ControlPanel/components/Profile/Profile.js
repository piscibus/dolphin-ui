import React, { useState } from 'react'
import { Upload, Button, Form, Input, message } from 'antd'
import { UploadOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import localisation from '../../../../localisations'
import logo from '../../../../assets/images/logo.png'

const Dashboard = (props) => {
    const local = localisation.Create()
    const { trans } = local
    const [form] = Form.useForm()
    const doSave = (payload) => {}
    const uploadProps = {
        name: 'file',
        action: '',
        headers: {},
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList)
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`)
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`)
            }
        },
    }
    return (
        <div className="controlpanel-wrapper">
            <div className="controlpanel-holder">
                <Form name="ProfileForm" onFinish={doSave} form={form}>
                    <div className="profile-image">
                        <img width="200px" src={logo} alt="profile image" />
                        <Upload {...uploadProps}>
                            <Button icon={<UploadOutlined />}>
                                Upload Image
                            </Button>
                        </Upload>
                    </div>
                    <Form.Item name="name">
                        <Input
                            prefix={<UserOutlined />}
                            size="large"
                            placeholder={trans('Name')}
                        />
                    </Form.Item>
                    <Form.Item name="email">
                        <Input
                            prefix={<MailOutlined />}
                            size="large"
                            placeholder={trans('Email')}
                        />
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Dashboard

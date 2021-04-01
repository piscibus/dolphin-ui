import React from 'react'
import { Button, Form, Input, Alert, Dropdown, Menu } from 'antd'
import { useTranslation } from 'react-i18next'
/**Component Wrapper for locals */
const Create = (props) => {
    const { t, i18n } = useTranslation()
    /**array of Locals */
    const getSupportedLocals = () => ['ar', 'en']
    /**current Active Lang */
    const getCurrentLang = () => i18n.language
    /**localise by key */
    const trans = (key) => t(key)
    /**change lang by key */
    const changeLang = (key) => {
        i18n.changeLanguage(key)
    }
    /**returns dropdown of supported languages for change */
    const getChangeLangDropDown = () => {
        const locals = getSupportedLocals()
        const localsItems = () => (
            <Menu>
                {locals.map((v, k) => (
                    <Menu.Item key={k}>
                        <Button type="link" onClick={() => changeLang(v)}>
                            {trans(v)}
                        </Button>
                    </Menu.Item>
                ))}
            </Menu>
        )
        return (
            <Dropdown overlay={localsItems()} trigger={['hover']}>
                <a className="ant-dropdown-link" href="#">
                    {getCurrentLang()}
                </a>
            </Dropdown>
        )
    }

    return {
        trans,
        changeLang,
        getSupportedLocals,
        getChangeLangDropDown,
    }
}

export default { Create }

import { Button, ButtonProps } from 'antd'
import React from 'react'
import clsx from 'clsx'
import Spinner from '../../assets/Spinner'
import { useState } from "react";

type ButtonTypes = "default" | "link" | "text" | "ghost" | "primary" | "dashed" | undefined 

interface Props extends ButtonProps {
    className?: string
    icon?: React.ReactNode
    title?: string
    type?: ButtonTypes
    onClick?: () => void
    isLoading?: boolean
}


const AppButton: React.FC<Props> = ({
    title, icon, className, isLoading, onClick = () => { }, type, ...buttonProps
}) => {
    const [loading, setLoading] = useState(false)
    if (Boolean(icon)) {
        return (
            <Button className={clsx("icon-btn", className)}  icon={icon} type={type} onClick={(e: any) => {
                e.stopPropagation()
                onClick()
            }} {...buttonProps}>
                {title}
            </Button>)
    }

    return (
        <Button className={clsx("btn", className)}  type={type} onClick={(e: any) => {
            e.stopPropagation()
            setLoading(true)
            onClick()
        }} {...buttonProps}>
            <div className='flex'>

            {loading && <Spinner />}
            <span>{title}</span>
            </div>
        </Button>
    )

}

AppButton.defaultProps = {
    onClick: () => { },
    className: "",
    title: "",
    type: 'default'
}

export default AppButton
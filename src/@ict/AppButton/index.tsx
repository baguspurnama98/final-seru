import { Button, ButtonProps } from 'antd'
import React from 'react'
import clsx from 'clsx'

type ButtonType = "default" | "link" | "text" | "ghost" | "primary" | "dashed" | undefined

interface Props extends ButtonProps {
    className?: string
    icon?: React.ReactNode
    title?: string
    type?: ButtonType
    onClick?: () => void
}


const AppButton: React.FC<Props> = ({
    title, icon, className, onClick = () => { }, type, ...buttonProps
}) => {
    if (Boolean(icon)) {
        return (
            <Button className={clsx("icon-btn", className)} shape='round' icon={icon} type={type} onClick={(e: any) => {
                e.stopPropagation()
                onClick()
            }} {...buttonProps}>
                {title}
            </Button>)
    }

    return (
        <Button className={clsx("btn", className)} shape='round' type={type} onClick={(e: any) => {
            e.stopPropagation()
            onClick()
        }} {...buttonProps}>
            {title}
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
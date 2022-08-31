import React from 'react'
import ReactHelmet from 'react-helmet'

type Props = {
	title?: string
	children?: React.ReactNode
	className?: string
}

const MainLayout: React.FC<Props> = ({ title, children, className }) => {
	return (
		<div className={className + ' main-content'}>
			<ReactHelmet>
				<title>{title}</title>
			</ReactHelmet>
			<header></header>
			<main>{children}</main>
		</div>
	)
}

export default MainLayout

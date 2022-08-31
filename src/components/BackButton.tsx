import React from 'react'
import { ReactComponent as ArrowLeft } from 'icons/arrow-left.svg'

type Props = {
	onClick?: () => void
	className?: string
}

const BackButton: React.FC<Props> = ({ onClick, className }) => {
	return (
		<div className={`flex items-center gap-2 cursor-pointer ${className}`} onClick={onClick}>
			<div className='flex items-center justify-center w-[25px] h-[25px] bg-white rounded-[4px] border-[1px] border-solid border-[#EDEDED]'>
				<ArrowLeft />
			</div>
			<span className='text-[13px] leading-5 tracking-[0.26px] text-[#555555]'>Back</span>
		</div>
	)
}

export default BackButton

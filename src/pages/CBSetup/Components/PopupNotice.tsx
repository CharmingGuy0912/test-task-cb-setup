import React from 'react'
import { ReactComponent as Bullhorn } from 'icons/bullhorn.svg'

type Props = {
	onUpgrade?: () => void
}

const PopupNotice: React.FC<Props> = ({ onUpgrade }) => {
	return (
		<div className='flex sm:flex-col items-center sm:items-start rounded-[10px] bg-[#D5E3FD] px-[30px] sm:px-[10px] py-5 mb-[30px]'>
			<div className='flex'>
				<div className='flex items-center justify-center w-[60px] h-[60px] min-w-[60px] rounded-full bg-[#286EF1]'>
					<Bullhorn />
				</div>
				<div className='flex flex-col gap-[5px] ml-[30px] sm:ml-[15px]'>
					<h3>Upgrade to pay 0% transaction fee</h3>
					<span className='text-[15px] leading-[30px] tracking-[0.26px]'>
						Pay 0% transaction fee and get added benefits by upgrading your account.
					</span>
				</div>
			</div>
			<button className='ml-auto w-[100px] sm:mt-[10px]	' onClick={onUpgrade}>
				Upgrade
			</button>
		</div>
	)
}

export default PopupNotice

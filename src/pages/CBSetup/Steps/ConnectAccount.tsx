import React, { useState } from 'react'
import PopupNotice from '../Components/PopupNotice'
import { ReactComponent as Dot } from 'icons/dot.svg'
import { ReactComponent as Stripe } from 'icons/stripe.svg'
import { ReactComponent as Doc } from 'icons/link.svg'

const ConnectAccount: React.FC<StepComponentProps> = ({ onNext }) => {
	const [upgraded, setUpgraded] = useState<boolean>(false)

	const handleUpgrade = () => {
		setUpgraded(true)
	}

	return (
		<>
			{!upgraded && <PopupNotice onUpgrade={handleUpgrade} />}
			<div className='sub-content'>
				<div className='flex justify-between items-center mb-[30px]'>
					<h3>Getting Started</h3>
					<div className='flex gap-[15px] items-center'>
						<span className='font-bold text-[13px] leading-[25px] tracking-[0.26px] text-[#333333]'>Step 1 of 2</span>
						<div className='flex gap-[10px]'>
							<Dot />
							<Dot className='unfilled' />
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center bg-[#F9F9F9] pt-[80px] pb-[60px] px-2 rounded-[4px]'>
					<div className='flex items-center justify-center w-[150px] h-[150px] rounded-full bg-[#EAF1FE]'>
						<Stripe />
					</div>
					<span className='mt-[30px] font-bold text-2xl leading-[35px] tracking-[0.26px] text-center'>
						Connect Stripe Account
					</span>
					<span className='mt-[10px] max-w-[520px] text-[15px] leading-[30px] tracking-[0.26px] text-[#555555] text-center'>
						Client Billing requires a free Stripe account. Connect your existing account or create a new one.
					</span>
					<div className='flex justify-between px-[30px] items-center max-w-[400px] w-full h-[60px] rounded-[10px] bg-white'>
						<h3>Transaction Fee</h3>
						<span className='font-bold text-[15px] leading-[30px] tracking-[0.26px] text-[#555555]'>{upgraded ? 0 : 5}%</span>
					</div>
					<button className='mt-[30px] w-[200px]' onClick={onNext}>
						Get Started
					</button>
					<span className='flex items-center mt-5 gap-[5px] font-medium text-[13px] leading-5 tracking-[0.26px] text-[#286EF1]'>
						Find out more about Client Billing
						<Doc className='svg-fill-blue' />
					</span>
				</div>
			</div>
		</>
	)
}

export default ConnectAccount

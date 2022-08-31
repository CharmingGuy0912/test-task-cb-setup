import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import { ReactComponent as Dot } from 'icons/dot.svg'
import { ReactComponent as Stripe } from 'icons/stripe.svg'
import { ReactComponent as Success } from 'icons/success.svg'

const Connected: React.FC<StepComponentProps> = ({ onNext }) => {
	useEffect(() => {
		toast.success(
			<div className='grid'>
				<span className='text-[15px] leading-5 tracking-[0.26px] text-black'>Stripe account connected successfully</span>
				<span className='text-[12px] leading-5 tracking-[0.26px] text-[#555]'>A SECOND AGO</span>
			</div>
		)
	}, [])
	return (
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
				<span className='mt-[30px] font-bold text-2xl leading-[35px] tracking-[0.26px] text-center'>Connect Stripe Account</span>
				<div className='flex sm:flex-col max-w-[500px] w-full justify-between items-center bg-white rounded-[10px] mt-[30px] px-[30px] py-[15px]'>
					<div className='flex flex-col'>
						<span className='font-bold text-[15px] leading-[30px] tracking-[0.26px]'>Test Stripe Account</span>
						<a href='mailto:info@example.com' className='text-[13px] leading-5 tracking-[0.26px] text-[#555555]'>
							info@example.com
						</a>
					</div>
					<div className='flex gap-[10px] items-center sm:mt-[10px]'>
						Connected
						<Success />
					</div>
				</div>
				<button className='mt-[30px] w-[200px]' onClick={onNext}>
					Continue
				</button>
			</div>
		</div>
	)
}

export default Connected

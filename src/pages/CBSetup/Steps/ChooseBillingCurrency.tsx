import React, { useState } from 'react'
import BackButton from 'components/BackButton'
import { ReactComponent as Dot } from 'icons/dot.svg'
import { ReactComponent as Warning } from 'icons/warning.svg'
import CurrencySelect from 'components/CurrencySelect'

const ChooseBillingCurrency: React.FC<StepComponentProps> = ({ onNext, onPrevious }) => {
	const [active, setActive] = useState<boolean>(false)

	const handleSubmit = () => {
		if (!active) return
		onNext()
	}

	return (
		<div className='sub-content'>
			<div className='flex justify-between items-center mb-[30px]'>
				<h3>Getting Started</h3>
				<div className='flex gap-[15px] items-center'>
					<span className='font-bold text-[13px] leading-[25px] tracking-[0.26px] text-[#333333]'>Step 2 of 2</span>
					<div className='flex gap-[10px]'>
						<Dot className='unfilled' />
						<Dot />
					</div>
				</div>
			</div>
			<div className='relative flex flex-col items-center bg-[#F9F9F9] pt-[100px] pb-[60px] px-2 rounded-[4px]'>
				<BackButton className='absolute top-[30px] left-[30px] sm:top-[10px] sm:left-[10px]' onClick={onPrevious} />
				<span className='font-bold text-2xl leading-[35px] tracking-[0.26px] text-center'>Choose Billing Currency</span>
				<span className='mt-[10px] max-w-[520px] text-[15px] leading-[30px] tracking-[0.26px] text-[#555555] text-center'>
					Select the currency you want to use to bill your clients.
				</span>
				<div className='flex max-w-[600px] h-auto px-5 py-[15px] gap-[5px] bg-[#FCF4E6] rounded-[4px]'>
					<Warning className='mt-[5px]' />
					<span className='text-[13px] leading-[22px] tracking-[0.26px]'>
						Note: Billing currency cannot be changed in the future. Please make sure you select the correct currency.
					</span>
				</div>
				<CurrencySelect className='mt-5' />
				<div className='flex gap-[10px] mt-10'>
					<input type='checkbox' className='h-4 w-4 mt-[6px]' onClick={() => setActive((prev) => !prev)} />
					<span className='font-bold text-[15px] leading-[30px] tracking-[0.26px] text-[#555555]'>
						I am aware that I cannot change currency later
					</span>
				</div>
				<button className={`mt-[30px] w-[200px] ${active ? 'disabled' : 'inactive disable'}`} onClick={handleSubmit}>
					Get Started
				</button>
			</div>
		</div>
	)
}

export default ChooseBillingCurrency

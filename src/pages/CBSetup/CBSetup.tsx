import React, { useState } from 'react'
import { toast } from 'react-toastify'
import MainLayout from 'layout/MainLayout'
import steps from './Steps'
import { ReactComponent as Doc } from 'icons/link.svg'
import './CBSetup.scss'

const stepCount = 4

const CBSetup = () => {
	const [currentStep, setCurrentStep] = useState<number>(0)

	const StepComponent = steps[currentStep]

	const goToNext = () => {
		if (currentStep !== stepCount - 1) {
			setCurrentStep((prev) => prev + 1)
			return
		}
		toast.warning("You've reached final step!")
	}

	const goToPrevious = () => {
		setCurrentStep((prev) => prev - 1)
	}

	return (
		<MainLayout title='Client Billing Setup' className='CBSetup'>
			<div className='container'>
				<div className='flex items-center mt-[45px] mb-[30px] pb-[22px] border-b-[1px] border-solid border-[#000]'>
					<h3>Client Billing</h3>
					{currentStep === 0 && (
						<span className='font-medium text-[15px] leading-[30px] tracking-[0.29px] text-[#555555] ml-[5px]'>
							– A full payment solution for your business, free with Incsub
						</span>
					)}
					<a
						href='https://example.com'
						target='_blank'
						rel='noreferrer'
						className='flex items-center gap-[5px] ml-auto font-bold text-[13px] leading-[30px] tracking-[0.26px]'
					>
						Docs <Doc />
					</a>
				</div>
				<StepComponent onPrevious={goToPrevious} onNext={goToNext} />
			</div>
		</MainLayout>
	)
}

export default CBSetup

import React, { useEffect } from 'react'
import { MoonLoader } from 'react-spinners'
import { ReactComponent as Client } from 'icons/client.svg'
import { ReactComponent as Product } from 'icons/product.svg'
import { ReactComponent as Invoice } from 'icons/invoice.svg'
import { ReactComponent as Configure } from 'icons/configure.svg'

const ImportProgress: React.FC<StepComponentProps> = ({ onNext }) => {
	useEffect(() => {
		setTimeout(onNext, 3000)
	}, [onNext])

	return (
		<>
			<div className='flex items-center font-bold text-[13px] leading-[30px] tracking-[0.26px] text-[#555555]'>
				Overview
				<div className='ml-4 w-[1px] h-[15px] bg-[#E6E6E6]' />
				<div className='flex items-center gap-[25px] ml-[15px]'>
					<div className='flex gap-[5px] items-center'>
						<Client />
						Clients
					</div>
					<div className='flex gap-[5px] items-center'>
						<Product />
						Products & Services
					</div>
					<div className='flex gap-[5px] items-center'>
						<Invoice />
						Invoices
					</div>
				</div>
				<div className='flex gap-[5px] items-center justify-center ml-auto w-[100px] h-[30px] bg-[#E6E6E6]'>
					<Configure />
					Configure
				</div>
			</div>
			<div className='sub-content mt-[25px] flex flex-col justify-center items-center !py-[180px]'>
				<MoonLoader size={44} speedMultiplier={0.5} />
				<h3 className='mt-[30px]'>Importing Stripe Configurations</h3>
				<span className='mt-[10px] max-w-[520px] text-[15px] leading-[30px] tracking-[0.26px] text-[#555555] text-center'>
					Please wait while we are importing your Stripe configurations. It will only take a few seconds…
				</span>
			</div>
		</>
	)
}

export default ImportProgress

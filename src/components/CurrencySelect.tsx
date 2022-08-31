import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const options = [
	{ value: 'USD', label: 'USD - United States Dollars' },
	{ value: 'CAD', label: 'CAD - Canadian Dollars' },
	{ value: 'AUD', label: 'AUD - Australian Dollars' },
]

type Props = {
	onSelect?: () => void
	className?: string
}

const CurrencySelect: React.FC<Props> = ({ className, onSelect }) => {
	return (
		<Dropdown
			options={options}
			className={`max-w-[360px] w-full ${className}`}
			controlClassName='!rounded-[4px] !px-[15px] !py-[10px] flex'
			value={options[0]}
			arrowClassName='!mt-[6px]'
		/>
	)
}

export default CurrencySelect

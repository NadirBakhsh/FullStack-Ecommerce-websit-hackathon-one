import { GrLocation } from 'react-icons/gr'
import { FaAngleDown } from 'react-icons/fa'

export const TopBar = () => {
	return (
		<div className='flex justify-between items-center inner-container py-[10px]'>
			<div className='flex items-center gap-[14px] text-xs text-dark-grey'>
				<span>My location</span>
				<span className='flex items-center gap-[6px] font-semibold'>
					<GrLocation />
					<p>Jakarta, Indonesia</p>
				</span>
			</div>
			<div className='flex items-center gap-[6px]'>
				<p className='text-dark-gray text-xs'>English</p>
				<FaAngleDown color='#666666' />
			</div>
		</div>
	)
}

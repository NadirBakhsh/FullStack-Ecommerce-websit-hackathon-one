import Image from 'next/image'
import { TopBar } from './top-bar'
import { MdShoppingCart } from 'react-icons/md'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Header = () => {
	return (
		<div className='w-full'>
			<TopBar />

			<div className='flex justify-between items-center inner-container pt-[21px] pb-[22px]'>
				<span className='h-[23px] w-[134.798px] max-w-[134.798px] relative'>
					<Image
						alt='logo'
						src={'/assets/logo.svg'}
						className='object-fill'
						fill
					/>
				</span>

				<div className='flex items-center relative gap-[18px] '>
					<span className='flex gap-4 items-center'>
						<div className='flex flex-col'>
							<p className='text-[13px] font-semibold text-dark-grey text-right leading-4'>
								Hello
							</p>
							<p className='text-sm font-bold text-black text-right'>
								Evelyn Andreas
							</p>
						</div>
						<span className='w-9 h-9 border hover:text-black text-dark-grey flex items-center justify-center border-light-gray bg-light-grey rounded-full'>
							<Avatar>
								<AvatarImage
									src='https://cdn.pixabay.com/user/2022/12/21/21-35-29-52_250x250.jpeg'
									alt='user'
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</span>
					</span>
					<button className='w-9 h-9 border hover:text-black text-dark-grey flex items-center justify-center border-light-gray bg-light-grey rounded-full'>
						<MdShoppingCart size={16} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Header

import Link from 'next/link'
const Navbar = () => {
    return (
        <>        
        <nav className='bg-pink-400'>
            <div className='max-w mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center '>
                        <div className='flex-shrink-0'>
                        <a href='/' className='text-white text-2xl text-shadow-2xs'>
                          Kal's  
                        </a>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <div className='ml-4 flex items-center'></div>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Navbar;
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-blue-500 '>
      <div className='font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-neue'>
        <Link href='/'>
          <a className='text-base md:text-2xl'>
            Mediajams
            <span className='text-red-600'>Challenge</span>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

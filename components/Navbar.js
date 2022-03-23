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

        <a
          href='/about'
          className='ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

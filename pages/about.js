export default function about() {
  return (
    <div className='relative py-16 bg-white overflow-hidden'>
      <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
        <div
          className='relative h-full text-lg max-w-prose mx-auto'
          aria-hidden='true'
        >
          <svg
            className='absolute top-12 left-full transform translate-x-32'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)'
            />
          </svg>
          <svg
            className='absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
            />
          </svg>
          <svg
            className='absolute bottom-12 left-full transform translate-x-32'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='d3eb07ae-5182-43e6-857d-35c643af9034'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)'
            />
          </svg>
        </div>
      </div>
      <div className='relative px-4 sm:px-6 lg:px-8'>
        <div className='text-lg max-w-prose mx-auto'>
          <h1>
            <span className='block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase'>
              Mediajams Code Challenge 1
            </span>
            <span className='mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'></span>
          </h1>
          <p className='mt-8 text-xl text-gray-500 leading-8'>
            In this Next.js project, you are provided with a working user
            interface built with tailwind css that is able to capture selected
            images for upload. You are required to create a NextJS severless
            function that will upload the image to Cloudinary on submission.
          </p>
          <span className='mt-10 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Getting started
          </span>
          <ul role='list' className='mt-8 text-gray-500 leading-8'>
            <li>
              1. Clone the repository - {''}
              <a href='https://github.com/musebe/Mediajams-community-challenge'>
                https://github.com/musebe/Mediajams-community-challenge
              </a>
            </li>
            <li>
              2. You are required to write a NextJS Severless function Inside
              the <strong>pages/api/upload.js</strong> file that will upload the
              selected image to Cloudinary.
            </li>
            <li>
              3. Submit your solution via a codesandbox to{' '}
              <a href='https://discord.com/invite/mediadevs'>Discord</a> in the{' '}
              <strong>code-challenges</strong> channel
            </li>
          </ul>
          <span className='mt-10 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Submission Deadline
          </span>
          <p className='mt-8 text-xl text-gray-500 leading-8'>
            The solution's codesandbox should be submitted in the code
            challenges channel by end of day <strong>27th March 2022 .</strong>
          </p>
          <span className='mt-10 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Rewards
          </span>
          <p className='mt-8 text-xl text-gray-500 leading-8'>
            The first and best submission will be awarded awesome Cloudinary
            Swag after the live code walk through on
          </p>
          <span className='mt-10 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Live Code Review
          </span>
          <p className='mt-8 text-xl text-gray-500 leading-8'>
            We shall have a live code review of the best solution on{' '}
            <strong>29th March 2022 </strong> on discord stages. Make your
            reservations via the events section on discord to be notified when
            we go live.
          </p>
          <figure className="mt-8">
            <img
              className='w-full rounded-lg'
              src='/code.jpeg'
              alt='talk is cheap'
              width={1310}
              height={873}
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

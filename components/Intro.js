import Typewriter from 'typewriter-effect'
import Image from 'next/image'

export default function Intro() {
  return (
    <>
      <div className="mt-10 flex flex-col items-center justify-center">
        <p className="mt-10 text-2xl dark:text-gray-300">Hello, I&apos;m</p>
        <h1 className="font-serif text-3xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Kristine Kochie
        </h1>
        <div className="mt-1 text-2xl dark:text-gray-300">
          <div className="flex">
            I am a&nbsp;
            <Typewriter
              options={{
                strings: ['developer.', 'coder.', 'designer.', 'maker.'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-end">
        <Image
          src="/static/images/old-computer-amber-flipped.png"
          alt="Computer illustration"
          width={400}
          height={353}
          className="w-200 h-177 object-scale-down"
        />
      </div>
    </>
  )
}

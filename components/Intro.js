import ReactTypingEffect from 'react-typing-effect'

export default function Intro() {
  return (
    <>
      <div className="justify-cente mt-20 flex flex-col items-center">
        <p className="mt-20 text-2xl dark:text-gray-300">Hello, I&apos;m</p>
        <h1 className="font-serif text-3xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Kristine Kochie
        </h1>
        <p className="mt-1 text-2xl dark:text-gray-300">
          <ReactTypingEffect staticText="I am a " text={['developer', 'designer', 'maker']} />
        </p>
      </div>
    </>
  )
}

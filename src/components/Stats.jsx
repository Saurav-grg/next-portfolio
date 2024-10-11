'use client';
import CountUp from 'react-countup';
export default function Stats() {
  const stats = [
    {
      num: 12,
      text: 'years of experience',
    },
    {
      num: 3,
      text: 'Projects completed',
    },
    {
      num: 4,
      text: 'Technologies mastered',
    },
    {
      num: 300,
      text: 'Code commits',
    },
  ];
  return (
    <section className="">
      <div className="flex flex-wrap gap-6 maw-w-[80vw] mx-auto lg:max-w-none ">
        {stats.map((item, index) => {
          // console.log(`item : ${item.text}`, item.text.length);
          return (
            <div
              className="flex flex-1 gap-4 items-center justify-center lg:justify-start "
              key={index}
            >
              <CountUp
                end={item.num}
                delay={2}
                duration={5}
                className="text-4xl lg:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                }'leadind-snug text-white/80 '`}
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

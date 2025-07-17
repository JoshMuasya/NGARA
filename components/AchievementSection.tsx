'use client'

import React from 'react'

const achievements = [
  {
    number: '16',
    label: 'Countries of Presence',
  },
  {
    number: '1,200',
    label: 'Families Empowered',
  },
  {
    number: '10,000',
    label: 'Tons of Resins and Gums Produced',
  },
]

const AchievementsSection = () => {
  return (
    <section
      className="py-20 px-4 w-full text-[hsl(var(--foreground))] bg-cover bg-center bg-no-repeat back-pic"
    >
      <div className="backdrop-brightness-75 backdrop-blur-sm py-10 px-2 md:px-12 rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center drop-shadow-lg text-[hsl(var(--ring))]">
          What has been achieved so far:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="w-64 h-40 bg-[hsl(var(--primary)/.2)] backdrop-blur-md border border-[hsl(var(--primary)/.4)] rounded-xl shadow-xl flex flex-col items-center justify-center text-center p-4"
            >
              <div className="text-5xl font-extrabold text-[hsl(var(--primary-foreground))]">
                {item.number}
              </div>
              <div className="mt-2 text-lg font-medium text-[hsl(var(--primary-foreground))]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection

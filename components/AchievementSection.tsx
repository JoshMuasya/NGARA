'use client'

import React from 'react'
import './Achievements.css'
import { motion } from 'framer-motion'

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
            <div key={index} className="flip-card w-64 h-40">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-[hsl(var(--primary)/.2)] backdrop-blur-md border border-[hsl(var(--primary)/.4)] flex items-center justify-center text-5xl font-extrabold text-[hsl(var(--primary-foreground))] rounded-xl shadow-xl">
                  {item.number}
                </div>

                {/* Back */}
                <div className="flip-card-back bg-[hsl(var(--accent)/.3)] backdrop-blur-md border border-[hsl(var(--accent)/.4)] flex items-center justify-center text-center px-4 text-lg font-medium text-[hsl(var(--primary-foreground))] rounded-xl shadow-xl">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection

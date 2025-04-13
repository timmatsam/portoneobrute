import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          I have a kindle. My spotify playlist is a combination of French,
          Japanese, Korean, Hindi, and yeah English. I can&apos;t fathom a world
          without Chopin. I enjoy traveling - AND I NEVER pay for a checked bag.
          Here&apos;s a tip: replace that backpack with a duffel bag (or
          carry-on if your ticket includes it) instead of paying each way for
          luggage. That&apos;s theft. My current passions involve
          watching/reading thing after thing in regards to urban planning and
          design. America has poor infrastructure; our public transit and our
          inability to provide high/mid-density housing instead of detached,
          single family homes is not prudent. Trust me, you&apos;ll be much
          happier if you could walk/bike to your local grocery store to pick up
          that A5 miyazaki wagyu. Trains are cool. A Super Conducting Maglev
          train that travels at 600km/hr is WICKED COOL. Also, I think I&apos;m
          kind of funny. Alright, I&apos;m done.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}

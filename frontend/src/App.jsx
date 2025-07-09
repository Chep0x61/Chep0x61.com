import { useState } from 'react'
import Dither from './blocks/Backgrounds/Dither/Dither.jsx'
import ProfileCard from './blocks/Components/ProfileCard'


function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-900">

      <ProfileCard

        name="Chep0x61"
        title="DevSecOps Engineer"
        handle="Chep0x61"
        status="Online"
        contactText="Contact Me"
        showUserInfo={true}
        enableTilt={true}
        onContactClick={() => console.log('Contact clicked')}
        showBehindGradient={false}

      />

    </div>
  )
}

export default App

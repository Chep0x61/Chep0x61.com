import { useState } from 'react'
import Dither from './blocks/Backgrounds/Dither/Dither.jsx'
import ProfileCard from './blocks/Components/ProfileCard'
import GooeyNav from './blocks/Components/Gooey.jsx'
import TiltedCard from './blocks/Components/TiltedCard.jsx'

function App() {

  const items = [

  { label: "Journey", href: "#" },
  { label: "Contact", href: "#" },

];


  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-900">

<div style={{ height: '600px', position: 'relative' }}>

  <GooeyNav

    items={items}

    particleCount={15}

    particleDistances={[90, 10]}

    particleR={100}

    initialActiveIndex={0}

    animationTime={600}

    timeVariance={300}

    colors={[1, 2, 3, 1, 2, 3, 1, 4]}

  />

</div>

      <ProfileCard
        avatarUrl="mee.png"
        name="Thibault Thuillier"
        title="a.k.a Chep0x61"
        handle="Chep0x61"
        status="DevSecOps Engineer"
        contactText="Contact Me"
        showUserInfo={true}
        enableTilt={true}
        onContactClick={() => console.log('Contact clicked')}
        showBehindGradient={false}

      />

<TiltedCard

  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"

  altText="Kendrick Lamar - GNX Album Cover"

  captionText="Kendrick Lamar - GNX"

  containerHeight="300px"

  containerWidth="300px"

  imageHeight="300px"

  imageWidth="300px"

  rotateAmplitude={12}

  scaleOnHover={1.2}

  showMobileWarning={false}

  showTooltip={true}

  displayOverlayContent={true}

  overlayContent={

    <p className="tilted-card-demo-text">

      Kendrick Lamar - GNX

    </p>

  }

/>


    </div>
  )
}

export default App

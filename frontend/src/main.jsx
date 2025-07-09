import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Balatro from './blocks/Components/Balatro.jsx'
import Dither from './blocks/Backgrounds/Dither/Dither'

//  waveColor={[0.0, 0.6, 1.0]} BLEU
//    waveColor={[0.7, 0.6, 1.0]} VIOLET
// 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="h-full w-full  bg-red-200">
      <div className="absolute inset-0 z-0">
  <Dither

    waveColor={[0.0, 0.6, 1.0]}
    disableAnimation={false}

    enableMouseInteraction={false}

    mouseRadius={0.3}

    colorNum={4}

    waveAmplitude={0.3}

    waveFrequency={3}

    waveSpeed={0.05}

  />
      </div>

<App/>
    </div>
  </StrictMode>
)

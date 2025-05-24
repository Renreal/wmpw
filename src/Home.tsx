import Waves from './components/templates/WaveBackground.tsx';
import Hero from './components/sections/Hero.tsx';
function Home() {

  return (
    <>


<Waves
  lineColor="rgba(223, 100, 18, 0.43)"
  backgroundColor="rgba(1, 4, 27, 0.1)"
  waveSpeedX={0.02}
  waveSpeedY={0.01}
  waveAmpX={50}
  waveAmpY={30}
  friction={0.9}
  tension={0.01}
  maxCursorMove={120}
  xGap={12}
  yGap={36}
/>

<Hero/>

    </>

  )
}

export default Home

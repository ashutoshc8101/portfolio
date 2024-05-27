import Image from 'next/image';
import iraapp from '../../../assets/ira_banner2.png'

export default function IraApp() {
  return <>
    <div className="banner" style={{ alignItems: 'center', backgroundColor: '#242A38' }} >
      <Image src={iraapp} alt="banner image" />
    </div>
  </>;
}
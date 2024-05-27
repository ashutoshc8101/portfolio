import Image from 'next/image';
import banner from '../../../assets/chatterboxbanner.png';

export default function ChatterBox() {
  return <>
    <div className="banner">
      <Image src={banner} alt="banner image" />
    </div>
  </>;
}
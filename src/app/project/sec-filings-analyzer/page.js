import Image from 'next/image';
import secBanner from '../../../assets/secbanner.png';

export default function Sec() {
  return <>
    <div className="banner">
      <Image src={secBanner} alt="banner image" />
    </div>
  </>;
}
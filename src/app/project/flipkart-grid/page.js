import Image from 'next/image';
import flipkart from '../../../assets/flipkartbanner.png'

export default function Flipkart() {
  return <>
    <div className="banner">
      <Image src={flipkart} alt="banner image" />
    </div>
  </>;
}
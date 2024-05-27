import Image from 'next/image';
import therawin from '../../../assets/therawinbanner.png'

export default function Therawin() {
  return <div className="banner" style={{ alignItems: 'center' }} >
    <Image src={therawin} alt="banner image" />
  </div>;
}

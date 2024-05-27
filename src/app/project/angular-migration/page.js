import angular from '../../../assets/angularmigration.png';
import Image from 'next/image';

export default function AngularMigration() {
  return <>
    <div className="banner" style={{ alignItems: 'center' }}>
      <Image src={angular} alt="banner image" />
    </div>
  </>;
}
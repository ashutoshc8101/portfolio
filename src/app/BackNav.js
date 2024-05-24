import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const backLinkButton = {
  position: 'fixed',
  top: '0',
  left: '0',
  textDecoration: 'none',
  color: 'black',
  padding: '10px',
  margin: '30px'
};

export default function BackNav() {
  return <Link href="/" style={backLinkButton}>
    <FontAwesomeIcon icon={faArrowLeft} size="xl" />
  </Link>;
};
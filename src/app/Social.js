import React from 'react';
import { SocialIcon } from 'react-social-icons';
const styles = {
  iconStyle: {
    width: '40px',
    height: '40px',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  firstIcon: {
    width: '40px',
    height: '40px',
    marginRight: 10,
    marginBottom: 10,
  }
};

function Social() {

  return (
    <div className="social">
      <SocialIcon
        key={"github"}
        style={styles.firstIcon}
        url={"https://github.com/ashutoshc8101"}
        network={"github"}
        // bgColor={theme.socialIconBgColor}
        target="_blank"
        rel="noopener"
      />
      <SocialIcon
        key={"linkedin"}
        style={styles.iconStyle}
        url={"https://www.linkedin.com/in/ashutosh-chauhan-3866aa69/"}
        network={"linkedin"}
        target="_blank"
        rel="noopener"
      />
      <SocialIcon
        key={"twitter"}
        style={styles.iconStyle}
        url={"https://twitter.com/ashutoshc8101"}
        network={"twitter"}
        target="_blank"
        rel="noopener"
      />
      <SocialIcon
        key={"instagram"}
        style={styles.iconStyle}
        url={"https://www.instagram.com/ashutoshchauhan91"}
        network='instagram'
        target='_blank'
        rel="noopener"
      />
      <SocialIcon
        key={"email"}
        style={styles.iconStyle}
        url={"mailto:ashutoshc8101@gmail.com"}
        network={"email"}
        target="_blank"
        rel="noopener"
      />
    </div>
  );
}

export default Social;

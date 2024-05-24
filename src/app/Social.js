import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { profile } from '../portfolio'

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
        url={profile.socials.github}
        network={"github"}
        // bgColor={theme.socialIconBgColor}
        target="_blank"
        rel="noopener"
      />
      <SocialIcon
        key={"linkedin"}
        style={styles.iconStyle}
        url={profile.socials.linkedin}
        network={"linkedin"}
        target="_blank"
        rel="noopener"
      />
      <SocialIcon
        key={"twitter"}
        style={styles.iconStyle}
        url={profile.socials.twitter}
        network={"twitter"}
        target="_blank"
        rel="noopener"
      />
      <SocialIcon
        key={"instagram"}
        style={styles.iconStyle}
        url={profile.socials.instagram}
        network='instagram'
        target='_blank'
        rel="noopener"
      />
      <SocialIcon
        key={"email"}
        style={styles.iconStyle}
        url={`mailto:${profile.socials.email}`}
        network={"email"}
        target="_blank"
        rel="noopener"
      />
    </div>
  );
}

export default Social;

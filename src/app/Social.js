import React from 'react';
import { SocialIcon } from 'react-social-icons';
const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

function Social() {
  // const theme = useContext(ThemeContext);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch(endpoints.social, {
  //     method: 'GET',
  //   })
  //     .then((res) => res.json())
  //     .then((res) => setData(res))
  //     .catch((err) => err);
  // }, []);

  return (
    <div className="social">
      <SocialIcon
        key={"github"}
        style={styles.iconStyle}
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

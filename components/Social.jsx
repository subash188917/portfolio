import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';

const Socials = [
  { icon: <FaGithub />, path: 'https://github.com/subash188917' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/subash-madhavan-a39a161ba/' },
  // { icon: <FaYoutube />, path: 'https://youtube.com/yourprofile' },
  // { icon: <FaTwitter />, path: 'https://twitter.com/yourprofile' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {Socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;

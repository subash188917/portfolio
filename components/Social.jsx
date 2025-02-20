import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';

const Socials = [
  { icon: <FaGithub />, path: 'https://github.com/yourprofile' },
  { icon: <FaLinkedin />, path: 'https://linkedin.com/in/yourprofile' },
  { icon: <FaYoutube />, path: 'https://youtube.com/yourprofile' },
  { icon: <FaTwitter />, path: 'https://twitter.com/yourprofile' },
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

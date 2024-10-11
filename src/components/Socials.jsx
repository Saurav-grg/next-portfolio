import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://www.github.com/Saurav-grg' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/saurav-gurung/' },
  { icon: <FaTwitter />, path: 'https://www.twitter.com/in/saurav-gurung/' },
];
const Social = () => {
  return (
    <div className="flex gap-6">
      {socials.map(({ icon, path }) => (
        <Link
          className="size-9 border border-accent rounded-full p-2 hover:text-accent hover:border-accent/80"
          href={path}
          target="_blank"
          key={path}
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;

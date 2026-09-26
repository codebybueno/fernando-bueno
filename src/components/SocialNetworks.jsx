import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";

import "../css/socialnetworks.css";

const socialNetworks = [
  {name: "linkedin", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/buenof3r"},
  {name: "github", icon: <FaGithub />, url: "https://www.github.com/codebybueno"},
  {name: "instagram", icon: <FaInstagram />, url: "https://www.instagram.com/buenof3r"},
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
      <a href={network.url} className="social-btn" id={network.name} key={network.name}>
        {network.icon}
      </a>
  ))}
    </section>
  );
}

export default SocialNetworks
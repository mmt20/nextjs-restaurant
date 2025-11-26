import styles from "./footer.module.css";
import { BsFacebook, BsWhatsapp, BsMessenger, BsTwitter, BsYoutube } from "react-icons/bs";

const { footer, list, iconItem } = styles;
const icons = [BsFacebook, BsWhatsapp, BsMessenger, BsTwitter, BsYoutube];
const menuLinks = ["Home", "Restaurants", "Events", "Articles"];

const FooterLinks = ({ links }: { links: string[] }) => (
  <ul className={list}>
    {links.map((link, idx) => (
      <li key={idx}>{link}</li>
    ))}
  </ul>
);

const FooterIcons = () => {
  return (
    <ul className={`${list} d-flex justify-content-center gap-1  `}>
      {icons.map((Icon, idx) => (
        <li className={iconItem} key={idx}>
          <Icon />
        </li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className={footer}>
      <div className="container d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
        {Array(4)
          .fill(null)
          .map((_, idx) => (
            <FooterLinks key={idx} links={menuLinks} />
          ))}
        <FooterIcons />
        <p className="ms-4 mt-1">+95178679867868</p>
      </div>
    </footer>
  );
};

export default Footer;

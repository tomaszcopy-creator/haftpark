import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const NavLink = ({ href, className, onClick, children }: NavLinkProps) => {
  const location = useLocation();
  const isHashLink = href.startsWith("/#");

  if (isHashLink) {
    if (location.pathname === "/") {
      return (
        <a href={href.replace("/", "")} className={className} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavLink;

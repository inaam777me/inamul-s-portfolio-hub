const Footer = () => (
  <footer className="border-t border-border py-8 px-6 text-center">
    <p className="text-muted-foreground text-sm">
      © {new Date().getFullYear()}{" "}
      <span className="text-gradient font-display font-semibold">Inamul Hasan</span>. All rights reserved.
    </p>
  </footer>
);

export default Footer;

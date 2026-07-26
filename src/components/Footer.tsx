import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
   <footer className="bg-background border-t border-border py-8">
  <div className="container-narrow mx-auto px-4 sm:px-6">
    <div className="flex justify-center items-center text-sm text-muted-foreground">
      <span>© {currentYear} Ashbah Liaqat. All rights reserved.</span>
    </div>
  </div>
</footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-muted-foreground">
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Get in touch</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Press Releases</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connections</h3>
            <ul className="space-y-2">
              <li><a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a></li>
              <li><a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">YouTube</a></li>
              <li><a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Earnings</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary transition-colors">Become an Affiliate</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Advertise your product</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Sell on Market</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Account</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary transition-colors">Your Account</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Returns Centre</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">100% Purchase Protection</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Chat with us</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Help</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Reenbit Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
// it's just setup - later I'll do dynamic info
export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-muted-foreground">
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Get in touch</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press Releases</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connections</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Earnings</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Become an Affiliate</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Advertise your product</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sell on Market</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Your Account</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns Centre</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">100% Purchase Protection</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chat with us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Help</a></li>
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
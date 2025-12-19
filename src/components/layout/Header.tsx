import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link to="/">Reenbit Store</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              Dashboard
            </Button>
          </Link>

          {/* Кнопка Products (для аутентифицированных) */}
          <Link to="/products">
            <Button variant="ghost" size="sm">
              Products
            </Button>
          </Link>

          {/* Кнопка выхода */}
          <Button variant="outline" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
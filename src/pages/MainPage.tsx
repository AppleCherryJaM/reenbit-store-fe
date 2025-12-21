import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

export default function MainPage() {
  const { logout } = useAuth();
	
	return (
		<>
			Main Page
		</>
	);
}

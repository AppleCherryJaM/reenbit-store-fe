import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AuthTabsProps {
  activeTab: 'login' | 'register';
  onTabChange: (tab: 'login' | 'register') => void;
  loginComponent: React.ReactNode;
  registerComponent: React.ReactNode;
}

export function AuthTabs({ 
  activeTab, 
  onTabChange, 
  loginComponent, 
  registerComponent 
}: AuthTabsProps) {
  return (
    <Tabs 
      value={activeTab} 
      onValueChange={(value) => onTabChange(value as 'login' | 'register')}
      className="w-full"
    >
      <TabsList className="grid grid-cols-2 mb-6">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      
      <TabsContent value="login" className="space-y-4">
        {loginComponent}
      </TabsContent>
      
      <TabsContent value="register" className="space-y-4">
        {registerComponent}
      </TabsContent>
    </Tabs>
  );
}
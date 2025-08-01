import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="flex items-center space-x-2">
          <Stethoscope className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">MediCare Pro</h1>
        </div>
      </header>

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <div className="text-6xl font-bold text-primary mb-4">404</div>
            <h2 className="text-xl font-semibold mb-2">Page non trouvée</h2>
            <p className="text-muted-foreground mb-6">
              La page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            <Button asChild>
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Retour au tableau de bord
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;

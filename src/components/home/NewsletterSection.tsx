
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Por favor ingresa un correo electrónico válido",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "¡Suscripción exitosa!",
      description: "Te has suscrito a nuestro boletín de noticias",
    });
    setEmail('');
  };

  return (
    <section className="py-16 bg-gym-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Mantente Informado</h2>
          <p className="text-lg text-white/90 mb-8">
            Suscríbete a nuestro boletín para recibir ofertas exclusivas, nuevos productos y consejos de fitness.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-white/90 border-0 focus-visible:ring-white"
            />
            <Button 
              type="submit" 
              className="bg-white text-gym-blue hover:bg-white/90"
            >
              Suscribirme
            </Button>
          </form>
          
          <p className="text-sm text-white/80 mt-4">
            No compartiremos tu información con terceros. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

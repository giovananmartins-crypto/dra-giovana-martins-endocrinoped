"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { analytics } from "@/lib/analytics";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Desabilitar botão durante envio
    setIsSubmitting(true);
    
    try {
      // Enviar para API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Sucesso
        toast({
          title: 'Mensagem enviada!',
          description: 'Entraremos em contato em breve.',
        });
        
        // Limpar formulário
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });

        // Rastrear evento de conversão
        analytics.formSubmit('Contact Form');
      } else {
        // Erro - mostrar mensagens específicas de validação
        let errorMessage = data.message || 'Tente novamente mais tarde.';
        
        // Se houver erros de validação específicos, mostrar o primeiro
        if (data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
          const firstError = data.errors[0];
          errorMessage = firstError.message || errorMessage;
        }
        
        toast({
          title: 'Erro ao enviar',
          description: errorMessage,
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente mais tarde.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Nome Completo *
          </label>
          <Input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full h-12"
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Email *
          </label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full h-12"
            placeholder="seu@email.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Telefone *
        </label>
        <Input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full h-12"
          placeholder="(31) 99999-9999"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Mensagem *
        </label>
        <Textarea
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full min-h-40 resize-none"
          placeholder="Conte-nos como podemos ajudar. Descreva brevemente o motivo da consulta ou sua dúvida..."
        />
      </div>

      <Button 
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-foreground text-card hover:bg-foreground/90 gap-2 text-lg py-6 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Calendar className="h-5 w-5" />
        {isSubmitting ? 'Enviando...' : 'Enviar Solicitação de Agendamento'}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        Ao enviar este formulário, você concorda em ser contatado pela nossa equipe para agendamento.
      </p>
    </form>
  );
};


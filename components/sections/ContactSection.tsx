"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve para agendar sua consulta.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
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
        className="w-full bg-foreground text-card hover:bg-foreground/90 gap-2 text-lg py-6 shadow-lg hover:shadow-xl transition-all"
      >
        <Calendar className="h-5 w-5" />
        Enviar Solicitação de Agendamento
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        Ao enviar este formulário, você concorda em ser contatado pela nossa equipe para agendamento.
      </p>
    </form>
  );
};


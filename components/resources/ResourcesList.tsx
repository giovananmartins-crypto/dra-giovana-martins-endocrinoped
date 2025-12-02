"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Video, BookOpen, FileSpreadsheet, ArrowRight, PlayCircle } from "lucide-react";

interface Resource {
  iconType: string;
  title: string;
  description: string;
  type: string;
  category: string;
}

// Mapeamento de ícones
const iconMap: Record<string, typeof FileText> = {
  FileText,
  Video,
  BookOpen,
  FileSpreadsheet
};

interface ResourcesListProps {
  resources: Resource[];
}

export function ResourcesList({ resources }: ResourcesListProps) {
  const [selectedType, setSelectedType] = useState<string>("Todos");
  
  // Filtrar recursos por tipo
  const filteredResources = selectedType === "Todos" 
    ? resources 
    : resources.filter(r => r.type === selectedType);
  
  // Contar por tipo
  const pdfCount = resources.filter(r => r.type === "PDF").length;
  const videoCount = resources.filter(r => r.type === "Vídeo").length;
  const excelCount = resources.filter(r => r.type === "Excel").length;
  
  const resourceTypes = [
    { label: "Todos", count: resources.length, icon: BookOpen },
    { label: "PDF", count: pdfCount, icon: FileText },
    { label: "Vídeo", count: videoCount, icon: Video },
    { label: "Excel", count: excelCount, icon: FileSpreadsheet }
  ];

  const getTypeColor = (type: string) => {
    switch(type) {
      case "PDF": return "bg-red-100 text-red-700";
      case "Vídeo": return "bg-blue-100 text-blue-700";
      case "Excel": return "bg-green-100 text-green-700";
      default: return "bg-info/20 text-info-foreground";
    }
  };

  return (
    <>
      {/* Filtros por Tipo */}
      <section className="py-10 bg-gradient-soft sticky top-20 z-40 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {resourceTypes.map((type) => {
              const Icon = type.icon;
              const isActive = selectedType === type.label;
              return (
                <Button
                  key={type.label}
                  variant={isActive ? "default" : "outline"}
                  size="lg"
                  onClick={() => setSelectedType(type.label)}
                  className={`rounded-full px-6 py-2.5 font-semibold transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "border-2 border-border bg-card/50 backdrop-blur-sm text-foreground hover:bg-primary/10 hover:border-primary hover:shadow-soft"
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {type.label} ({type.count})
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recursos Filtrados */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {selectedType === "Todos" ? "Todos os Recursos" : `Recursos em ${selectedType}`}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {selectedType === "Todos" 
                ? "Explore nossa biblioteca completa de materiais educativos"
                : `Materiais disponíveis no formato ${selectedType.toLowerCase()}`
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredResources.map((resource, index) => {
              const Icon = iconMap[resource.iconType] || FileText;
              
              return (
                <Card 
                  key={index}
                  className="border-none shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-3 bg-background group overflow-hidden h-full"
                >
                  {/* Header do Card com Gradiente */}
                  <div className={`h-32 bg-gradient-to-br ${
                    resource.type === "PDF" ? "from-red-100 to-red-50" :
                    resource.type === "Vídeo" ? "from-blue-100 to-blue-50" :
                    resource.type === "Excel" ? "from-green-100 to-green-50" :
                    "from-primary/20 to-info/20"
                  } flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 via-transparent to-transparent" />
                    <div className="relative z-10 w-20 h-20 rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-medium">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute top-3 right-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${getTypeColor(resource.type)} backdrop-blur-sm`}>
                        {resource.type}
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4 flex flex-col h-full">
                    <div className="inline-block px-3 py-1 bg-primary/20 text-link rounded-full text-xs font-semibold w-fit">
                      {resource.category}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {resource.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed flex-grow line-clamp-3">
                      {resource.description}
                    </p>
                    
                    <Button 
                      variant="default" 
                      className="w-full mt-auto gap-2 group/btn bg-foreground text-card hover:bg-foreground/90"
                    >
                      {resource.type === "Vídeo" ? (
                        <>
                          <PlayCircle className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                          Assistir Vídeo
                        </>
                      ) : (
                        <>
                          <Download className="h-4 w-4 group-hover/btn:translate-y-0.5 transition-transform" />
                          Baixar {resource.type}
                        </>
                      )}
                      <ArrowRight className="h-4 w-4 ml-auto group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}


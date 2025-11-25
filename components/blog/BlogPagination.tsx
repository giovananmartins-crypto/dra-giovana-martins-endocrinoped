"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}

export function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Calcular quais páginas mostrar
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      // Mostrar todas as páginas se houver poucas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Sempre mostrar primeira página
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Mostrar páginas ao redor da atual
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Sempre mostrar última página
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
      {/* Informação de itens */}
      <div className="text-sm text-muted-foreground">
        Mostrando <span className="font-semibold text-foreground">{startItem}</span> a{" "}
        <span className="font-semibold text-foreground">{endItem}</span> de{" "}
        <span className="font-semibold text-foreground">{totalItems}</span> artigos
      </div>

      {/* Controles de paginação */}
      <div className="flex items-center gap-2">
        {/* Primeira página */}
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg px-3 py-2"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          aria-label="Primeira página"
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>

        {/* Página anterior */}
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg px-3 py-2"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Página anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Números de página */}
        <div className="flex items-center gap-1">
          {pageNumbers.map((page, index) => {
            if (page === "...") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-3 py-2 text-muted-foreground"
                >
                  ...
                </span>
              );
            }

            const pageNum = page as number;
            const isActive = currentPage === pageNum;

            return (
              <Button
                key={pageNum}
                variant={isActive ? "default" : "outline"}
                size="sm"
                className={`rounded-lg px-4 py-2 min-w-[2.5rem] ${
                  isActive
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft"
                    : "hover:bg-primary/10 hover:border-primary"
                }`}
                onClick={() => onPageChange(pageNum)}
                aria-label={`Página ${pageNum}`}
                aria-current={isActive ? "page" : undefined}
              >
                {pageNum}
              </Button>
            );
          })}
        </div>

        {/* Próxima página */}
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg px-3 py-2"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Próxima página"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Última página */}
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg px-3 py-2"
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Última página"
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}


"use client";

import { Button } from "@/components/ui/button";
import { X, Tag, Filter } from "lucide-react";
import type { BlogCategory } from "@/lib/types/blog";

interface BlogFiltersProps {
  categories: Array<{ category: BlogCategory; count: number }>;
  tags: Array<{ tag: string; count: number }>;
  selectedCategory: BlogCategory | null;
  selectedTags: string[];
  onCategoryChange: (category: BlogCategory | null) => void;
  onTagToggle: (tag: string) => void;
  onClearFilters: () => void;
  totalPosts: number;
}

export function BlogFilters({
  categories,
  tags,
  selectedCategory,
  selectedTags,
  onCategoryChange,
  onTagToggle,
  onClearFilters,
  totalPosts,
}: BlogFiltersProps) {
  const hasActiveFilters = selectedCategory !== null || selectedTags.length > 0;

  return (
    <div className="space-y-6">
      {/* Filtros por Categoria */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Categorias</h3>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            className={`w-full justify-start rounded-lg px-4 py-2 font-medium transition-all ${
              selectedCategory === null
                ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft"
                : "border border-border bg-card/50 text-foreground hover:bg-primary/10 hover:border-primary"
            }`}
            onClick={() => onCategoryChange(null)}
          >
            Todas ({totalPosts})
          </Button>
          {categories.map((item) => (
            <Button
              key={item.category}
              variant={selectedCategory === item.category ? "default" : "outline"}
              size="sm"
              className={`w-full justify-start rounded-lg px-4 py-2 font-medium transition-all ${
                selectedCategory === item.category
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft"
                  : "border border-border bg-card/50 text-foreground hover:bg-primary/10 hover:border-primary"
              }`}
              onClick={() => onCategoryChange(item.category)}
            >
              {item.category} ({item.count})
            </Button>
          ))}
        </div>
      </div>

      {/* Filtros por Tags */}
      {tags.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Tag className="h-5 w-5 text-info-foreground" />
            <h3 className="text-lg font-semibold text-foreground">Tags</h3>
            {selectedTags.length > 0 && (
              <span className="ml-auto px-2 py-0.5 bg-info/20 text-info rounded-full text-xs font-medium">
                {selectedTags.length}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
            {tags.map((item) => {
              const isSelected = selectedTags.includes(item.tag);
              
              return (
                <button
                  key={item.tag}
                  type="button"
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  }`}
                  onClick={() => onTagToggle(item.tag)}
                >
                  <span className="flex items-center justify-between">
                    <span>#{item.tag}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded ${
                      isSelected 
                        ? "bg-white/20" 
                        : "bg-current/10"
                    }`}>
                      {item.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Botão Limpar Filtros */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-border">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full px-4 py-2 text-sm font-medium gap-2"
            onClick={onClearFilters}
          >
            <X className="h-4 w-4" />
            Limpar Filtros
          </Button>
        </div>
      )}
    </div>
  );
}


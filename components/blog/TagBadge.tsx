import { cn } from "@/lib/utils";

interface TagBadgeProps {
  tag: string;
  index?: number;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "info" | "accent" | "secondary";
  className?: string;
}

const sizeClasses = {
  sm: "px-2.5 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
};

const colorVariants = {
  default: "bg-muted/30 text-muted-foreground border-border",
  primary: "bg-primary/20 text-link border-primary/30 hover:bg-primary/25",
  info: "bg-info/10 text-info border-info/20 hover:bg-info/15",
  accent: "bg-accent/10 text-accent border-accent/20 hover:bg-accent/15",
  secondary: "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/15",
};

const autoColors = [
  "bg-primary/20 text-link border-primary/30 hover:bg-primary/25",
  "bg-info/10 text-info border-info/20 hover:bg-info/15",
  "bg-accent/10 text-accent border-accent/20 hover:bg-accent/15",
  "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/15",
];

export function TagBadge({ 
  tag, 
  index = 0, 
  size = "md", 
  variant,
  className 
}: TagBadgeProps) {
  const colorClass = variant 
    ? colorVariants[variant]
    : autoColors[index % autoColors.length];

  return (
    <span
      className={cn(
        "rounded-lg font-medium border transition-all inline-flex items-center",
        sizeClasses[size],
        colorClass,
        className
      )}
    >
      {tag}
    </span>
  );
}


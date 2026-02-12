import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export function SectionHeader({ title, subtitle, className, align = "center", light = false }: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12 relative", 
      align === "center" && "text-center",
      align === "right" && "text-right",
      className
    )}>
      {subtitle && (
        <span className={cn(
          "uppercase tracking-widest text-xs font-bold mb-2 block",
          light ? "text-primary-foreground/80" : "text-primary"
        )}>
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "font-display font-bold text-3xl md:text-4xl lg:text-5xl",
        light ? "text-white" : "text-slate-900"
      )}>
        {title}
      </h2>
      <div className={cn(
        "w-20 h-1 mt-4 bg-accent rounded-full",
        align === "center" && "mx-auto",
        align === "right" && "ml-auto"
      )} />
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { techIcon } from "@/components/brand-icons";
import { cn } from "@/lib/utils";

export function TechBadge({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = techIcon(name);
  return (
    <Badge
      variant="secondary"
      className={cn(
        "gap-1.5 rounded-md font-mono text-[11px] font-normal sm:text-xs",
        className,
      )}
    >
      {Icon ? <Icon className="size-3 shrink-0 opacity-80" aria-hidden /> : null}
      {name}
    </Badge>
  );
}

export function TechList({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((t) => (
        <li key={t}>
          <TechBadge name={t} />
        </li>
      ))}
    </ul>
  );
}

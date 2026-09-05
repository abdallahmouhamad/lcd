interface SectionLabelProps {
  text: string;
  light?: boolean;
}

export default function SectionLabel({ text, light = false }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className={`h-px w-8 ${light ? 'bg-gold/60' : 'bg-gold'}`} />
      <span
        className={`font-heading text-xs font-bold tracking-widest uppercase ${
          light ? 'text-gold/80' : 'text-gold'
        }`}
      >
        {text}
      </span>
    </div>
  );
}

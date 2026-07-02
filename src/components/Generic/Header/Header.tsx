export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 p-10 flex justify-between items-center z-20">
      <div className="text-xs uppercase tracking-[0.25em] font-medium text-muted/70 hover:text-gold transition-colors cursor-pointer hidden md:block">
        Manifesto
      </div>
      <div className="flex-1" />
      <div className="text-xs uppercase tracking-[0.25em] font-medium text-muted/70 hover:text-gold transition-colors cursor-pointer hidden md:block">
        Inquire
      </div>
    </header>
  );
}

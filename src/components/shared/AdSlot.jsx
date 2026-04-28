/**
 * Google Ads placeholder.
 * Replace inner markup with the official AdSense <ins class="adsbygoogle"> tag
 * and (adsbygoogle = window.adsbygoogle || []).push({}) once approved.
 */
export default function AdSlot({ size = "leaderboard", label = "Advertisement", className = "" }) {
  const dims = {
    leaderboard: "h-[90px] md:h-[120px]",          // 728x90 / responsive
    rectangle: "h-[250px]",                         // 300x250
    skyscraper: "h-[600px] w-[160px] mx-auto",      // 160x600
    inline: "h-[100px] md:h-[120px]",
    billboard: "h-[180px] md:h-[250px]",
  };
  return (
    <aside
      role="complementary"
      aria-label={label}
      className={`relative w-full overflow-hidden rounded-md border border-dashed border-border bg-muted/40 ${dims[size]} ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </div>
          <div className="mt-1 text-xs text-muted-foreground/80">
            Google Ads · {size}
          </div>
        </div>
      </div>
      {/* AdSense slot would render here */}
    </aside>
  );
}

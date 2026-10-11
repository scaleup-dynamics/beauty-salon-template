import React, { useEffect } from "react";
import { site } from "../config/site";

export const ThemeInjector: React.FC = () => {
  useEffect(() => {
    // Inject custom colors as CSS variables
    const root = document.documentElement;
    if (site.theme) {
      root.style.setProperty("--brand-primary", site.theme.primary);
      root.style.setProperty("--brand-primary-hover", site.theme.primaryHover || site.theme.primary);
      root.style.setProperty("--brand-accent", site.theme.accent);
      root.style.setProperty("--brand-accent-hover", site.theme.accentHover || site.theme.accent);
      root.style.setProperty("--brand-background", site.theme.background);
      root.style.setProperty("--brand-surface", site.theme.surface || "#FFFFFF");
      root.style.setProperty("--brand-text", site.theme.text);
      root.style.setProperty("--brand-text-muted", site.theme.textMuted || "#6B6562");
      root.style.setProperty("--brand-border", site.theme.border || "#EAE3DF");
    }

    // Prototype noindex meta tag handling
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (site.isPrototype) {
      if (!robotsMeta) {
        robotsMeta = document.createElement("meta");
        robotsMeta.setAttribute("name", "robots");
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute("content", "noindex, nofollow");
    } else if (robotsMeta) {
      robotsMeta.parentNode?.removeChild(robotsMeta);
    }
  }, []);

  return null;
};

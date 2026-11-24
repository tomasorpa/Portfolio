// DeveloperOS™ UI primitives used by the portfolio: Icon, Button, Tag.
import React from 'react';

const GLYPHS = {
  chevronDown: <path d="M6 9l6 6 6-6" />,
  chevronRight: <path d="M9 18l6-6-6-6" />,
  check: <path d="M20 6L9 17l-5-5" />,
  external: (
    <>
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </>
  ),
  x: (
    <>
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </>
  ),
};

export function Icon({ name, size, strokeWidth = 2, className = '', style, ...rest }) {
  const glyph = GLYPHS[name];
  if (!glyph) return null;
  const dims = size ? { width: size, height: size } : undefined;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" className={className}
      style={{ ...dims, ...style }} aria-hidden="true" {...rest}>
      {glyph}
    </svg>
  );
}

export function Button({ variant = 'primary', block = false, external = false, icon, iconRight, children, className = '', ...rest }) {
  const cls = ['dos-btn', variant === 'ghost' && 'dos-btn--ghost', external && 'dos-btn--out', block && 'dos-btn--block', className]
    .filter(Boolean).join(' ');
  const right = external ? 'external' : iconRight;
  return (
    <button className={cls} {...rest}>
      {icon && <Icon name={icon} />}
      {children}
      {right && <Icon name={right} />}
    </button>
  );
}

export function Tag({ variant = 'quiet', children, className = '', ...rest }) {
  const map = { accent: 'dos-tag--accent', quiet: 'dos-tag--quiet', code: 'dos-tag--code' };
  const base = variant === 'code' ? '' : 'dos-tag ';
  return <span className={base + (map[variant] || '') + ' ' + className} {...rest}>{children}</span>;
}

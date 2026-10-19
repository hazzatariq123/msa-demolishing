import React from 'react';
import { pageHref } from '../data/routes';

interface PageLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /** Page id, for example "about" or "building-demolition". */
  to: string;
  onNavigate: (pageId: string) => void;
}

/**
 * A real `<a href>` (so crawlers, middle-click and "open in new tab" work) that navigates
 * without a full page reload on a normal click.
 */
export const PageLink: React.FC<PageLinkProps> = ({
  to,
  onNavigate,
  onClick,
  children,
  ...rest
}) => (
  <a
    {...rest}
    href={pageHref(to)}
    onClick={(event) => {
      onClick?.(event);
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      event.preventDefault();
      onNavigate(to);
    }}
  >
    {children}
  </a>
);

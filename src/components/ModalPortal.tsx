import React from 'react';
import { createPortal } from 'react-dom';

/**
 * Renders pop-ups at the end of <body>. Page sections use `content-visibility` for faster rendering,
 * which would otherwise make a `position: fixed` pop-up position (and clip) relative to its section.
 */
export const ModalPortal: React.FC<{ children: React.ReactNode }> = ({ children }) =>
  typeof document === 'undefined' ? null : createPortal(children, document.body);

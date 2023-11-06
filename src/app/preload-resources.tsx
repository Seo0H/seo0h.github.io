'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  ReactDOM.preload('https://fonts.cdnfonts.com/css/consola-mono', { as: 'font' });
  ReactDOM.preload(
    'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css',
    { as: 'font' },
  );

  return null;
}

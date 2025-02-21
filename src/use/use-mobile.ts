import { useMemo } from 'react';

export const useMobile = () =>
	useMemo(() => document.body.classList.contains('mobile'), []);

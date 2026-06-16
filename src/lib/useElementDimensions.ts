import { useCallback, useState } from 'react';

interface Dimensions {
  width: number;
  height: number;
  top: number;
  left: number;
}

export function useElementDimensions(ref: React.RefObject<HTMLElement | null>) {
  const [dimensions, setDimensions] = useState<Dimensions>({
	width: 0,
	height: 0,
	top: 0,
	left: 0,
  });

  const measure = useCallback(() => {
	if (ref.current) {
	  const rect = ref.current.getBoundingClientRect();
	  setDimensions({
		width: rect.width,
		height: rect.height,
		top: rect.top,
		left: rect.left,
	  });
	}
  }, [ref]);

  return [dimensions, measure] as const;
}

/* eslint-disable react-hooks/exhaustive-deps */
import { useBookStore } from '@/app/zustand';
import { Box } from '@mui/joy';
import { useEffect, useRef } from 'react';

export type TextContainerProps = {
  onScroll?: React.UIEventHandler<HTMLDivElement>;
} & React.PropsWithChildren;

let SCROLL_SAVING_TIMEOUT: ReturnType<typeof setTimeout> | null = null;

export const TextContainer = ({ children }: TextContainerProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scroll, setScroll } = useBookStore();

  const onTextContainerScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    if (SCROLL_SAVING_TIMEOUT) {
      clearTimeout(SCROLL_SAVING_TIMEOUT);
    }

    SCROLL_SAVING_TIMEOUT = setTimeout(() => {
      const element = e.target as HTMLDivElement;

      if (scroll === element.scrollTop) return;

      setScroll(element.scrollTop);
    }, 500);
  };

  useEffect(() => {
    if (!ref?.current) return;

    ref?.current?.scrollTo({ top: scroll });
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        transform: 'perspective(300px) rotateX(10deg);',
        overflow: 'auto',
        width: '100%',
        height: '100%',
      }}
      onScroll={onTextContainerScroll}
    >
      <Box
        sx={{
          maxWidth: '60%',
          position: 'relative',
          margin: '0 auto',
          padding: '300px 0',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

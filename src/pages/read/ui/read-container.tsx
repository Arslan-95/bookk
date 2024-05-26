import { useSettingsStore } from '@/app/zustand';
import { Box } from '@mui/joy';
import React from 'react';

export type ReadContainerProps = React.PropsWithChildren;

export const ReadContainer = ({ children }: ReadContainerProps) => {
  const { blur } = useSettingsStore();

  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        backdropFilter: `blur(${blur}px)`,
        background: `rgba(1, 1, 1, ${blur ? blur / 100 : 0})`,
      }}
    >
      {children}
    </Box>
  );
};

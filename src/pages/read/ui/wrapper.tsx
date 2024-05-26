import { Box } from '@mui/joy';

export type WrapperProps = {
  className?: string;
} & React.PropsWithChildren;

export const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <Box
      className={className}
      sx={{
        position: 'relative',
        display: 'flex',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        bgcolor: 'black',
      }}
    >
      {children}
    </Box>
  );
};

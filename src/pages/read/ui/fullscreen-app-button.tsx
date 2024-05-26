import { IconButton } from '@mui/joy';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

export const FullscreenAppButton = () => {
  const onClick = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen && document.exitFullscreen();
    } else {
      const body = document.body;

      body.requestFullscreen && body.requestFullscreen();
    }
  };

  return (
    <IconButton
      sx={{
        position: 'absolute',
        right: '50px',
        top: '10px',
        borderRadius: '12px',
      }}
      onClick={onClick}
    >
      <FullscreenIcon />
    </IconButton>
  );
};

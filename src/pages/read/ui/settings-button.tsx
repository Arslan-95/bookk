import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/joy';

export type SettingsButtonProps = {
  onClick?: () => void;
};

export const SettingsButton = ({ onClick }: SettingsButtonProps) => {
  return (
    <IconButton
      sx={{
        position: 'absolute',
        right: '20px',
        top: '10px',
        borderRadius: '12px',
      }}
      onClick={onClick}
    >
      <SettingsIcon />
    </IconButton>
  );
};

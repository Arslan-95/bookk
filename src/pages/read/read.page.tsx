/* eslint-disable react-hooks/exhaustive-deps */
import styles from './read.page.module.scss';
import { Box, Typography } from '@mui/joy';
import { useBookStore } from '@/app/zustand';
import { SettingsModal } from './ui/settings-modal';
import { useState } from 'react';
import { TextContainer } from './ui/text-container';
import { Video } from './ui/video';
import { SettingsButton } from './ui/settings-button';
import { FullscreenAppButton } from './ui/fullscreen-app-button';
import { ReadContainer } from './ui/read-container';
import { Wrapper } from './ui/wrapper';

export const ReadPage = () => {
  const { text } = useBookStore();
  const [isSettingsModal, setIsSettingsModal] = useState(false);
  return (
    <Wrapper className={styles.readPage}>
      <Video />
      <Box sx={{ zIndex: '2' }}>
        <SettingsButton onClick={() => setIsSettingsModal(true)} />
        <FullscreenAppButton />
        <SettingsModal
          onClose={() => setIsSettingsModal(false)}
          open={isSettingsModal}
        />
      </Box>

      <ReadContainer>
        <TextContainer>
          <Typography level="h3" textColor="neutral.200">
            {text}
          </Typography>
        </TextContainer>
      </ReadContainer>
    </Wrapper>
  );
};

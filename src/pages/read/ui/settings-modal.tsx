import {
  FormControl,
  FormLabel,
  Modal,
  ModalClose,
  ModalDialog,
  Typography,
  IconButton,
  Stack,
  Textarea,
  Input,
} from '@mui/joy';
import { InputFileUpload } from './input-file-upload';
import { useBookStore, useSettingsStore } from '@/app/zustand';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SaveIcon from '@mui/icons-material/Save';
import { useRef } from 'react';

export type SettingsModalProps = {
  open?: boolean;
  onClose?: () => void;
};

export const SettingsModal = ({ open, onClose }: SettingsModalProps) => {
  const { blur, setBlur, isVideoMuted, setVideo, setIsVideoMuted } =
    useSettingsStore();
  const { text, setText } = useBookStore();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const blurInputRef = useRef<HTMLInputElement | null>(null);

  const onUploadVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = e.currentTarget.files;
    const file = video && video[0];
    const reader = new FileReader();

    if (!file) return;

    reader.onload = (e) => {
      const src = e.target?.result;

      setVideo(src as string);
    };

    reader.readAsDataURL(file);
  };

  const toggleVideoMute = () => {
    setIsVideoMuted(!isVideoMuted);
  };

  const saveText = () => {
    if (!textareaRef?.current) return;

    const text = textareaRef.current.value;
    setText(text);
  };

  const saveBlurValue = () => {
    if (!blurInputRef?.current) return;

    const blurValue = blurInputRef.current.value;
    console.log(blurValue);

    setBlur(+blurValue);
  };

  return (
    <Modal open={!!open} onClose={onClose}>
      <ModalDialog>
        <Stack alignItems="flex-start" gap={2}>
          <ModalClose />
          <Typography level="h3">Settings</Typography>
          <FormControl>
            <FormLabel>Upload video</FormLabel>
            <InputFileUpload onUpload={onUploadVideo} />
          </FormControl>
          <FormControl>
            <FormLabel>Mute video</FormLabel>
            <IconButton onClick={toggleVideoMute}>
              {isVideoMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
            </IconButton>
          </FormControl>
          <FormControl>
            <FormLabel>Blur</FormLabel>
            <Stack direction="row">
              <Input
                defaultValue={blur}
                slotProps={{ input: { ref: blurInputRef } }}
              />
              <IconButton onClick={saveBlurValue}>
                <SaveIcon />
              </IconButton>
            </Stack>
          </FormControl>

          <FormControl sx={{ marginTop: 1, width: '100%' }}>
            <FormLabel>Text</FormLabel>
            <Textarea
              defaultValue={text}
              slotProps={{ textarea: { ref: textareaRef } }}
              maxRows={5}
            />

            <Stack alignItems="flex-start" sx={{ marginTop: 1 }}>
              <IconButton onClick={saveText}>
                <SaveIcon />
              </IconButton>
            </Stack>
          </FormControl>
        </Stack>
      </ModalDialog>
    </Modal>
  );
};

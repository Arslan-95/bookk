import { useSettingsStore } from '@/app/zustand';

export const Video = () => {
  const { video, isVideoMuted } = useSettingsStore();

  return (
    video && (
      <video
        src={video}
        autoPlay
        loop
        style={{
          position: 'absolute',
          left: '0',
          top: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
        muted={isVideoMuted}
      />
    )
  );
};

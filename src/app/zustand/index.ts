import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UseSettingsStore = {
  video?: string | null;
  isVideoMuted: boolean;
  blur?: number;

  setIsVideoMuted: (muted: boolean) => void;
  setVideo: (video?: string | null) => void;
  setBlur: (blur: number) => void;
};

export type UseBookStore = {
  text?: string;
  setText: (text: string) => void;

  scroll?: number;
  setScroll: (scroll: number) => void;
};

export const useSettingsStore = create(
  persist<UseSettingsStore>(
    (set) => ({
      isVideoMuted: false,
      setIsVideoMuted: (muted) => set({ isVideoMuted: muted }),
      setVideo: (video) => set({ video }),
      setBlur: (blur) => set({ blur }),
    }),
    {
      name: 'settings',
      partialize: (state) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { video, ...rest } = state;
        return rest;
      },
    }
  )
);

export const useBookStore = create(
  persist<UseBookStore>(
    (set) => ({
      text: '',
      setText: (text) => set({ text }),

      scroll: 0,
      setScroll: (scroll) => set({ scroll }),
    }),
    {
      name: 'book',
    }
  )
);

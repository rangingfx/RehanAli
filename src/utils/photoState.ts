// photoState.ts - Authentic User Profile Photo State
const STORAGE_KEY = 'rehan_ali_custom_photo';
const EVENT_NAME = 'rehan_ali_photo_changed';

// Authentic portraits provided by Rehan Ali
export const DEFAULT_PROFILE_PHOTO = '/rehen.jpeg';
export const FACTORY_ACTION_PHOTO = '/cv.jpeg';

export function getSavedProfilePhoto(): string {
  if (typeof window === 'undefined') return DEFAULT_PROFILE_PHOTO;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved && saved.trim().length > 0 ? saved : DEFAULT_PROFILE_PHOTO;
  } catch {
    return DEFAULT_PROFILE_PHOTO;
  }
}

export function saveProfilePhoto(dataUrl: string | null): void {
  if (typeof window === 'undefined') return;
  try {
    if (dataUrl) {
      localStorage.setItem(STORAGE_KEY, dataUrl);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
    const current = getSavedProfilePhoto();
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: current }));
  } catch (e) {
    console.warn('Could not save profile photo to storage:', e);
  }
}

export function subscribeProfilePhoto(callback: (photoUrl: string) => void): () => void {
  const handler = (e: Event) => {
    const custom = e as CustomEvent<string>;
    if ('detail' in custom && typeof custom.detail === 'string') {
      callback(custom.detail);
    } else {
      callback(getSavedProfilePhoto());
    }
  };

  window.addEventListener(EVENT_NAME, handler);
  window.addEventListener('storage', handler);

  return () => {
    window.removeEventListener(EVENT_NAME, handler);
    window.removeEventListener('storage', handler);
  };
}

import audioAlert from '../assets/audios/gravitational_beep_fixed.mp3';

export function loadBeep() {
  const audio = new Audio(audioAlert);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play();
  };
}

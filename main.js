import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    const toast = document.getElementById('toast');
    if (toast) {
      toast.textContent = 'Versi baru tersedia! Memuat ulang secara otomatis...';
      toast.classList.add('show');
      setTimeout(() => {
        updateSW(true);
      }, 2000);
    }
  },
  onOfflineReady() {
    console.log('Aplikasi siap bekerja offline');
    const toast = document.getElementById('toast');
    if (toast) {
      toast.textContent = 'Aplikasi siap bekerja offline!';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
    }
  },
})

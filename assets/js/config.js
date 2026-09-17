/* ============================================================
   config.js · 接口地址（本地/线上自动切换）
   本地调试：前端跑在 localhost，自动指向本地后端 localhost:8000
   线上部署：前端跑在正式域名，指向线上后端
   ============================================================ */
window.APP_CONFIG = {
  API_BASE: (() => {
    const host = location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') {
      return 'http://localhost:8000';           // 本地后端
    }
    return 'https://api.soundofspring.travel';  // 线上后端（正式域名待定）
  })()
};

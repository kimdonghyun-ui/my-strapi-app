// config/server.js
module.exports = ({ env }) => {
  const isProd = env('NODE_ENV') === 'production';

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS'),
    },

    // 배포(Cloudtype)에서만 설정: 관리자/업로드 등 절대경로 이슈 방지
    url: isProd ? env('PUBLIC_URL') : undefined,   // 예) https://your-app.cloudtype.app
    proxy: isProd,                                 // 프록시/로드밸런서 뒤에 있을 때 권장

    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },

    // (옵션) 관리자 경로를 커스터마이즈하고 싶으면:
    // admin: {
    //   url: '/admin',               // 기본값이라 보통 안 건드려도 됨
    // },
  };
};
// api/config.js
// Vercel 환경변수를 안전하게 전달하는 역할
// 이 파일은 GitHub에 올려도 안전합니다 (비밀번호가 없음)

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    supabaseUrl: process.env.SUPABASE_URL || '',
    supabaseKey: process.env.SUPABASE_ANON_KEY || ''
  });
}

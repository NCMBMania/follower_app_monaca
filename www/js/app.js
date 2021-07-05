const applicationKey = 'YOUR_APPLICATION_KEY';
const clientKey = 'YOUR_CLIENT_KEY';
const ncmb = new NCMB(applicationKey, clientKey);

var $ = Dom7;

var app = new Framework7({
  name: 'My App', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element


  // App store
  store: store,
  // App routes
  routes: routes,
});

// フォームの内容をオブジェクト化します
const serializeForm = (ele) => {
  // フォームを取得します
  const f = new URLSearchParams(new FormData($(ele)[0]));
  // フォームの内容をオブジェクトに入れ直します
  const params = {};
  for (const values of f) {
    params[values[0]] = values[1];
  }
  return params;
}

// 認証状態をチェックする関数
// 認証が問題なければ true / ログインしていない or セッションに問題がある場合は false
const checkAuth = async () => {
  // 現在のログインユーザを取得
  const user = ncmb.User.getCurrentUser();
  // データがない場合は false を返す
  if (!user) return false;
  try {
    // セッションの有効性チェック
    await ncmb.DataStore('Test').fetch();
    // 問題なければ true
    return true;
  } catch (e) {
    // セッションに問題がある場合は false
    return false;
  }
}

// ユーザプロフィールを返します。なければ新規データを返します。
const getProfile = async () => {
  // ログインユーザを取得
  const user = ncmb.User.getCurrentUser();
  // Profileクラス（検索用）を準備
  const Profile = ncmb.DataStore('Profile');
  // 自分のデータを検索します
  const profile = await Profile
    .equalTo('user.objectId', user.objectId)
    .fetch();
  // データがあれば（objectIdがあれば）データを、なければ新規Profileを返します
  return profile.objectId ? profile : new Profile;
}

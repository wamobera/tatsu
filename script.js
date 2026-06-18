function showContent(id) {
  // すべてのコンテンツを隠す
  document.querySelectorAll('.content').forEach(el => el.style.display = 'none');
  // 指定したIDのコンテンツだけ表示する
  document.getElementById(id).style.display = 'block';
}
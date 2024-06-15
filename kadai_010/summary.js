//文字色変化
$('#change-color').on('click', function(){
  $('#target').css('color', 'pink');
});

//文字内容変化
$('#change-text').on('click', function(){
  $('#target').text('文字内容が変更されました。');
});

//フェードアウト
$('#fade-out').on('click', function () {
  // フェードアウトで文字が消える
  $('#target').fadeOut();
});

//フェードイン
$('#fade-in').on('click', function () {
  // フェードインで文字が現れる
  $('#target').fadeIn();
});
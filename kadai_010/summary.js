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
  // 不透明度を0にする（フェードアウトする）
  $('#target').css('opacity', 0);
});

//フェードイン
$('#fade-in').on('click', function () {
  // 不透明度を0にする（フェードインする）
  $('#target').css('opacity', 1);
});
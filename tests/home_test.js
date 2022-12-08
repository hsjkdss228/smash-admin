Feature('홈 페이지');

Scenario('홈 페이지 접속', ({ I }) => {
  // When
  I.amOnPage('/');

  // Then
  I.see(('운동 장소 관리'));
  I.see(('사용자 권한 관리'));
});

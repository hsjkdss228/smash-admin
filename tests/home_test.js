Feature('홈 페이지');

Scenario('홈 페이지 접근 시', ({ I }) => {
  // When
  I.amOnPage('/');

  // Then
  I.see(('Hello, world!'));
});

Feature('운동 장소 관리 페이지');

Before(({ I }) => {
  I.clearSetups();
});

Scenario('운동 장소 관리 페이지 접속 (홈 페이지에서 접근)', ({ I }) => {
  // When
  I.amOnPage('/');
  I.click('운동 장소 관리');

  // Then
  I.see('운동 장소 목록 조회');
  I.see('운동 장소 등록');
});

Scenario('운동 장소 관리 페이지 접속 (URI)', ({ I }) => {
  // When
  I.amOnPage('/places');

  // Then
  I.see('운동 장소 목록 조회');
  I.see('운동 장소 등록');
});

Scenario('운동 장소 목록 확인 (등록된 장소가 없는 경우)', ({ I }) => {
  // When
  I.amOnPage('/places');
  I.click('운동 장소 목록 조회');

  // Then
  I.dontSee('운동 장소 등록하기');
  I.see('운동 장소 목록 리스트');
  I.see('ID');
  I.see('장소명');
  I.see('종목');
  I.see('주소');
  I.see('연락처');
  I.see('예정 운동 조회하기');
  I.see('등록된 장소가 없습니다.');
});

Scenario('운동 장소 목록 확인 (등록된 장소가 있는 경우)', ({ I }) => {
  // Given
  I.setupPlaces();

  // When
  I.amOnPage('/places');
  I.click('운동 장소 목록 조회');

  // Then
  I.see('운동 장소 목록 리스트');
  I.see('1');
  I.see('테니스포레');
  I.see('테니스');
  I.see('서울 성동구 서울숲2길 32-14 B1 102호');
  I.see('02-466-8690');
  I.see('조회');
});

Scenario('운동 장소 등록 화면 조회', ({ I }) => {
  // When
  I.amOnPage('/places');
  I.click('운동 장소 등록');

  // Then
  I.dontSee('운동 장소 목록 리스트');
  I.see('운동 장소 등록하기');
  I.see('장소명');
  I.see('종목');
  I.see('주소');
  I.see('연락처');
  I.see('등록하기');
});

Scenario('운동 장소 등록', ({ I }) => {
  // When
  I.amOnPage('/places');
  I.click('운동 장소 등록');
  I.fillField('장소명', '잠실야구장');
  I.fillField('종목', '야구');
  I.fillField('주소', '서울 송파구 올림픽로 25');
  I.fillField('연락처', '1661-0965');
  I.click('등록하기');

  // Then
  I.see('장소 등록이 완료되었습니다.');
  I.click('확인');
  I.see('운동 장소 목록 리스트');
  I.see('잠실야구장');
});

// Scenario('운동 장소 등록 (지도에서 등록)', ({ I }) => {

// });

Scenario('운동 장소 삭제', ({ I }) => {
  // Given
  // TODO: Query String을 이용한 backdoor 접근으로 데이터 생성

  // When
  I.amOnPage('/places');
  I.click('운동 장소 목록 조회');
  // TODO: I.see(등록한 장소 이름);
  // TODO: I click checkbox
  I.click('삭제');
  I.see('정말로 선택한 운동 장소를 삭제하시겠습니까?');
  I.click('예');

  // Then
  I.see('선택한 운동 장소의 삭제가 완료되었습니다.');
  I.click('확인');
  // TODO: I.dontSee(등록한 장소 이름);
});

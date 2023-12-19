import OnCallDate from '../../src/model/OnCallDate.js';

describe('OnCallDate 단위 테스트', () => {
  test.each([
    [[1, 1, 'monday']],
    [[3, 1, 'monday']],
    [[5, 5, 'monday']],
    [[6, 6, 'monday']],
    [[8, 15, 'monday']],
    [[10, 3, 'monday']],
    [[10, 9, 'monday']],
    [[12, 25, 'monday']],
  ])(
    'setOrderType을 통해서 법정공휴일인 날에는 평일임에도 isHoliday를 true로 지정해야 한다.',
    input => {
      const onCallDate = new OnCallDate(...input);

      expect(onCallDate.isHoliday()).toEqual(true);
    },
  );

  test.each([
    [[1, 3, 'saturday']],
    [[3, 6, 'sunday']],
    [[5, 10, 'saturday']],
    [[6, 12, 'saturday']],
    [[8, 15, 'sunday']],
    [[10, 10, 'saturday']],
    [[10, 31, 'saturday']],
    [[12, 31, 'sunday']],
  ])(
    'setOrderType을 통해서 토요일과 일요일은 isHoliday를 true로 지정해야 한다.',
    input => {
      const onCallDate = new OnCallDate(...input);

      expect(onCallDate.isHoliday()).toEqual(true);
    },
  );

  test('setWorker과 getWorker을 이용해 worker를 올바르게 할당하고 호출해야 한다.', () => {
    const onCallDate = new OnCallDate(1, 1, 'monday');
    onCallDate.setWorker('태훈');

    expect(onCallDate.getWorker()).toEqual('태훈');
  });
});

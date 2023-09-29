import isArray from 'lodash/isArray';
import isString from 'lodash/isString';

export const getBalanceResult = (events, members) => {
  if (isArray(members) && members.length > 0) {
    let result = members.map(member => {
      return {
        memberID: member.id,
        name: member.name,
        needToPay: 0,
      };
    });

    //=============================================================================

    if (isArray(events) && events.length > 0) {
      events.forEach(event => {
        const cost = Number(event.cost) || 0; // 此事件總共有多少錢要分
        let totalScale = 0; // 此事件總共有幾份要分

        // 先計算這個事件中總共有幾份要分
        if (isArray(event.shareForWhom) && event.shareForWhom.length > 0) {
          event.shareForWhom.forEach(eachShare => {
            totalScale = totalScale + (Number(eachShare.scale) || 0);
          });
        }

        // 從 result 各別計算每個人需要分幾份
        result = result.map(memberFromResult => {
          let needToPayResult = memberFromResult.needToPay;

          const shareForThisMember = event.shareForWhom.find(
            eachShare =>
              isString(eachShare.memberID) &&
              isString(memberFromResult.memberID) &&
              eachShare.memberID === memberFromResult.memberID,
          );

          // 付錢或收錢的人要把錢加給他
          if (
            isString(event.paidBy) &&
            isString(memberFromResult.memberID) &&
            event.paidBy === memberFromResult.memberID
          ) {
            needToPayResult = needToPayResult + event.cost * -1;
          }

          return {
            memberID: memberFromResult.memberID,
            name: memberFromResult.name,
            needToPay:
              // 如果這個人的 ID 有存在在這次的事件中，就要計算
              shareForThisMember ? needToPayResult + (cost / totalScale) * shareForThisMember.scale : needToPayResult,
          };
        });
      });

      return result;

      //=============================================================================
    } else {
      console.log('No event in this project');
      return result;
    }
  } else {
    console.log('No member in this project');
    return [];
  }
};

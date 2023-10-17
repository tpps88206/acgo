import clone from 'lodash/clone';
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

          // 從 result 各別計算每個人需要分幾份
          result = result.map(memberFromResult => {
            let needToPayResult = memberFromResult.needToPay;

            const shareForThisMember = event.shareForWhom.find(
              eachShare =>
                isString(eachShare.id) &&
                isString(memberFromResult.memberID) &&
                eachShare.id === memberFromResult.memberID,
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
        }
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

export const getBalancesTotal = balanceResult => {
  let total = 0;

  if (isArray(balanceResult) && balanceResult.length > 0) {
    balanceResult.forEach(item => {
      if (item.needToPay > 0) {
        total = total + item.needToPay;
      }
    });
  }

  return total;
};

export const getBalancesCheckout = balanceResult => {
  const result = [];

  if (isArray(balanceResult) && balanceResult.length > 0) {
    // 先把要收錢和付錢的人分兩組
    const needReceivedList = [];
    const needPaidList = [];

    balanceResult.forEach(item => {
      if (item.needToPay > 0) {
        needReceivedList.push(clone(item));
      } else {
        needPaidList.push(clone(item));
      }
    });

    needReceivedList.forEach(owes => {
      needPaidList.some(paid => {
        if (paid.needToPay < 0) {
          if (owes.needToPay + paid.needToPay >= 0) {
            // 付錢的人需要付的錢少於收錢人
            result.push({
              memberID: paid.memberID,
              name: paid.name,
              owesMemberID: owes.memberID,
              owesName: owes.name,
              cost: paid.needToPay * -1,
            });

            // 收錢的人扣掉已經被付掉的錢
            owes.needToPay = owes.needToPay + paid.needToPay;

            // 因為付完錢了，把金額改成 0
            paid.needToPay = 0;

            return false;
          } else {
            // 付錢的人需要付的錢多於收錢人
            result.push({
              memberID: paid.memberID,
              name: paid.name,
              owesMemberID: owes.memberID,
              owesName: owes.name,
              cost: owes.needToPay,
            });

            // 付錢的人扣掉已經付掉的錢
            paid.needToPay = owes.needToPay + paid.needToPay;

            // 因為收完錢了，把金額改成 0
            owes.needToPay = 0;

            return true;
          }
        }
      });
    });

    return result;
  } else {
    return [];
  }
};

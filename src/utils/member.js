import isArray from 'lodash/isArray';

export const flatMemberListToArrayWithIDAndHideScaleZero = members => {
  let result = [];

  if (isArray(members)) {
    members.forEach(member => {
      if (member?.scale !== 0) {
        result.push(member?.id);
      }
    });
  }

  return result;
};

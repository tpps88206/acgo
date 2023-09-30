// 專案的所有成員的表格內容
export const projectMemberListColumns = [
  { name: '姓名', uid: 'name' },
  { name: '權限', uid: 'role' },
  { name: '操作', uid: 'actions' },
];

// 每項事件中每位成員分多少的表格內容
// TODO: 增加計算完比例後的金額
export const eventMemberListColumns = [
  { name: '姓名', uid: 'name' },
  { name: '份數', uid: 'scale' },
];

export const memberRoleArray = [
  {
    value: 'deactivated',
    label: '停用',
  },
  {
    value: 'view',
    label: '可觀看',
  },
  {
    value: 'edit',
    label: '可編輯',
  },
  {
    value: 'admin',
    label: '管理員',
  },
];

export const memberRoleColorMap = {
  deactivated: 'default',
  view: 'warning',
  edit: 'primary',
  admin: 'danger',
};

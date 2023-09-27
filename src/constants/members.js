export const tableHeaderColumns = [
  { name: '姓名', uid: 'name' },
  { name: '權限', uid: 'role' },
  { name: '操作', uid: 'actions' },
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

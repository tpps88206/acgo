import React from 'react';

import { Chip, Input, Tooltip, User } from '@nextui-org/react';

import { memberRoleColorMap } from '../constants/members.js';
import { DeleteIcon } from '../icons/Delete.icon.jsx';
import { EditIcon } from '../icons/Edit.icon.jsx';

const MemberSelectItem = ({ member, columnKey, setValue }) => {
  const renderCell = () => {
    const cellValue = member[columnKey];

    switch (columnKey) {
      case 'name':
        return (
          <User avatarProps={{ radius: 'lg', src: member?.avatar }} name={cellValue}>
            {member?.email}
          </User>
        );
      case 'role':
        return (
          <Chip className="capitalize" color={memberRoleColorMap[member?.role]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case 'actions':
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="編輯">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="刪除">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      case 'scale':
        return (
          <Input
            type="number"
            label="份數"
            variant="bordered"
            labelPlacement="outside"
            value={cellValue}
            onChange={setValue}
          />
        );
      default:
        return cellValue;
    }
  };

  return <div>{renderCell()}</div>;
};

export default MemberSelectItem;

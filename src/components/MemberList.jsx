import React, { useCallback } from 'react';

import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from '@nextui-org/react';

import { memberRoleColorMap, tableHeaderColumns } from '../constants/members.js';
import { DeleteIcon } from '../icons/Delete.icon.jsx';
import { EditIcon } from '../icons/Edit.icon.jsx';

const MemberList = ({ members }) => {
  const renderCell = useCallback((member, columnKey) => {
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
      default:
        return cellValue;
    }
  }, []);

  return (
    <div>
      <Table>
        <TableHeader columns={tableHeaderColumns}>
          {column => (
            <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={members}>
          {member => (
            <TableRow key={member?.id}>{columnKey => <TableCell>{renderCell(member, columnKey)}</TableCell>}</TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default MemberList;

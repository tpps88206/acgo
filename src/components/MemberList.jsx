import React from 'react';

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';

import MemberSelectItem from './MemberSelectItem.jsx';

const MemberList = ({ members, tableColumns, setValue }) => {
  return (
    <div>
      <Table>
        <TableHeader columns={tableColumns}>
          {column => (
            <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={members}>
          {member => (
            <TableRow key={member?.id}>
              {columnKey => (
                <TableCell>
                  <MemberSelectItem member={member} columnKey={columnKey} setValue={e => setValue(e, member?.id)} />
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default MemberList;

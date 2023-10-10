import React from 'react';

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';

import MemberSelectItem from './MemberSelectItem.jsx';

const MemberList = ({ members, tableColumns, setValue }) => {
  return (
    <div>
      <Table className="container mx-auto px-4">
        <TableHeader columns={tableColumns}>
          {column => <TableColumn key={column.uid}>{column.name}</TableColumn>}
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

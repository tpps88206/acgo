import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Input, Select, SelectItem } from '@nextui-org/react';

import { memberRoleArray } from '../constants/members.js';
import { addMember } from '../services/firebase/member.js';

const AddMemberPage = () => {
  const { projectID } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [role, setRole] = useState('view');

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeRole = event => {
    setRole(event.target.value);
  };

  const handleClickAdd = () => {
    addMember(projectID, name, role)
      .then(() => {
        navigate(`/p/${projectID}/members`, {
          relative: 'path',
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleClickCancel = () => {
    navigate(`/p/${projectID}/members`, {
      relative: 'path',
    });
  };

  return (
    <div>
      <Input
        className="max-w-xs bg-white"
        aria-label="name input"
        label="姓名"
        variant="bordered"
        labelPlacement="outside"
        onChange={handleChangeName}
      />
      <Select
        label="設定權限"
        aria-label="role input"
        className="max-w-xs"
        variant="bordered"
        labelPlacement="outside"
        onChange={handleChangeRole}
      >
        {memberRoleArray.map(memberRole => (
          <SelectItem key={memberRole.value} value={memberRole.value}>
            {memberRole.label}
          </SelectItem>
        ))}
      </Select>
      <Button aria-label="cancel" color="primary" variant="faded" onClick={handleClickCancel}>
        取消
      </Button>
      <Button aria-label="new" color="primary" variant="bordered" onClick={handleClickAdd}>
        新增
      </Button>
    </div>
  );
};

export default AddMemberPage;

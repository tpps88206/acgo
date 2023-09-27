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
        navigate(`../p/${projectID}/members`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <Input className="max-w-xs bg-white" label="姓名" variant="bordered" onChange={handleChangeName} />
      <Select label="設定權限" className="max-w-xs" onChange={handleChangeRole}>
        {memberRoleArray.map(memberRole => (
          <SelectItem key={memberRole.value} value={memberRole.value}>
            {memberRole.label}
          </SelectItem>
        ))}
      </Select>
      <Button color="primary" onClick={handleClickAdd}>
        新增
      </Button>
    </div>
  );
};

export default AddMemberPage;

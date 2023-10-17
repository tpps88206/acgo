import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Card, CardBody, Input, Select, SelectItem } from '@nextui-org/react';

import { memberRoleArray } from '../constants/members.js';
import { useModalDispatch } from '../context/Modal.context.jsx';
import { addMember } from '../services/firebase/member.js';

const AddMemberPage = () => {
  const { projectID } = useParams();
  const navigate = useNavigate();
  const modalDispatch = useModalDispatch();
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
        modalDispatch({ type: 'openSuccessModal' });

        navigate(`/p/${projectID}/members`, {
          relative: 'path',
        });
      })
      .catch(error => {
        modalDispatch({ type: 'openErrorModal' });

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
      <Card className="container mx-auto px-4">
        <CardBody>
          <Input
            className="max-w-xs bg-white my-4"
            aria-label="name input"
            label="姓名"
            variant="bordered"
            labelPlacement="outside"
            onChange={handleChangeName}
          />
          <Select
            label="設定權限"
            aria-label="role input"
            className="max-w-xs bg-white my-4"
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
        </CardBody>
      </Card>
      <div className="flex flex-row mt-4">
        <Button
          className="max-w-[6rem] basis-1/2 sm:ml-4"
          aria-label="cancel"
          color="danger"
          onClick={handleClickCancel}
        >
          取消
        </Button>
        <Button
          className="max-w-[6rem] basis-1/2 ml-auto sm:mr-4"
          aria-label="new"
          color="primary"
          onClick={handleClickAdd}
        >
          新增
        </Button>
      </div>
    </div>
  );
};

export default AddMemberPage;

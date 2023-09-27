import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Input } from '@nextui-org/react';

import { addEvent } from '../services/firebase/event.js';

const AddEventPage = () => {
  const { projectID } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [cost, setCost] = useState(0);

  const handleChangeTitle = event => {
    setTitle(event.target.value);
  };

  const handleChangeCost = event => {
    setCost(event.target.value);
  };

  const handleClickAdd = () => {
    addEvent(projectID, title, cost)
      .then(() => {
        navigate(`../p/${projectID}`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <Input className="max-w-xs bg-white" label="品項" variant="bordered" onChange={handleChangeTitle} />
      <Input className="max-w-xs bg-white" type="number" label="金額" variant="bordered" onChange={handleChangeCost} />
      <Button color="primary" onClick={handleClickAdd}>
        新增
      </Button>
    </div>
  );
};

export default AddEventPage;

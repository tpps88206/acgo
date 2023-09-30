import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Avatar, Button, Chip, Input, Select, SelectItem } from '@nextui-org/react';

import AdjustMemberScale from '../components/AdjustMemberScale.jsx';
import EventTabs from '../components/EventTabs.jsx';
import { addEvent } from '../services/firebase/event.js';
import { getMembers } from '../services/firebase/member.js';
import { flatMemberListToArrayWithIDAndHideScaleZero } from '../utils/member.js';

const AddEventPage = ({ mode }) => {
  const { projectID } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [cost, setCost] = useState(0);
  const [members, setMembers] = useState([]);
  const [paidBy, setPaidBy] = useState('');
  const [shareForWhom, setShareForWhom] = useState([]);
  const [isAdjustMemberScale, setIsAdjustMemberScale] = useState(false);

  useEffect(() => {
    // TODO: 判斷是否改用監聽事件來即時更新 https://firebase.google.com/docs/database/web/read-and-write?hl=zh&authuser=6#web_value_events
    getMembers(projectID).then(data => {
      setMembers(data);
    });
  }, [projectID]);

  const handleChangeTitle = event => {
    setTitle(event.target.value);
  };

  const handleChangeCost = event => {
    setCost(event.target.value);
  };

  const handleClickAdd = () => {
    addEvent(projectID, title, mode !== 'expense' ? cost : cost * -1, paidBy, shareForWhom)
      .then(() => {
        navigate(`/p/${projectID}`, {
          relative: 'path',
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleChangePaidBy = event => {
    setPaidBy(event.target.value);
  };

  const handleChangeShareForWhom = event => {
    const shareForWhomList = event.target.value?.split(',').map(v => {
      return {
        id: v,
        scale: 1,
      };
    });

    setShareForWhom(shareForWhomList);
  };

  const handleClickMemberScale = () => {
    setIsAdjustMemberScale(true);
  };

  const handleClickCancel = () => {
    navigate(`/p/${projectID}`, {
      relative: 'path',
    });
  };

  return isAdjustMemberScale ? (
    <AdjustMemberScale
      cost={cost}
      shareForWhom={shareForWhom}
      setShareForWhom={setShareForWhom}
      members={members}
      setIsAdjustMemberScale={setIsAdjustMemberScale}
    />
  ) : (
    <div>
      <EventTabs mode={mode} />
      <Input
        className="max-w-xs bg-white"
        aria-label="title input"
        label="品項"
        variant="bordered"
        labelPlacement="outside"
        onChange={handleChangeTitle}
        value={title}
      />
      <Input
        className="max-w-xs bg-white"
        aria-label="cost input"
        type="number"
        label="金額"
        variant="bordered"
        labelPlacement="outside"
        onChange={handleChangeCost}
        value={cost}
      />
      <Select
        items={members}
        label={mode !== 'expense' ? '誰付錢' : '誰收錢'}
        className="max-w-xs"
        variant="bordered"
        labelPlacement="outside"
        renderValue={items => {
          return items.map(item => (
            <div key={item.key} className="flex items-center gap-2">
              <Avatar alt={item.data.name} className="flex-shrink-0" size="sm" src={item.data.avatar} />
              <div className="flex flex-col">
                <span>{item.data.name}</span>
              </div>
            </div>
          ));
        }}
        onChange={handleChangePaidBy}
        selectedKeys={paidBy ?? [paidBy]}
      >
        {member => (
          <SelectItem key={member?.id} textValue={member?.name}>
            <div className="flex gap-2 items-center">
              <Avatar alt={member?.name} className="flex-shrink-0" size="sm" src={member?.avatar} />
              <div className="flex flex-col">
                <span className="text-small">{member?.name}</span>
              </div>
            </div>
          </SelectItem>
        )}
      </Select>
      <Select
        items={members}
        label="分給誰"
        variant="bordered"
        isMultiline={true}
        selectionMode="multiple"
        labelPlacement="outside"
        classNames={{
          base: 'max-w-xs',
          trigger: 'min-h-unit-12 py-2',
        }}
        renderValue={items => {
          return (
            <div className="flex flex-wrap gap-2">
              {items.map(item => (
                <Chip key={item.key}>{item.data.name}</Chip>
              ))}
            </div>
          );
        }}
        onChange={handleChangeShareForWhom}
        selectedKeys={flatMemberListToArrayWithIDAndHideScaleZero(shareForWhom)}
      >
        {member => (
          <SelectItem key={member?.id} textValue={member?.name}>
            <div className="flex gap-2 items-center">
              <Avatar alt={member?.name} className="flex-shrink-0" size="sm" src={member?.avatar} />
              <div className="flex flex-col">
                <span className="text-small">{member?.name}</span>
              </div>
            </div>
          </SelectItem>
        )}
      </Select>
      <Button aria-label="adjust scale" color="primary" variant="bordered" onClick={handleClickMemberScale}>
        調整比例
      </Button>
      <Button aria-label="cancel" color="primary" variant="faded" onClick={handleClickCancel}>
        取消
      </Button>
      <Button aria-label="new" color="primary" variant="bordered" onClick={handleClickAdd}>
        新增
      </Button>
    </div>
  );
};

export default AddEventPage;

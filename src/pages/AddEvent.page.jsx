import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Avatar, Button, Card, CardBody, Chip, Input, Select, SelectItem } from '@nextui-org/react';

import AdjustMemberScale from '../components/AdjustMemberScale.jsx';
import EventTabs from '../components/EventTabs.jsx';
import { addEvent } from '../services/firebase/event.js';
import { getMembers } from '../services/firebase/member.js';
import { flatMemberListToArrayWithIDAndHideScaleZero } from '../utils/member.js';

const AddEventPage = ({ mode }) => {
  const { projectID } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [cost, setCost] = useState(null);
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
    addEvent(projectID, title, mode !== 'expense' ? cost : cost * -1, paidBy, shareForWhom, mode)
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
      <EventTabs className="mb-4" mode={mode} />
      <Card className="container mx-auto px-4">
        <CardBody>
          <Input
            className="max-w-xs bg-white my-4"
            aria-label="title input"
            label="品項"
            variant="bordered"
            labelPlacement="outside"
            onChange={handleChangeTitle}
            value={title}
          />
          <Input
            className="max-w-xs bg-white my-4"
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
            className="max-w-xs bg-white my-4"
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
            selectedKeys={paidBy && new Set([paidBy])}
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
            className="max-w-xs bg-white my-4"
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
          <Button
            className="max-w-[6rem] my-4"
            aria-label="adjust scale"
            color="secondary"
            onClick={handleClickMemberScale}
          >
            調整比例
          </Button>
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

export default AddEventPage;

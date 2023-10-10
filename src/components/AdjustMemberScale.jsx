import React, { useEffect, useState } from 'react';

import { Button } from '@nextui-org/react';

import MemberList from '../components/MemberList.jsx';
import { eventMemberListColumns } from '../constants/members.js';

const AdjustMemberScale = ({ shareForWhom, setShareForWhom, members, setIsAdjustMemberScale }) => {
  const [tempShareForWhom, setTempShareForWhom] = useState([]);

  useEffect(() => {
    setTempShareForWhom(
      members.map(member => {
        const shareMember = shareForWhom.find(item => item.id === member.id);

        if (shareMember) {
          // 有在這次分的名單
          return {
            id: member?.id,
            name: member?.name,
            scale: shareMember.scale,
          };
        } else {
          // 沒有在這次分的名單
          return {
            id: member?.id,
            name: member?.name,
            scale: 0,
          };
        }
      }),
    );
  }, [shareForWhom]);

  const handleClickCancelButton = () => {
    setIsAdjustMemberScale(false);
  };

  const handleClickSaveButton = () => {
    setShareForWhom(tempShareForWhom);
    setIsAdjustMemberScale(false);
  };

  const handleChangeScale = (event, id) => {
    setTempShareForWhom(prevState => {
      return prevState.map(item => {
        if (item.id === id) {
          return {
            id: item.id,
            name: item.name,
            scale: Number(event.target.value),
          };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <div>
      {tempShareForWhom && (
        <MemberList members={tempShareForWhom} tableColumns={eventMemberListColumns} setValue={handleChangeScale} />
      )}
      <div className="flex flex-row mt-4">
        <Button
          className="max-w-[6rem] basis-1/2 sm:ml-4"
          aria-label="cancel"
          color="primary"
          variant="faded"
          onClick={handleClickCancelButton}
        >
          取消
        </Button>
        <Button
          className="max-w-[6rem] basis-1/2 ml-auto sm:mr-4"
          aria-label="new"
          color="primary"
          variant="bordered"
          onClick={handleClickSaveButton}
        >
          新增
        </Button>
      </div>
    </div>
  );
};

export default AdjustMemberScale;

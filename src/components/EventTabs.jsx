import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import classNames from 'classnames';

import { Button, ButtonGroup } from '@nextui-org/react';

const EventTabs = ({ mode, className }) => {
  const { projectID } = useParams();
  const navigate = useNavigate();

  const handleClickExpenseButton = () => {
    navigate(`/p/${projectID}/addExpense`, {
      relative: 'path',
    });
  };

  const handleClickIncomeButton = () => {
    navigate(`/p/${projectID}/addIncome`, {
      relative: 'path',
    });
  };

  const handleClickTransferButton = () => {
    navigate(`/p/${projectID}/addTransfer`, {
      relative: 'path',
    });
  };

  return (
    <div className={classNames('flex w-full flex-col', className)}>
      <ButtonGroup>
        <Button variant={mode === 'expense' ? 'bordered' : 'solid'} color="primary" onClick={handleClickExpenseButton}>
          花費
        </Button>
        <Button variant={mode === 'income' ? 'bordered' : 'solid'} color="primary" onClick={handleClickIncomeButton}>
          收入
        </Button>
        <Button
          variant={mode === 'transfer' ? 'bordered' : 'solid'}
          color="primary"
          onClick={handleClickTransferButton}
        >
          轉帳
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default EventTabs;

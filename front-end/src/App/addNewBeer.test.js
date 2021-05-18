import React from 'react';
import { render, screen } from '@testing-library/react';
import NewBeer from './addNewBeer';
import { expect } from 'chai';
import enzyme from 'enzyme';

it("onChange param is the same value as the input value", () => {
  const mockFn = jest.fn();
  const input = enzyme.shallow(<NewBeer 
    value="TestVal"
    placeholder="" 
    className="" 
    onSearch={mockFn}/>);

     input.find('input').simulate('change',  { preventDefault() {} });
     expect(mockFn.mock.calls).toBe("TestVal");
  });
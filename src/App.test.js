import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}, state=null) => {
  return shallow(<App {...props} />)
}

test('renders without an error', () => {
  const wrapper = setup();
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const appComponent = wrapper.find("[data-test='increment-button']")
  expect(appComponent.length).toBe(1);
});

test('renders counter display', () => {
 const wrapper = setup();
 const appComponent = wrapper.find("[data-test='increment-display']")
 expect(appComponent.length).toBe(1);
});
//
// test('counter starts at 0', () => {
//
// });
//
// test('clicking button increments counter display', () => {
//
// });

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('should render without throwing', () => {
    const shallowOutput = shallow(<App />);

    expect(shallowOutput).to.have.length(1);
  });

  it('should render an element with correct class', function() {
    const shallowOutput = shallow(<App />);

    expect(shallowOutput.hasClass('intro')).to.be.true;
  });

  it('should render an element with correct text content', function() {
    const shallowOutput = shallow(<App />);

    expect(shallowOutput.text()).to.contain('Hello World');
  });
});

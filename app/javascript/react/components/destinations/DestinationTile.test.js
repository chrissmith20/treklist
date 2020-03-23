import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DestinationTile from './DestinationTile';

Enzyme.configure({ adapter: new Adapter() });

describe('DescriptionTile', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = mount(
        <DestinationTile
        location= "Grand Canyon"
        description= "This is top five on my list"
        />
    );
  });

  it('should render an h1 tag with the location of the destination', () => {
    expect(wrapper.find('#location').text()).toBe('Grand Canyon');
  });

  it('should render an h2 tag with the description of the destination', () => {
    expect(wrapper.find('#description').text()).toBe('This is top five on my list');
  });
});

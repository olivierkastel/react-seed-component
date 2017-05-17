jest.unmock('../Hello');
import * as React from 'react';
import { shallow } from 'enzyme';
import Hello from '../Hello';
describe('Hello', () => {
    it('should work', () => {
        const wrapper = shallow(<Hello />);
        expect(wrapper.length).toEqual(1);
        expect(wrapper.find('div').text()).toContain('Hay.');
    });
    it('should render all the card components', () => {
        const wrapper = shallow(<Hello text="It works!"/>);
        expect(wrapper.find('div').length).toEqual(1);
        expect(wrapper.find('div').text()).toContain('It works!');
    });
});

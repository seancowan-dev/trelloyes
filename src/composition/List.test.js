import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { List } from './List';
import { STORE } from '../store';

describe('List component', () => {
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {

        const tree = renderer
        .create(STORE.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => STORE.allCards[id])}
            />
            )))
        .toJSON();
        expect(tree).toMatchSnapshot();  
        });
});
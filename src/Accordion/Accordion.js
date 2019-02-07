import React from 'react';
import Item from './Item'

const tabs = [
  'Title 1',
  'Title 2',
  'Title 3',
]

const Accordion = (props) => {
  const renderTab = () => (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </p>
  )
  const renderItem = (title) => {
    return (
      <Item
        key={title}
        title={title}
      >
        {renderTab()}
      </Item>
    )
  }
  return (
    <div className="accordion">
      {tabs && tabs.map(renderItem)}
    </div>
  )
}

export default Accordion;

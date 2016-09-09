import React from 'react';
import Practice from './Practice.js';
export default class PracticeList extends React.Component {

  render() {
    return (
      <div>
        <Practice name='Extream Programming' />
        <Practice name='Behaviour driven development' />
        <Practice name='Continues Integration' />
        <Practice name='Continues Delvery' />
      </div>
    );
  }

}

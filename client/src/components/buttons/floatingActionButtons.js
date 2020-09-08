import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Panel from '../panel.js';

const style = {
  marginRight: 20,
  backgroundColor: 'rgb(0,0,0)'
};

/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
const FloatingActionButtons = () => (
  <Panel title="Floating Action Buttons">
    <div>
      <FloatingActionButton style={style}>
        <ContentAdd />
      </FloatingActionButton>
      <FloatingActionButton mini={true} style={style}>
        <ContentAdd />
      </FloatingActionButton>
      <FloatingActionButton secondary={true} style={style}>
        <ContentAdd />
      </FloatingActionButton>
      <FloatingActionButton mini={true} secondary={true} style={{'background-color':'rgba(0,0,0,0)', 'color':'rgba(0,0,0,0)','box-shadow':'none'}} >
        <ContentAdd />
      </FloatingActionButton>
      <FloatingActionButton disabled={true} style={style}>
        <ContentAdd />
      </FloatingActionButton>
      <FloatingActionButton mini={true} disabled={true} style={style}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  </Panel>
);

export default FloatingActionButtons;

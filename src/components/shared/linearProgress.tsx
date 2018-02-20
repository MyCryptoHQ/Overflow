import * as React from 'react';

export const LinearProgress: React.SFC = () => (
  <div
    role="progressbar"
    className="mdc-linear-progress mdc-linear-progress--indeterminate"
    style={{ width: '100%', padding: '4px 0px' }}
  >
    <div className="mdc-linear-progress__buffering-dots" />
    <div className="mdc-linear-progress__buffer" />
    <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
      <span className="mdc-linear-progress__bar-inner" style={{ backgroundColor: '#007896' }} />
    </div>
    <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
      <span className="mdc-linear-progress__bar-inner" style={{ backgroundColor: '#007896' }} />
    </div>
  </div>
);

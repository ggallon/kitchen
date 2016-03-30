import React from 'react';

const style = {
  base: {
    display: 'inline-block',
  },
  status: {
    display: 'inline-block',
    height: '10px',
    width: '10px',
    marginLeft: '0.25rem',
    borderRadius: '50%',
  },
  label: {
    display: 'inline-block',
    padding: '0.25rem',
    fontSize: '0.75rem',
  },
};

export default class Test extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,
    status: React.PropTypes.string,
  };

  render() {
    let label = this.props.label;

    if (this.props.status === 'yellow') label = `Running "${label}"`;
    if (this.props.status === 'lightgreen') label = `Passed "${label}"`;
    if (this.props.status === 'red') label = `Failed "${label}"`;

    return (
      <div>
        <span style={Object.assign({}, style.status, { backgroundColor: this.props.status })}></span>
        <span style={style.label}>{label}</span>
      </div>
    );
  }
}

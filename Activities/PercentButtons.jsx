import React from 'react';
import './PercentButtons.css';
import PropTypes from 'prop-types';
import { sendPercent } from './ConnectionApi';


const convertToJson = (newPercent, idProject) => ({
  idprojectactivitycollaborator: idProject,
  percentageconclusion: newPercent,
});

const filterButton = (typeButton, button, valueDisabled, funcOnClick) => (
  <button className={typeButton} disabled={valueDisabled} onClick={funcOnClick} type="submit">
    {button}
%
  </button>
);

class PercentButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [25, 50, 75, 100],
      percent: props.percent,
    };

    this.showButtons = this.showButtons.bind(this);
  }


  clickInButton(newPercent, idProject) {
    const { onError } = this.props;
    sendPercent(convertToJson(newPercent, idProject))
      .then(() => {
        this.setState({
          percent: newPercent,
        });
      })
      .catch(() => {
        onError();
      });
  }


  chooseTypeButton(numberPercent, button, idProject) {
    if (numberPercent > button) {
      return (filterButton('buttonDisabled', button, true)
      );
    } if (numberPercent === button) {
      return (filterButton('buttonPressed', button, true)
      );
    }
    return (filterButton('buttonEnabled', button, false, this.clickInButton.bind(this, button, idProject))
    );
  }

  showButtons() {
    const { buttons, percent } = this.state;
    const { idProject } = this.props;
    const numberPercent = parseInt(percent, 10);
    return buttons.map(button => this.chooseTypeButton(numberPercent, button, idProject));
  }

  render() {
    return (
      <p>
        {this.showButtons()}
      </p>
    );
  }
}

PercentButtons.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  percent: PropTypes.number.isRequired,
  idProject: PropTypes.number.isRequired,
  onError: PropTypes.func.isRequired,
};

export default PercentButtons;

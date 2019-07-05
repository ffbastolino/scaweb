import React from 'react';
import PropTypes from 'prop-types';
import PercentButtons from './PercentButtons';
import AttributeLineActivities from './AttributeLineActivities';
import './ActivitiesLine.css';


const ActivitiesLine = ({ project, onError }) => (

  <tr>
    <AttributeLineActivities border="right">
      {project.projectName}
    </AttributeLineActivities>
    <AttributeLineActivities border="right">
      {project.description}
    </AttributeLineActivities>
    <AttributeLineActivities border="right">
      {project.dtBegin}
    </AttributeLineActivities>
    <AttributeLineActivities border="right">
      {project.dtEnd}
    </AttributeLineActivities>
    <AttributeLineActivities border="right">
      {project.job}
    </AttributeLineActivities>
    <AttributeLineActivities border="noBorder">
      <PercentButtons
        onError={onError}
        percent={project.percentageConclusion}
        idProject={project.idProjectActivityCollaborator}
      />
    </AttributeLineActivities>
  </tr>
);

ActivitiesLine.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.object.isRequired,
  onError: PropTypes.func.isRequired,
};
export default ActivitiesLine;

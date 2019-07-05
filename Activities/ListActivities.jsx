import React from 'react';
import './ListActivities.css';
import Alert from 'react-bootstrap/Alert';
import TableActivitiesHeader from './TableActivitiesHeader';
import ActivitiesLine from './ActivitiesLine';
import ConnectionApi from './ConnectionApi';

class ListActivities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      stateError: false,
    };
    this.getActivities();
  }

  componentDidMount() {
    this.getActivities();
  }


  getActivities() {
    ConnectionApi()
      .then((response) => {
        this.setState({ projects: response || [] });
      })
      .catch(() => {
        this.setState({ stateError: true });
      });
  }

  setError() {
    this.setState({ stateError: true });
  }

  apiConnectionValidation() {
    const { stateError } = this.state;
    if (stateError) {
      return (
        <Alert variant="danger">
      Erro: Servidor não está respondendo
        </Alert>
      );
    }
    return <React.Fragment />;
  }

  renderActivitiesLine() {
    const { projects } = this.state;
    if (projects) {
      return projects.map(e => <ActivitiesLine onError={() => this.setError()} project={e} />);
    }
    return <React.Fragment />;
  }

  render() {
    return (
      <div className="container-fluid pt-5 px-4">
        <h1> Atividades </h1>
        {this.apiConnectionValidation()}
        <table className="table table-striped table-bordered border-0 text-center ">
          <TableActivitiesHeader />
          <tbody className="border">
            {this.renderActivitiesLine()}
          </tbody>

        </table>
      </div>
    );
  }
}

export default ListActivities;

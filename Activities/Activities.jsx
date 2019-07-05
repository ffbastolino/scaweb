import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        nome: '',
        ano: 0,
        dono: '',
        descricao: '',
        tipo: '',
      },
    };
  }

  componentDidMount() {
    this.loadBooks();
  }

  getId() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    return id;
  }

  loadBooks() {
    const id = this.getId();
    if (id) {
      axios.get(`http://localhost:3001/books/${id}`)
        .then((res) => {
          const book = res.data;
          this.setState({ book });
        }).catch((e) => {
          console.log(e);
        });
    }
  }

  handleChange(newPropJson) {
    const { book } = this.state;
    const bookMerged = { ...book, ...newPropJson };
    this.setState({ book: bookMerged });
  }

  render() {
    // const isEdit = this.getId();
    // {this.props.match.path}
    return (
      <div className="container mt-5 d-flex flex-column">
        <h3 className="align-self-center">Lista de atividades</h3>
        <Form className="mt-5 col-12 col-md-8 col-lg-6 align-self-center">

          <Button variant="primary" type="submit">
            Salvar
          </Button>
        </Form>
      </div>
    );
  }
}

Activities.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
};

export default Activities;

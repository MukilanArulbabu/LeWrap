import React from 'react';
import axios from 'axios';
import '../styles/table.scss';

const service = {
  fetchItems: async () => {
    const result = await axios.get('/api/campaign');
    return Promise.resolve(result.data);
  },
  update: async (data) => {
    const result = await axios.put(`/api/campaign/${data.id}`, { data });
    return Promise.resolve(result.data);
  },
};

const timeConvert = date => new Date(date).toLocaleString();

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }
  async componentDidMount() {
    const data = await service.fetchItems();
    this.setState({ customers: data });
  }

  updateStore = async (id) => {
    const { stores, newStore } = this.state;
    const data = stores.filter(d => d.id === id);
    if (!(data[0].address && data[0].name && data[0].lat && data[0].lon)) {
      alert('provide all values');
      return false;
    }
    if (newStore) {
      delete data[0].id;
      await service.create(data[0]);
      this.setState({ newStore: false });
    } else {
      await service.update(data[0]);
    }
  }

  render() {
    const { customers } = this.state;
    return (
      <div className="container-table-2">
        <table>
          <thead>
            <tr>
              <th>Phone</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {customers.length ? (
        customers.map(customer => (
          <tr key={customer.id}>
            <td>{customer.phone}</td>
            <td>{timeConvert(customer.createdAt)}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Data</td>
        </tr>
      )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Store;

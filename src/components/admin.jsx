import React from 'react';
import axios from 'axios';
import '../styles/table.scss';

const service = {
  fetchItems: async () => {
    const result = await axios.get('/api/store');
    return Promise.resolve(result.data);
  },
  create: async (store) => {
    const result = await axios.post('/api/store', store);
    return Promise.resolve(result.data);
  },
  update: async (data) => {
    const result = await axios.put(`/api/store/${data.id}`, { data });
    return Promise.resolve(result.data);
  },
  delete: async (id) => {
    const result = await axios.delete(`/api/store/${id}`);
    return Promise.resolve(result.data);
  },
};

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      newStore: false,
    };
  }
  async componentDidMount() {
    const data = await service.fetchItems();
    this.setState({ stores: data });
  }

  addNew = () => {
    this.setState({ stores: [...this.state.stores, { id: Math.random() }], newStore: true });
  }

  handleChange(e, id) {
    const { name, value } = e.target;
    const { stores } = this.state;
    const storeIndex = stores.findIndex((obj => obj.id === id));
    stores[storeIndex][name] = value;
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

  deleteStore = async (id) => {
    const { stores } = this.state;
    await service.delete(id);
    const data = stores.filter(d => d.id !== id);
    this.setState({ stores: data });
  }

  render() {
    const { stores } = this.state;
    return (
      <div className="container-table">
        <button className="button muted-button bbtn" onClick={this.addNew}>Add</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Lat</th>
              <th>Lon</th>
            </tr>
          </thead>
          <tbody>
            {stores.length ? (
        stores.map(store => (
          <tr key={store.id}>
            <td><input type="text" onChange={e => this.handleChange(e, store.id)} name="name" defaultValue={store.name} /></td>
            <td><input type="text" onChange={e => this.handleChange(e, store.id)} name="address" defaultValue={store.address} /></td>
            <td><input type="text" onChange={e => this.handleChange(e, store.id)} name="lat" defaultValue={store.lat} /></td>
            <td><input type="text" onChange={e => this.handleChange(e, store.id)} name="lon" defaultValue={store.lon} /></td>
            <td>
              <button className="button muted-button" onClick={() => this.updateStore(store.id)} >Update</button>
              <button className="button muted-button" onClick={() => this.deleteStore(store.id)}>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No stores</td>
        </tr>
      )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Store;

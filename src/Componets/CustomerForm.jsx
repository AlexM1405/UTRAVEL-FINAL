
import { useState } from "react";
import "./CustomerForm.css"



function CustomerForm() {
    const [name, setName] = useState('');
    const [id, setID] = useState('');
    const [email, setEmail] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [formData, setFormData] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newFormData = {
        name: name,
        ID: id,
        Email: email,
        quantity: quantity,
        price: price,
      };
  
      if (editIndex === -1) {
        setFormData([...formData, newFormData]);
      } else {
        const updatedData = [...formData];
        updatedData[editIndex] = newFormData;
        setFormData(updatedData);
        setEditIndex(-1);
      }
  
      // Clear the form inputs
      setName('');
      setID('');
      setEmail('');
      setQuantity('');
      setPrice('');
    };
  
    const handleDelete = (index) => {
      const newData = [...formData];
      newData.splice(index, 1);
      setFormData(newData);
    };
  
    const handleEdit = (index) => {
      setEditIndex(index);
  
      // Prefill the form inputs with the data to be edited
      const editedData = formData[index];
      setName(editedData.name);
      setType(editedData.id);
      setLastName(editedData.Email);
      setQuantity(editedData.quantity);
      setPrice(editedData.price);
    };
  
    return (
        
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
        <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
          {/* Form inputs */}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginRight: '0.5rem' }}
          />
          <input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setLastName(e.target.value)}
            style={{ marginRight: '0.5rem' }}
          />
           <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginRight: '0.5rem' }}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{ marginRight: '0.5rem' }}
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ marginRight: '0.5rem' }}
          />
  
          {/* Submit button */}
          <button type="submit">{editIndex === -1 ? 'Submit' : 'Update'}</button>
        </form>
  
        {/* Table to display form data */}
        <table style={{ width: '70%', textAlign: 'center' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Email</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.id}</td>
                <td>{data.email}</td>
                <td>{data.quantity}</td>
                <td>{data.price}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  export default CustomerForm
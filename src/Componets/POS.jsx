import React, { useState } from "react";
import './POS.css';

const POS = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    name: '',
    type: '',
    id: '',
    quantity: '',
    price: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      const updatedItems = items.map((item, index) =>
        index === editIndex ? currentItem : item
      );
      setItems(updatedItems);
      setIsEditing(false);
      setEditIndex(-1);
    } else {
      setItems([...items, currentItem]);
    }
    resetForm();
  };

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setCurrentItem(items[index]);
  };

  const resetForm = () => {
    setCurrentItem({ name: '', type: '', id: '', quantity: '', price: '' });
  };

  return (
    <div className="pos">
      <form onSubmit={handleSubmit}>
        {/* Form inputs */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={currentItem.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          value={currentItem.type}
          onChange={handleInputChange}
        />
        
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={currentItem.quantity}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={currentItem.price}
          onChange={handleInputChange}
        />
        <button type="submit">{isEditing ? 'Update' : 'Add Item'}</button>
      </form>

      {/* Table to display form data */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default POS;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [personas, setPersonas] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', picture: '' });
  const [selectedId, setSelectedId] = useState(null);
  const [action, setAction] = useState('');

  const fetchPersonas = async () => {
    try {
      const response = await axios.get('https://simplecrud-evva.onrender.com/api/personas');
      setPersonas(response.data || []);
      console.log(response);
    } catch (error) {
      console.log("Error al obtener personas:", error);
      setPersonas([]);
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (action === 'POST') {
        await axios.post('https://simplecrud-evva.onrender.com/api/personas', formData);
      } else if (action === 'PUT' && selectedId) {
        await axios.put(`https://simplecrud-evva.onrender.com/api/personas/${selectedId}`, formData);
        console.log(selectedId)
        setSelectedId(null);
        console.log(formData)
      } else if (action === 'DELETE' && selectedId) {
        await axios.delete(`https://simplecrud-evva.onrender.com/api/personas/${selectedId}`);
        setSelectedId(null);
      }
      fetchPersonas();
      setFormData({ name: '', email: '', picture: '' });
      setAction('');
    } catch (error) {
      console.error("Error al manejar la acción:", error);
    }
  };

  const handleAction = (actionType, persona = null) => {
    setAction(actionType);
    if (persona) {
      setFormData({ name: persona.name, email: persona.email, picture: persona.picture });
      setSelectedId(persona._id);
    } else {
      setFormData({ name: '', email: '', picture: '' });
      setSelectedId(null);
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4">Gestión de Personas</h1>

      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(personas) && personas.map((persona) => (
            <tr key={persona._id}>
              <td>{persona.name}</td>
              <td>{persona.email}</td>
              <td><img src={persona.picture} alt={persona.name} width="50" /></td>
              <td className='d-flex justify-content-around'>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleAction('PUT', persona)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm ml-2"
                  onClick={() => handleAction('DELETE', persona)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-around mt-4">
        <button className="btn btn-primary" onClick={() => handleAction('POST')}>Agregar Persona</button>
        <button className="btn btn-success" onClick={fetchPersonas}>Ver Personas</button>
      </div>

      {action && (
        <form onSubmit={handleSubmit} className="mt-4">
          {(action === 'POST' || action === 'PUT') && (
            <>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">URL de la Imagen</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.picture}
                  onChange={(e) => setFormData({ ...formData, picture: e.target.value })}
                  required
                />
              </div>
            </>
          )}

          {action === 'DELETE' && selectedId && (
            <div className="mb-3">
              <label className="form-label">¿Estás seguro de que deseas eliminar esta persona?</label>
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            {action === 'POST' && 'Crear Persona'}
            {action === 'PUT' && 'Actualizar Persona'}
            {action === 'DELETE' && 'Eliminar Persona'}
          </button>
        </form>
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';

export default function App() {
    const [users, setUsers] = useState([]);  
    const [title, setTitle] = useState('');
      const [text, setText] = useState('');
    const [number, setNumber] = useState('');
     const [country, setCountry] = useState('');
      const [gender, setGender] = useState('');
    function handleTitleChange(e) {
        setTitle(e.target.value);
    }
    function handleTextChange(e) {
        setText(e.target.value);
    }
    function handleNumberChange(e) {
        setNumber(e.target.value);
    }

    function handleCountryChange(e) {
        setCountry(e.target.value);
    }
    function handleGenderChange(e) {
        setGender(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newUser = { id: Date.now(), title, text, number, country, gender }; 
        setUsers([...users, newUser]);
        setTitle('');
        setText('');
        setNumber('');
        setCountry('');
        setGender('');
    }

    function handleDelete(userId) {
        setUsers(users.filter(user => user.id !== userId));
    }

    return (
        <div className="read">
            <form onSubmit={handleSubmit}>
                <label style={{ background: 'rgb(73, 73, 73)' }}>
                    <h4>Erkak</h4>
                    <input type="radio" name="gender" value="Erkak" onChange={handleGenderChange} />
                </label>
                <label style={{ background: 'rgb(73, 73, 73)' }}>
                    <h4>Ayol</h4>
                    <input type="radio" name="gender" value="Ayol" onChange={handleGenderChange} />
                </label>

                <input type="text" onChange={handleTitleChange} value={title} placeholder="Firstname" required />
                <input type="text" onChange={handleTextChange} value={text} placeholder="Lastname" required />
                <input type="number" onChange={handleNumberChange} value={number} placeholder="Age" required />
                <select name="hello" id="hello" onChange={handleCountryChange} value={country} required>
                    <option value="">Country</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Russia">Russia</option>
                    <option value="America">America</option>
                    <option value="Italy">Italy</option>
                </select>
                <button type="submit">Save</button>
            </form>

            <div className="Run">
                <h3>users</h3>
                {users.map((user) => (
                    <div key={user.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
                        <p><strong>Firstname:</strong> {user.title}</p>
                        <p><strong>Lastname:</strong> {user.text}</p>
                        <p><strong>Age:</strong> {user.number}</p>
                        <p><strong>Country:</strong> {user.country}</p>
                        <p><strong>Gender:</strong> {user.gender}</p>
                        <button onClick={() => handleDelete(user.id)} style={{ background: 'red', color: 'white' }}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}


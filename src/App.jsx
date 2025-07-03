import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import FormWrapper from './components/FormWrapper';
import Table from './components/Table';
import DataTable from './components/DataTable';

const App = () => {
  const [formValue, setFormValue] = useState("");
  const [checked, setChecked] = useState(false);

  const data = [
    { name: "Ifeanyi", age: 24 },
    { name: "Grace", age: 22 },
    { name: "Mark", age: 25 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${formValue}, Checked: ${checked}`);
  };

  return (
    <div className="container">
      <h1 className="title">Reusable Components</h1>

      <div className="section">
        <FormWrapper onSubmit={handleSubmit}>
          <Input
            label="Your Name"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Enter your name"
          />
          <Checkbox
            label="Accept terms"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <Button label="Submit" />
        </FormWrapper>
      </div>

      <div className="section">
        <h2>Simple Table</h2>
        <Table headers={["Name", "Age"]} data={data} />
      </div>

      <div className="section">
        <h2>Searchable Data Table</h2>
        <DataTable headers={["Name", "Age"]} data={data} />
      </div>
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting ${name} ${email} ${message}`);
    // Figure out submission logic
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 600,
        margin: 'auto',
        padding: 16,
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <TextField
        label="Message"
        multiline
        rows={4}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{ alignSelf: 'center', marginTop: 16 }}
      >
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;

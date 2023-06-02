import React, { useState, useRef } from 'react';
import { TextField, Button, Typography, Alert, CircularProgress } from '@mui/material';
import emailjs from 'emailjs-com'

function ContactForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(null)
  const form = useRef()

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading('loading')
    
    console.log(loading)

    const formParams = {
      name: name,
      email: email,
      message: message
    };


    emailjs.send('service_boehj5f', 'template_12sqopc', formParams, '7p7GphtSH0gZTDRJ6' )
      .then((result) => {
          console.log('Success' + result);
          setSuccess('success')
          setName('');
          setEmail('');
          setMessage('');
          setLoading(null)
      }, (error) => {
          console.log('ERROR' + error.text);
          setSuccess('error')
          setLoading(null)
      });
  };



  return (
    <form
      ref={form}
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
  {
  success === 'success' ? (
      <Alert severity="success">Message sent successfully!</Alert>
    ) : success === 'error' ? (
      <Alert severity="error">There was an error. Please reload the page and try again.</Alert>
    ) : null
  }

      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        name='user_name'
        required
      />
      <TextField
        name='user_email'
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <TextField
        label="Message"
        name='message'
        multiline
        rows={4}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
      />
        {
            loading === null ? (
            <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ alignSelf: 'center', marginTop: 16 }}
            >
            Submit
            </Button> 
        ) : loading === 'loading' ? (
           <CircularProgress  style={{ alignSelf: 'center', marginTop: 16 }} />
        ) : <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ alignSelf: 'center', marginTop: 16 }}
            >
            Submit
            </Button> 
          }
   

     
    </form>
    
  );
}

export default ContactForm;

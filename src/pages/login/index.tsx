import { Box, TextField, Button, Typography, InputAdornment } from '@mui/material';
import { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    password: '',
  });

  const handleChange = (e : any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '800px',
        padding: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          width: '100%',
          padding: 3,
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up on Refrens
        </Typography>
        <Button
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          startIcon={<span>🌐</span>} // Placeholder for Google icon
        >
          Continue with Google
        </Button>
        <Typography
          align="center"
          sx={{ color: 'text.secondary', mb: 2 }}
        >
          OR
        </Typography>
        <TextField
          select
          label="Country"
          value="India"
          fullWidth
          sx={{ mb: 2 }}
          SelectProps={{
            native: true,
          }}
        >
          <option value="India">India</option>
          {/* Add more countries as needed */}
        </TextField>
        <TextField
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
          }}
        />
        <TextField
          label="Set Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        
        <Button variant="contained" fullWidth color="primary">
          Create Account
        </Button>

        <Typography variant="caption" display="block" gutterBottom sx={{ mb: 2 }}>
          I agree to the Refrens{' '}
          <a href="#" style={{ color: '#1976d2' }}>
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" style={{ color: '#1976d2' }}>
            Privacy Policy
          </a>

          <Typography align="center" sx={{ mt: 2 }}>
          Already a user?{' '}
          <a href="#" style={{ color: '#1976d2' }}>
            Login here
          </a>
        </Typography>
        </Typography>
        
      </Box>
    </Box>
  );
};

export default SignUp;
'use client';
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Divider,
  MenuItem,
  Autocomplete,
} from '@mui/material';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const countries = [
  { code: 'IN', label: 'India', phone: '91' },
  { code: 'US', label: 'United States', phone: '1' },
  { code: 'GB', label: 'United Kingdom', phone: '44' },
  { code: 'CA', label: 'Canada', phone: '1' },
  { code: 'AU', label: 'Australia', phone: '61' },
  { code: 'DE', label: 'Germany', phone: '49' },
  { code: 'FR', label: 'France', phone: '33' },
  { code: 'JP', label: 'Japan', phone: '81' },
  { code: 'SG', label: 'Singapore', phone: '65' },
  { code: 'AE', label: 'United Arab Emirates', phone: '971' },
];

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const [country, setCountry] = useState(countries[0]); // India default

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#fafafa',
        p: 2,
        // minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          width: '100%',
          p: 3,
          borderRadius: 2,
          bgcolor: 'white',
        }}
      >
        <Typography variant="h6" align="center" gutterBottom sx={{ fontWeight: 600 }}>
          Signup on Refrens
        </Typography>

        {/* Google Button */}
        <Button
          variant="outlined"
          fullWidth
          sx={{
            mb: 2,
            bgcolor: 'white',
            textTransform: 'none',
            fontWeight: 500,
            borderColor: '#e5e7eb',
            color: '#111',
            borderRadius: 1,
          }}
          startIcon={
            <img
              src="/google.png"
              alt="Google"
              width={20}
              height={20}
            />
          }
        >
          Continue with Google
        </Button>

        {/* Divider with OR */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Divider sx={{ flex: 1 }} />
          <Typography sx={{ px: 2, color: 'text.secondary', fontSize: 14 }}>OR</Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>

        {/* Country Selector with Autocomplete */}
        <Autocomplete
          options={countries}
          value={country}
          onChange={(_, newValue) => {
            if (newValue) setCountry(newValue);
          }}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box component="li" sx={{ display: 'flex', alignItems: 'center' }} {...props}>
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=""
                style={{ marginRight: 8 }}
              />
              {option.label} (+{option.phone})
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Country*"
              fullWidth
              sx={{ mb: 2 }}
            />
          )}
        />

        {/* Name */}
        <TextField
          label="Your Name*"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />

        {/* Email */}
        <TextField
          label="Your Email*"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />

        {/* Phone with dynamic country code */}
        <TextField
          label="Phone*"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img
                  src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                  alt={country.label}
                  width={20}
                  height={14}
                  style={{ marginRight: 6 }}
                />
                +{country.phone}
              </InputAdornment>
            ),
          }}
        />

        {/* Password */}
        <TextField
          label="Set Password*"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 1 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Terms */}
        <FormControlLabel
          control={<Checkbox sx={{ color: '#7C3AED', '&.Mui-checked': { color: '#7C3AED' } }} />}
          label={
            <Typography variant="body2">
              I agree to the Refrens{' '}
              <a href="#" style={{ color: '#7C3AED' }}>T&amp;C</a> and{' '}
              <a href="#" style={{ color: '#7C3AED' }}>Privacy Policy</a>
            </Typography>
          }
          sx={{ mb: 2 }}
        />

        {/* Create Account Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: '#7C3AED',
            textTransform: 'none',
            fontWeight: 500,
            py: 1.2,
            borderRadius: 1,
            '&:hover': { bgcolor: '#6D28D9' },
          }}
        >
          Create Account
        </Button>

        {/* Already a user */}
        <Typography align="center" sx={{ mt: 2, fontSize: 14, color: 'black' }}>
          Already a user?{' '}
          <a href="/loginform" style={{ color: '#7C3AED', textDecoration: 'none' }}>Login here</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;

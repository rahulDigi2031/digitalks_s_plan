"use client";
import { Box, Button, TextField, Typography, Divider, IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <Box className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Box className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Box className="flex items-center space-x-2">
          <Box
            className="w-6 h-6 rounded"
            sx={{ background: "linear-gradient(135deg, #7b3fff, #7757fa)" }}
          />
          <Typography className="text-xl font-semibold text-[#7757fa]">
            Refrens
          </Typography>
        </Box>

        {/* Right Section */}
        <Box className="flex items-center space-x-4">
          <Typography className="text-sm text-gray-600 cursor-pointer hover:underline">
            Support
          </Typography>
          <Button
            variant="outlined"
            size="small"
            sx={{
              textTransform: "none",
              borderColor: "#7757fa",
              color: "#7757fa",
              borderRadius: "6px",
              "&:hover": { borderColor: "#5a38d2", color: "#5a38d2" },
            }}
            onClick={() => router.push('/signup')}
          >
            Register
          </Button>
        </Box>
      </Box>

      {/* Center Login Box */}
      <Box className="flex flex-1 items-center justify-center">
        <Box className="w-full max-w-md bg-white p-8 rounded-lg">
          <Typography
            variant="h6"
            className="text-center font-semibold mb-6"
          >
            Login to your Refrens account
          </Typography>

          {/* Google Sign-in */}
          <Button
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{
              textTransform: "none",
              borderRadius: "6px",
              mb: 2,
              color: "#444",
              borderColor: "#ddd",
              "&:hover": { borderColor: "#bbb" },
            }}
          >
            Sign in with Google
          </Button>

          {/* Divider */}
          <Divider className="my-4">OR</Divider>

          {/* Email */}
          <Typography className="text-sm font-medium mb-1">Email*</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter your email"
            // value="rahulthakordigitalks@gmail.com"
            sx={{ mb: 3 }}
          />

          {/* Password */}
          <Typography className="text-sm font-medium mb-1">Password*</Typography>
          <TextField
            fullWidth
            size="small"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            sx={{ mb: 2 }}
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  size="small"
                  sx={{ 
                    position: 'absolute',
                    right: 8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    padding: '4px'
                  }}
                >
                  {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </IconButton>
              ),
            }}
          />

          {/* Forgot password */}
          <Typography
            className="text-sm text-gray-500 hover:underline cursor-pointer mb-4"
          >
            Forgot password?
          </Typography>

          {/* Login button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#7757fa",
              textTransform: "none",
              py: 1,
              borderRadius: "6px",
              "&:hover": { backgroundColor: "#5a38d2" },
            }}
          >
            Login and Continue
          </Button>

          {/* Footer links */}
          <Typography
            className="text-sm text-gray-600 mt-4 text-center"
          >
            Having issues logging in?{" "}
            <span className="text-[#7757fa] cursor-pointer hover:underline">
              Click here
            </span>
          </Typography>
          <Typography
            className="text-sm text-gray-600 text-center mt-2"
          >
            Don't have an account?{" "}
            <span className="text-[#7757fa] cursor-pointer hover:underline" onClick={() => router.push('/contact')}>
              Sign up now
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

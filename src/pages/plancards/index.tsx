'use client'
import { Box, Typography, Button, Container } from '@mui/material';
import { Icon1, Icon2, Icon3, Icon4 } from '../../../Components/icons/icons';
// import { Icon1, Icon2, Icon3, Icon4 } from '';


let icon1 = <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
const Plancards = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 4, // Spacing between cards
                    }}
                >
                    {/* Card 1: Add your Team to Refrens */}
                    <Box
                        sx={{
                            flex: '0 1 calc(50% - 16px)', // Approximately 50% width minus gap on md screens
                            maxWidth: '100%', // Full width on xs screens
                            backgroundColor: '#FBFAFF',
                            border: "1px solid #7C3DDA",
                            borderRadius: 4,
                            padding: 3,
                            textAlign: 'center',
                            // boxShadow: 1,
                            '@media (max-width: 900px)': {
                                flex: '0 1 100%', // Full width on smaller screens
                            },
                        }}
                    >
                        <Box
                            sx={{
                                //   display: 'inline-block',
                                backgroundColor: '#E6D8FF',
                                borderRadius: '50%',
                                width: 40,
                                height: 40,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 2,
                            }}
                        >
                            <Typography color="#6B46C1" variant="h6">
                                <Icon1 />
                            </Typography>
                        </Box>
                        <Typography variant="h6" gutterBottom>
                            Add your Team to Refrens
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            ₹1,500 per additional user per year
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#7B3FD5', color: 'white', '&:hover': { backgroundColor: '#5A38A5' } }}>
                            Talk to us
                        </Button>
                    </Box>

                    {/* Card 2: Need help finding the right plan */}
                    <Box
                        sx={{
                            flex: '0 1 calc(50% - 16px)', // Approximately 50% width minus gap on md screens
                            maxWidth: '100%', // Full width on xs screens
                            backgroundColor: '#FBFAFF',
                            border: "1px solid #7C3DDA",
                            borderRadius: 4,
                            padding: 3,
                            textAlign: 'center',
                            // boxShadow: 1,
                            '@media (max-width: 900px)': {
                                flex: '0 1 100%', // Full width on smaller screens
                            },
                        }}
                    >
                        <Box
                            sx={{
                                //   display: 'inline-block',
                                backgroundColor: '#E6D8FF',
                                borderRadius: '50%',
                                width: 40,
                                height: 40,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 2,
                            }}
                        >
                            <Typography color="#6B46C1" variant="h6">
                            <Icon2 />
                            </Typography>
                        </Box>
                        <Typography variant="h6" gutterBottom>
                            Need help finding the right plan for your business?
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            Get a Customised Plan from your Account Manager.
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#7B3FD5', color: 'white', '&:hover': { backgroundColor: '#5A38A5' } }}>
                            Talk to us
                        </Button>
                    </Box>

                    {/* Card 3: 100% Refundable */}
                    <Box
                        sx={{
                            flex: '0 1 calc(50% - 16px)', // Approximately 50% width minus gap on md screens
                            maxWidth: '100%', // Full width on xs screens
                            backgroundColor: '#FBFAFF',
                            border: "1px solid #7C3DDA",
                            borderRadius: 4,
                            padding: 3,
                            textAlign: 'center',
                            // boxShadow: 1,
                            '@media (max-width: 900px)': {
                                flex: '0 1 100%', // Full width on smaller screens
                            },
                        }}
                    >
                        <Box
                            sx={{
                                //   display: 'inline-block',
                                backgroundColor: '#E6D8FF',
                                borderRadius: '50%',
                                width: 40,
                                height: 40,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 2,
                            }}
                        >
                            <Typography color="#6B46C1" variant="h6">
                            <Icon3 />
                            </Typography>
                        </Box>
                        <Typography variant="h6" gutterBottom>
                            100% Refundable
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            If cancelled within 7 days for annual plans and within 30 days for plans longer than 3 years.
                        </Typography>
                        {/* <Button variant="contained" sx={{ backgroundColor: '#7B3FD5', color: 'white', '&:hover': { backgroundColor: '#5A38A5' } }}>
            Talk to us
          </Button> */}
                    </Box>

                    {/* Card 4: Fully Transferable */}
                    <Box
                        sx={{
                            flex: '0 1 calc(50% - 16px)', // Approximately 50% width minus gap on md screens
                            maxWidth: '100%', // Full width on xs screens
                            backgroundColor: '#FBFAFF',
                            border: "1px solid #7C3DDA",
                            borderRadius: 4,
                            padding: 3,
                            textAlign: 'center',
                            // boxShadow: 1,
                            '@media (max-width: 900px)': {
                                flex: '0 1 100%', // Full width on smaller screens
                            },
                        }}
                    >
                        <Box
                            sx={{
                                //   display: 'inline-block',
                                backgroundColor: '#E6D8FF',
                                borderRadius: '50%',
                                width: 40,
                                height: 40,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 2,
                            }}>
                            <Typography color="#6B46C1" variant="h6">
                            <Icon4 />
                            </Typography>
                        </Box>
                        <Typography variant="h6" gutterBottom>
                            Fully Transferable
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            Transfer subscription to any other business if you are on 3 years or longer plans.
                        </Typography>
                        {/* <Button variant="contained" sx={{ backgroundColor: '#7B3FD5', color: 'white', '&:hover': { backgroundColor: '#5A38A5' } }}>
            Talk to us
          </Button> */}
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default Plancards;
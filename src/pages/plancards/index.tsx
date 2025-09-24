'use client'
import { Box, Typography, Button, Container } from '@mui/material';
import { Icon1, Icon2, Icon3, Icon4 } from '../../../Components/icons/icons';
// import { Icon1, Icon2, Icon3, Icon4 } from '';


const Plancards = () => {
    return (
        <>
            <Box sx={{bgcolor:"#FBFCFD" , width:"100%" , minHeight:{xs:"auto", md:"480px"} , padding:"10px" , py:{xs:4, md:6}, mb:{xs:6 , md:2}}}>
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
            </Box>
        </>
    );
};

export default Plancards;
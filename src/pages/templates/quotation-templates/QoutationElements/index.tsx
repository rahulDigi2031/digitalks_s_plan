'use client'

import { Box, Container, Typography, Button } from "@mui/material"
import { motion, easeOut } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut
    }
  }
}

export default function QuotationElement() {
    return (
        <>
            <Box sx={{ py: 4, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    <motion.div variants={itemVariants} initial="hidden" animate="show">
                        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                            Elements of a Quotation Format
                        </Typography>
                    </motion.div>
                    <motion.div variants={itemVariants} initial="hidden" animate="show">
                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify', mb: 3 }}>
                            It is also important to know the format of quotation before making one. So here is the list of elements you must have in your quotation format or you can directly use quotation maker to create online quotation for free.
                        </Typography>
                    </motion.div>

                    <motion.div 
                        variants={containerVariants} 
                        initial="hidden" 
                        animate="show"
                    >
                        <motion.div variants={itemVariants}>
                            <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                                Title - The document begins with a clear title, usually "Quotation", at the top. This title signifies the purpose of the document.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography variant="body1" paragraph sx={{ textAlign: 'justify', mb: 3 }}>
                                Quotation Number - Begins with a quotation number for the unique identification, creation of invoice and other document identification processes. This number is essential for referencing and organizing records. It also serves as a crucial identifier during each quotation creation and other unique identification processes.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                                Quotation Date and Due Date - The quotation includes the date when it is created. Additionally, it specifies a due date, indicating the deadline for the client's response or acceptance of the quotation.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography variant="body1" paragraph sx={{ textAlign: 'justify', mb: 3 }}>
                                Seller's Company Information - Detailed information about the seller's company is provided, including the company name, physical address, email address, and phone number. This information establishes the seller's identity and provides easy contact details for the client.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                                Buyer Information - The buyer's details, such as their name, address, email address, and phone number, are included. Personalizing the quotation with the buyer's information ensures a tailored approach and establishes a connection with the client.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography variant="body1" paragraph sx={{ textAlign: 'justify', mb: 3 }}>
                                Product or Service Details - The quotation lists the products or services being offered to the client. Each item is clearly described, detailing what the client will receive.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                                Product/Service Descriptions - For each product or service listed, a detailed description is provided. This description elaborates on the specifications, features, or scope of the product or service. Clarity in descriptions helps the client understand the offering thoroughly.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography variant="body1" paragraph sx={{ textAlign: 'justify', mb: 3 }}>
                                Detailed Cost Breakdown - The costs associated with each product or service are broken down. This breakdown provides transparency, allowing the client to understand the individual costs of different components.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                                Total Cost - The quotation summarizes the total cost of the project or purchase. This total provides a clear overview of the overall investment required from the client.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography variant="body1" paragraph sx={{ textAlign: 'justify', mb: 3 }}>
                                Price Variation Clause - A statement indicating that the provided prices are subject to change based on specific factors is included. This clause sets the expectation that prices might vary and prevents misunderstandings.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                                Terms and Conditions - This section outlines the terms and conditions of the transaction. It covers aspects such as payment terms, delivery schedules, warranties, and any other important contractual details. Clarity in terms and conditions manages client expectations and ensures a smooth transaction process.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography variant="body1" paragraph sx={{ textAlign: 'justify', mb: 3 }}>
                                Additional Notes - Space is allocated for additional notes or comments. Here, specific instructions, special considerations, or any other relevant information can be communicated. This section allows for personalized communication with the client.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                                Authorized Person's Signature - The quotation is signed by an authorized representative of the seller's company. This signature signifies the document's authenticity and formalizes the proposal.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography variant="body1" paragraph sx={{ textAlign: 'justify', mb: 3 }}>
                                Incorporating these elements into the quotation format creates a comprehensive and professional document. It not only communicates the offerings effectively but also establishes trust and credibility between the seller and the client. Such a detailed and well-organized quotation format ensures clarity in communication and sets the stage for successful business transactions.
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography variant="body1" paragraph sx={{ textAlign: 'justify', mb: 4 }}>
                                Here you can check out how to make a quotation without any hassle.
                            </Typography>
                        </motion.div>

                        <motion.div 
                            variants={itemVariants} 
                            initial="hidden" 
                            animate="show"
                            transition={{ delay: 1 }}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                                <Button 
                                    variant="contained" 
                                    size="large" 
                                    sx={{ 
                                        backgroundColor: '#E91E63', 
                                        color: 'white', 
                                        px: 4, 
                                        py: 1.3, 
                                        fontSize: '15px', 
                                        fontWeight: 'bold',
                                        '&:hover': { backgroundColor: '#C2185B' }
                                    }}
                                >
                                    Create Quotation for Free
                                </Button>
                            </Box>
                        </motion.div>
                    </motion.div>
                </Container>
            </Box>
        </>
    )
}
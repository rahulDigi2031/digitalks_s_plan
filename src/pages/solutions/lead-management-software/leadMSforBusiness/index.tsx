import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Image from "next/image";

export function InventoryManagementForIndustries() {
  const theme = useTheme();

  const industries = [
    {
      title: 'Inventory Management System for Manufacturers',
      description:
        'Managing inventory in a global, challenging industry for manufacturing businesses requires accurate production monitoring, warehouse organization, and order fulfillment. Optimize operations, improve accuracy, and enhance productivity with tailored software solutions.',
      imageUrl: '/inms01.webp',
    },
    {
      title: 'Inventory Management System for Wholesale Business',
      description:
        'Refers simplified inventory management for wholesalers by tracking sales, purchase orders, stock levels, and product categories. This solution improves operational efficiency, prevents stockouts, and ensures reliable customer service.',
      imageUrl: '/inms02.webp',
    },
    {
      title: 'Inventory Management System for E-commerce Business',
      description:
        'Balance retail industry requirements for e-commerce by connecting your inventory with your online store. Automatically update your stock levels, track orders, and reduce operational costs through automation and integrated systems.',
      imageUrl: '/inms03.webp',
    },
    {
      title: 'Inventory Management System for Retail Shops',
      description:
        'Enhance simplified inventory management with real-time stock visibility for retail businesses, ensuring optimal stock levels, better customer service, and reducing instances of overstocking or stockouts.',
      imageUrl: '/inms04.webp',
    },
    {
      title: 'Inventory Management System for Pharmacy & Medical Shops',
      description:
        'Improve pharmaceutical and medical shop operations with inventory solutions that track expiry dates, manage purchase orders, and simplify product categorization and reporting.',
      imageUrl: '/inms05.webp',
    },
    {
      title: 'Inventory Management System for Construction Business',
      description:
        'Streamline the management of construction materials, equipment, and tools with a comprehensive inventory system that supports real-time tracking, procurement, and cost management.',
      imageUrl: '/inms06.webp',
    },
  ];



  return (
    <>
        <Box sx={{ backgroundColor: theme.palette.background.default, py: 5 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}
        >
          Inventory Management Software suited to fit a variety of industries
        </Typography>

        {industries.map((industry, index) => (
          <Box
            key={index}
            sx={{
              display: { md: 'flex', xs: 'block' },
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              mb: 6,
              gap: 4,
            }}
          >
            {/* Image */}
            <Image
              src={industry.imageUrl}
              alt={industry.title}
              width={500}
              height={300}
              style={{ borderRadius: 8 }}
            />

            {/* Content */}
            <Box sx={{ maxWidth: 500 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                {industry.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {industry.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#E2007B',
                  color: 'white',
                  textTransform: 'none',
                  display: 'block',
                }} >
                Get Started - It's FREE
              </Button>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>

    <Box sx={{bgcolor:"#7C3DDA" , width:"100%" , height:{md:"120px" , xs:"150px"}}}>
        <Container maxWidth="lg" sx={{py:5 , display:"flex" , justifyContent:"space-evenly" , alignItems:"center" , px:{xs:2 , md:0}}}>
            <Typography variant="body1" sx={{fontSize:{md:"24px" , xs:"17px"} , color:"white"}}>Refrens is a free inventory management tool trusted by businesses across India</Typography>

            <Button variant="contained" sx={{bgcolor:"#E2007B" , color:"white" , textTransform:"none"}}>Get Started!</Button>
        </Container>
    </Box>
    </>
  );
}
'use client'

import { Box, Container, Typography } from "@mui/material"
import Image from "next/image"

export default function BenefitsOfInventoryMS() {
  const benefits = [
    {
      img: "/stock.webp",
      title: "Automated Stock Updates",
      desc: "Automatically update stock levels with every invoice or purchase, ensuring your inventory is always accurate and up-to-date.",
    },
    {
      img: "/tracking.webp",
      title: "Real-Time Tracking",
      desc: "Stay updated with live inventory data, enabling proactive management of stock levels and optimized inventory flow.",
    },
    {
      img: "/warehouse.webp",
      title: "Warehouse Management",
      desc: "Efficiently track and manage inventory across multiple locations, branches, or warehouses in real-time.",
    },
    {
      img: "/automatebook.webp",
      title: "Automated Bookkeeping",
      desc: "Automatically post journal entries to ledgers for each inventory sale or purchase, eliminating manual accounting work.",
    },
    {
      img: "/repograph.svg",
      title: "Inventory Reports",
      desc: "Access clear, detailed reports on stock levels, item movements, and inventory value for better decision-making.",
    },
    {
      img: "/prodtracking.webp",
      title: "Product-wise Profitability Tracking",
      desc: "Track avg. buying price, avg. selling price, and product-wise profitability with our auto-generated reports.",
    },
    {
      img: "/packageitem.webp",
      title: "Package Items",
      desc: "Easily create and manage bundles for items that are frequently sold together, streamlining your sales process.",
    },
    {
      img: "/batchWise.webp",
      title: "Batch-wise and Serial No. wise Tracking",
      desc: "Track inventory by batch or serial number to manage expiry dates, warranties, and product history with ease.",
    },
    {
      img: "/bulkupload2.svg",
      title: "Bulk Upload Stocks",
      desc: "Save time and simplify stock management with bulk actions for adding/editing items, handling transfers, and more.",
    },
    {
      img: "/delivery.webp",
      title: "Auto-Generate Delivery Challans",
      desc: "Automatically generate Delivery Challans while transferring stock between locations, simplifying the process.",
    },
    {
      img: "/barcode.webp",
      title: "Barcode Scanning Support",
      desc: "Enable fast and accurate inventory transactions by scanning barcodes, reducing manual entry errors.",
    },
    {
      img: "/collab.webp",
      title: "Collaborate with your Team",
      desc: "Add multiple users with customizable roles and permissions. Control who gets access to your Refrens account.",
    },
    {
      img: "/chat.webp",
      title: "24/7 Live Support",
      desc: "Get round-the-clock support over live chat, email, WhatsApp, and call.",
    },
    {
      img: "/cloud.svg",
      title: "Cloud-Based Solution",
      desc: "Access inventory data anytime, anywhere, with secure cloud storage across devices and locations.",
    },
    {
      img: "/iso.svg",
      title: "ISO Certified",
      desc: "We are ISO certified, ensuring it meets the highest international standards for quality, security, and reliability.",
    },
    {
      img: "/secure.webp",
      title: "Security Assurance",
      desc: "Enjoy enhanced data encryption with Refrens, one of the most trusted and secure GST providers for SMEs in India.",
    },
  ]

  return (
    <>
      <Box sx={{ bgcolor: "#0B0F19", width: "100%", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          {/* Section Title */}
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              textAlign: "center",
              fontWeight: 600,
              mb: 6,
            }}
          >
            Benefits of Inventory Management Software
          </Typography>

          {/* Benefits List (4x4) using Flex */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: { xs: 4, md: 3 },
            }}
          >
            {benefits.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 22%" },
                  color: "#E5E7EB",
                  textAlign: "left",
                }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={40}
                  height={40}
                  style={{ marginBottom: "12px" }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#A1A1AA" }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Bottom Button */}
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-md transition-all">
              Get Started – It’s FREE
            </button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

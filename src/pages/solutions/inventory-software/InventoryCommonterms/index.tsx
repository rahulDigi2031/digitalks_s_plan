'use client'

import { Box, Container, Typography, Button } from "@mui/material"

export default function InventoryCommonterms(){
    return(
        <>
         <Box>
            <Container maxWidth="lg">
                <Box sx={{ mt: { xs: 4, md: 6 }, mb: { xs: 4, md: 6 } }}>
                    <Typography
                        variant="h4"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 700, 
                            mb: { xs: 2, md: 3 },
                            color: "#000"
                        }}
                    >
                        Here are some common Inventory Terms:
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 3, md: 4 }
                        }}
                    >
                        Managing inventory involves many jargon, many of which are used by stock managers and stock inventory software. These are essential to understand for efficient operations. Below are many jargon, many of which are explained in detail.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Bill of Materials (BOM)
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Bill of materials is a comprehensive list of components, materials, and instructions required to create a finished product. It is widely used in manufacturing.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Kitting
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Kitting is the process of bundling individual parts or components into one unit, often used for assembling kits, bundles, or packages. It simplifies inventory tracking and is widely used in e-commerce and manufacturing industries.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Just-In-Time (JIT)
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Just-In-Time (JIT) is a strategy used in supply chain management to reduce inventory by ordering only when needed, i.e., creating supply when the demand just-in-time coordination with suppliers to use reduced material costs by receiving inventory only when needed, e.g., creating a supply when the demand.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Work In Process (WIP)
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Work In Process is the inventory that is currently being used in production but isn't finished. It tracks materials on the shop floor and lead times in the efficiency of the business. For example, curdling is in a baking shop time isn't finished. It tracks materials on the shop floor.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Lead Time
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Lead time is the duration between placing an order, flour, sugar, etc., in a baking shop. Lead time effectively helps avoid delays and maintain smooth operations.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Reorder Point (ROP)
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Reorder point is the decided stock level at which new inventory needs to be ordered to prevent stockouts. It is decided based on lead time and average point (Reorder point is the decided stock level at which new inventory needs to be ordered to prevent stockouts. It is decided based on lead time and.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Safety Stock
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Safety stock is the buffer of extra inventory kept on hand to handle unexpected demand spikes or supply chain disruptions, ensuring smooth operations.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Stock Keeping Unit (SKU)
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        SKU is a unique code assigned to each product for easy identification and tracking. It simplifies inventory management and is widely used in retail e-commerce Stock Keeping Unit (SKU) is a unique code assigned to each product for easy identification and tracking. It simplifies inventory management and is widely used.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Cycle Counting
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Cycle counting is a periodic stock auditing process where a part or subset of inventory is counted on a regular rotating basis. This ensures stock accuracy without the need for full stock checks. Cycle counting is a periodic stock auditing process where a part or subset of inventory is counted on a regular rotating basis. This ensures stock.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Economic Order Quantity (EOQ)
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Economic Order Quantity is the ideal quantity that gives all the purposes, i.e., minimizes total inventory costs and balancing Economic Order Quantity (EOQ) is the ideal quantity that gives all the purposes, i.e., minimizes total inventory costs and balancing.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Carrying Costs
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        The carrying costs consist of all the costs incurred to store and maintain inventory, including warehousing, insurance, and depreciation are called Carrying Costs The carrying costs consist of all the costs incurred to store and maintain inventory, including warehousing, insurance, and depreciation are called.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        First-In, First-Out (FIFO)
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        FIFO is an inventory valuation method where the oldest inventory is sold/used first. It's ideal for perishable goods or items with expiry dates. First-In, First-Out (FIFO) is an inventory valuation method where the oldest inventory is sold/used first. It's ideal for perishable goods or items with expiry dates.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Last-In, First-Out (LIFO)
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        LIFO is an inventory valuation method where the most recently acquired inventory is sold first. It's useful in industries with fluctuating prices. Last-In, First-Out (LIFO) is an inventory valuation method where the most recently acquired inventory is sold first. It's useful in industries with fluctuating prices.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Perpetual Inventory System
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        A system that continuously updates stock levels in real-time as transactions occur. A perpetual inventory system helps provide accurate and timely inventory data whether tracking offers relief in number or used for. Stockouts highlight the importance of proper Perpetual Inventory System A system that continuously updates stock levels in real-time as transactions occur. A perpetual inventory system helps provide accurate.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Stockout
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Stockout is a situation where inventory runs out, often resulting in lost sales or production delays. Stockouts highlight the importance of proper inventory planning.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Batch Tracking
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Batch tracking is a method of tracking inventory by batch or lot. It's useful for quality control and highlighting product recalls.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Order Fulfillment
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        The process of receiving, processing, and delivering orders to customers. Efficient order fulfillment ensures customer satisfaction and repeat business. Order Fulfillment The process of receiving, processing, and delivering orders to customers. Efficient order fulfillment ensures customer satisfaction and repeat.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Dead Stock
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Dead stock is the inventory that hasn't sold for an extended period and is unlikely to sell. Identifying and managing dead stock can free up storage and reduce costs.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Barcode Scanning
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Barcode scanning uses a technology used to track inventory by scanning product barcodes, ensuring accuracy and speeding up operations.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Inventory Turnover
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        A ratio that measures how often inventory is sold and replaced within a period. High turnover indicates efficient inventory management. Inventory Turnover A ratio that measures how often inventory is sold and replaced within a period. High turnover indicates efficient inventory management.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Demand Forecasting
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        The process of predicting future inventory needs based on historical data, trends, and market conditions. Accurate forecasting reduces excess demand and stockouts. The process of predicting future inventory needs based on historical data, trends, and market conditions. Accurate forecasting reduces excess.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        Drop Shipping
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Drop shipping is a supply chain strategy where a retailer doesn't keep inventory but forwards customer orders to the supplier, who ships directly to the customer.
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{ 
                            textAlign: "left", 
                            fontWeight: 600, 
                            mb: 1,
                            color: "#000"
                        }}
                    >
                        ABC Analysis
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ 
                            textAlign: "left", 
                            lineHeight: 1.6,
                            color: "#666",
                            mb: { xs: 3, md: 4 }
                        }}
                    >
                        ABC is an inventory categorization method that divides items into three categories: A (high-value), B (moderate-value), and C (low-value) based on their importance and contribution to revenue. These terms form the foundation of inventory management, helping businesses streamline processes, improve accuracy, and optimize resources.
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: "center", mb: { xs: 4, md: 6 } }}>
                        <Button 
                            variant="contained" 
                            sx={{ 
                                bgcolor: "#E2007B", 
                                color: "white", 
                                padding: { xs: "10px 24px", md: "12px 32px" },
                                fontSize: { xs: "14px", md: "16px" },
                                borderRadius: 2,
                                textTransform: "none",
                                fontWeight: 600
                            }}
                        >
                            Get Started - it's FREE
                        </Button>
                    </Box>
                </Box>
            </Container>
         </Box>
        </>
    )
}
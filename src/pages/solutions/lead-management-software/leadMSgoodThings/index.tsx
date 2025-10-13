import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function LeadManagementSoftwareGoodThings(){

	const logos = [
		{ src: "/yourstory.webp", alt: "YourStory", href: "https://yourstory.com/2020/05/funding-alert-refrens-vijay-shekhar-sharma-anupam-mittal" },
		{ src: "/vcc.webp", alt: "VCCircle", href: "https://www.vccircle.com/refrens-raises-funding-from-paytm-founder-others" },
		{ src: "/et.webp", alt: "Economic Times", href: "https://economictimes.indiatimes.com/startups/refrens-raises-funds-from-a-clutch-of-investors-including-vijay-shekhar-sharma/articleshow/75690333.cms" },
		{ src: "/indexpress.webp", alt: "Indian Express", href: "https://www.newindianexpress.com/business/2019/Nov/14/refrens-banking-on-freelancer-friendly-offerings-to-drive-growth-2061596.html" },
	];

	return(
		<Box sx={{ bgcolor: "#FBFCFD", py: { xs: 6, md: 8 } , mb:{md:0 , xs:5}}}>
			<Container maxWidth="lg">
				<Typography 
					variant="h4" 
					sx={{ fontWeight: 800, mb: 4, color: "#0F172A", textAlign: 'center' }}>
					Big people are talking good things about us
				</Typography>	  

				<Box sx={{ 
						display: 'flex',
						flexWrap: { xs: 'wrap', md: 'nowrap' },
						justifyContent: 'center',
						alignItems: 'center',
						gap: 3
					}}>
					{logos.map((logo) => (
						<a key={logo.alt} href={logo.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
							<Box sx={{
								display: 'inline-flex',
								alignItems: 'center',
								justifyContent: 'center',
								bgcolor: '#F2F6FA',
								borderRadius: 2,
								height: 64,	 
								px: 2
							}}>
								<Box sx={{ position: 'relative', width: 140, height: 32 }}>
									<Image src={logo.src} alt={logo.alt} fill style={{ objectFit: 'contain' }} />
								</Box>
							</Box>
						</a>
					))}
				</Box>
			</Container>		  
		</Box>
	)
}



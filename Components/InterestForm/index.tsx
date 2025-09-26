import { Box, Button, Container, FormHelperText, InputAdornment, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

type CountryOption = {
	code: string;
	name: string;
	phonePrefix: string;
};

type FormValues = {
	fullName: string;
	email: string;
	organisation: string;
	phoneCountry: string;
	phone: string;
	whatsapp: string;
	country: string;
};

const COUNTRIES: CountryOption[] = [
	{ code: "IN", name: "India", phonePrefix: "+91" },
	{ code: "US", name: "United States", phonePrefix: "+1" },
	{ code: "GB", name: "United Kingdom", phonePrefix: "+44" },
	{ code: "AE", name: "United Arab Emirates", phonePrefix: "+971" },
	{ code: "SG", name: "Singapore", phonePrefix: "+65" },
];

const validationSchema = Yup.object({
	fullName: Yup.string().trim().required("Full name is required"),
	email: Yup.string().email("Enter a valid email").required("Email is required"),
	organisation: Yup.string().trim().required("Organisation name is required"),
	phoneCountry: Yup.string().required("Country code is required"),
	phone: Yup.string()
		.max(10, "Maximum 10 digits")
		.matches(/^\d+$/g, "Only digits are allowed")
		.required("Phone number is required"),
	whatsapp: Yup.string()
    .required("Whatsapp is required")
		.test("min", "Minimum 7 digits", (v) => !v || v.length >= 7)
		.test("max", "Maximum 10 digits", (v) => !v || v.length <= 10)
		.matches(/^$|^\d+$/g, "Only digits are allowed"),
	country: Yup.string().required("Country is required"),
});

export default function InterestForm() {
	const formik = useFormik<FormValues>({
		initialValues: {
			fullName: "",
			email: "",
			organisation: "",
			phoneCountry: COUNTRIES[0].code,
			phone: "",
			whatsapp: "",
			country: "",
		},
		validationSchema,
		onSubmit: (values: FormValues) => {
			// In a real app, send to API
			console.log("Partner interest:", values);
		},
	});

	const selectedCountry = COUNTRIES.find(c => c.code === formik.values.phoneCountry) || COUNTRIES[0];

	return (
		<Box sx={{ py: 2 }}>
			<Container maxWidth="xs">
				<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
					{/* Placeholder for close icon area in the reference UI */}
				</Box>
				<Typography variant="h5" align="center" sx={{ mb: 3, fontWeight: 600 }}>
					Partner Interest Form
				</Typography>

				<form onSubmit={formik.handleSubmit} noValidate>
					<Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
						<Box>
							<Typography variant="caption" sx={{ fontWeight: 600 }}>
								Full Name*
							</Typography>
							<TextField
								fullWidth
								size="small"
								placeholder="Enter Full Name"
								name="fullName"
								value={formik.values.fullName}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.fullName && Boolean(formik.errors.fullName)}
								helperText={formik.touched.fullName && formik.errors.fullName}
							/>
						</Box>

						<Box>
							<Typography variant="caption" sx={{ fontWeight: 600 }}>
								Email*
							</Typography>
							<TextField
								fullWidth
								size="small"
								placeholder="Enter Email"
								type="email"
								name="email"
								value={formik.values.email}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.email && Boolean(formik.errors.email)}
								helperText={formik.touched.email && formik.errors.email}
							/>
						</Box>

						<Box>
							<Typography variant="caption" sx={{ fontWeight: 600 }}>
								Organisation Name*
							</Typography>
							<TextField
								fullWidth
								size="small"
								placeholder="Enter Organisation Name"
								name="organisation"
								value={formik.values.organisation}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.organisation && Boolean(formik.errors.organisation)}
								helperText={formik.touched.organisation && formik.errors.organisation}
							/>
						</Box>

						<Box>
							<Typography variant="caption" sx={{ fontWeight: 600 }}>
								Phone number*
							</Typography>
							<Box sx={{ display: "flex", gap: 1 }}>
								<Box sx={{ flexBasis: 100, flexShrink: 0 }}>
									<Select
										fullWidth
										size="small"
										name="phoneCountry"
										value={formik.values.phoneCountry}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
									>
										{COUNTRIES.map((c) => (
											<MenuItem key={c.code} value={c.code}>
												{c.code}
											</MenuItem>
										))}
									</Select>
									{formik.touched.phoneCountry && formik.errors.phoneCountry && (
										<FormHelperText error>{formik.errors.phoneCountry}</FormHelperText>
									)}
								</Box>
								<Box sx={{ flexGrow: 1 }}>
									<TextField
										fullWidth
										size="small"
										placeholder="Enter Phone number"
										name="phone"
										value={formik.values.phone}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										error={formik.touched.phone && Boolean(formik.errors.phone)}
										helperText={formik.touched.phone && formik.errors.phone}
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">{selectedCountry.phonePrefix}</InputAdornment>
											),
										}}
									/>
								</Box>
							</Box>
						</Box>

						<Box>
							<Typography variant="caption" sx={{ fontWeight: 600 }}>
								WhatsApp Number
							</Typography>
							<TextField
								fullWidth
								size="small"
								placeholder="Enter WhatsApp Number"
								name="whatsapp"
								value={formik.values.whatsapp}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.whatsapp && Boolean(formik.errors.whatsapp)}
								helperText={formik.touched.whatsapp && formik.errors.whatsapp || "Share if it's different than phone no."}
							/>
						</Box>

						<Box>
							<Typography variant="caption" sx={{ fontWeight: 600 }}>
								Country*
							</Typography>
							<Select
								fullWidth
								size="small"
								name="country"
								value={formik.values.country}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.touched.country && Boolean(formik.errors.country)}
							>
								{COUNTRIES.map((c) => (
									<MenuItem key={c.code} value={c.name}>
										{c.name}
									</MenuItem>
								))}
							</Select>
							{formik.touched.country && formik.errors.country && (
								<FormHelperText error>{formik.errors.country}</FormHelperText>
							)}
						</Box>

						<Box sx={{ mt: 1 }}>
							<Button type="submit" variant="contained"  fullWidth sx={{ textTransform: "none", py: 0.9 , backgroundColor:'#7C3DDA' , color:"white" }}>
								Submit
							</Button>
						</Box>
					</Box>
				</form>

				<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 3 }}>
					<Typography variant="caption" color="text.secondary">
						Powered By
					</Typography>
					<Typography variant="caption" sx={{ ml: 1, fontWeight: 700 }} color="primary">
						Digitalks
					</Typography>
				</Box>
			</Container>
		</Box>
	);
}
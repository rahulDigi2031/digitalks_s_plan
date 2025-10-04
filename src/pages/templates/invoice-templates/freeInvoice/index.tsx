"use client";

import {
  Box,
  Container,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

export default function Freeinvoice() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Invoice Format for FREE
        </Typography>

        {/* First paragraph with link */}
        <Typography variant="body1" gutterBottom>
          <Link href="#" color="primary" underline="hover">
            GST Billing Software
          </Link>{" "}
          Having a small business or service agency or being a freelancer, it is very
          hard, time-consuming, and cumbersome when you try to create invoices
          through Excel, Word, Google Sheets, or Docs.
        </Typography>

        {/* Paragraphs */}
        <Typography variant="body1" gutterBottom>
          Some people use <strong>Word or Google Docs</strong> to simplify the invoicing process because
          you can create quite good-looking invoices from MS Word. But it is always
          harder to calculate taxes like GST, TDS, or any other additional charges
          associated with it.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Whereas some use Excel or Google spreadsheets to create one and there is a
          huge benefit to using Excel as it can easily calculate taxes like GST, TDS
          with its automatic formulas. You can also make your own formula to create a
          predefined invoice. However, Excel also has a huge drawback of
          professionalism. Invoices created through Excel don’t look attractive and
          lack professionalism even when using professional invoice templates.
        </Typography>

        <Typography variant="body1" gutterBottom>
          When you are running a business, not only do you have to create invoices
          but also have to maintain the client data, invoices, different reports like
          GST, TDS.
        </Typography>

        {/* Example List */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          For example:
        </Typography>

        <List sx={{ listStyleType: "decimal", pl: 4 }}>
          {[
            "To manage all the invoices in one place.",
            "To manage all your client data.",
            "To create and maintain GST, TDS report.",
            "You want to know which invoices are paid, unpaid or partially paid.",
            "You want to know your earnings for the month or year.",
            "Many times your invoices get accepted but don’t know how to ",
          ].map((item, index) => (
            <ListItem key={index} sx={{ display: "list-item", py: 0 }}>
              <ListItemText
                primary={
                  index === 5 ? (
                    <>
                      {item}
                      <Link href="#" color="primary" underline="hover">
                        receive online payments
                      </Link>
                      .
                    </>
                  ) : (
                    item
                  )
                }
              />
            </ListItem>
          ))}
        </List>

        {/* More content */}
        <Typography variant="body1" gutterBottom>
          When it comes to the above tasks both Word and Excel fail. So, having
          proper{" "}
          <Link href="#" color="primary" underline="hover">
            invoicing software
          </Link>{" "}
          for your business not only helps to create invoices but also helps in
          managing all the data in one place without searching for each file.
        </Typography>

        <Typography variant="body1" gutterBottom>
          At Refrens, you can manage all your invoices, expenses, your client, and
          payment details in one place. Refrens is not only for invoicing it is a
          complete tool to manage your finances. You can create a{" "}
          <strong>professionally designed invoice</strong> using the{" "}
          <Link href="#" color="primary" underline="hover">
            invoice generator
          </Link>{" "}
          with multiple <strong>invoice templates</strong>.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Other than this, Refrens also provides the following tools like
        </Typography>

        {/* Links list */}
        <List>
          {[
            "Quotation generator",
            "Proforma invoice templates",
            "GST invoice maker",
            "GST Billing Software",
            "Expense report software",
            "Purchase order generator",
          ].map((text, i) => (
            <ListItem key={i} sx={{ py: 0 }}>
              <Link href="#" color="primary" underline="hover">
                {text}
              </Link>
            </ListItem>
          ))}
        </List>

        {/* -------------------- NEW SECTION START -------------------- */}

        {/* Section 1 */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Promote Your Brand With Invoice Format
        </Typography>
        <Typography variant="body1" gutterBottom>
          Invoices are important materials of any business and are used to convey the
          information sold by any business. Invoices are the only material that helps
          the business to get paid faster. If any invoice is professionally built and
          conveys the information in an easy way, the chances of getting paid on time
          increase by 40%. Refrens clearly knows the importance of invoices that are
          beautifully designed. So, Refrens developed multiple{" "}
          <strong>invoice templates</strong> for different kinds of businesses.
        </Typography>

        <Typography variant="body1" gutterBottom>
          Whether you are a professional, business owner, freelancer,{" "}
          <Link href="#" color="primary" underline="hover">
            graphic designer
          </Link>{" "}
          or you love the color blue, there is a{" "}
          <strong>free invoice template</strong> for you. You can create an invoice
          that suits your business using templates and send them to your clients for
          free.
        </Typography>

        <Typography variant="body1" gutterBottom>
          In addition, every uniquely <strong>designed invoice template</strong> has
          the option to add a business or personal logo that makes your client aware
          of your brand. Moreover, Refrens never promotes or add Refrens’ name or
          logo to any of your invoices. No watermark of Refrens will be ever used on
          your invoice and your invoice is also totally ad-free.
        </Typography>

        {/* Section 2 */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Easy Printable Invoice Format
        </Typography>
        <Typography variant="body1" gutterBottom>
          Maybe you still follow the traditional method of creating invoices and
          printing them. No worry, Refrens got you covered as well. All the{" "}
          <strong>online invoice templates</strong> are printable and we have a
          printer-friendly template as well. You can easily print with one click.
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you need any specific template for printing purposes, you can use our{" "}
          <strong>print-friendly invoice template</strong> and can customize it as
          per the need. Not just print, you save your invoice in PDF format as well
          and can also send via Email or WhatsApp.
        </Typography>
        <Typography variant="body1" gutterBottom>
          As Refrens is a completely{" "}
          <Link href="#" color="primary" underline="hover">
            online invoicing
          </Link>{" "}
          platform, all the invoices get saved here. You can access all the invoices
          anytime and anywhere. Having this benefit, you can easily create the
          invoice from anywhere and can be saved to print for later purposes.
        </Typography>

        {/* Section 3 */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Free Invoice Format Highlights
        </Typography>
        <Typography variant="body1" gutterBottom>
          Invoicing is a pushover using the Refrens invoice template. Beautifully{" "}
          <strong>designed invoice templates</strong>, streamline your invoice cycle
          process. Knowing this our Refrens team has developed multiple invoice
          formats to create an invoice that fits your business needs. Here are some
          of the highlights of the Refrens <strong>invoice format</strong>.
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Fully Customized Invoice.
        </Typography>
        <List sx={{ listStyleType: "decimal", pl: 4 }}>
          {[
            "Multiple Invoice Colors (Available in 24 colors)",
            "Magic Color using Company or Personal Logo.",
            "Professionally Designed Invoice.",
            "All invoices are compact and print-friendly.",
            "Changes fonts of the invoice heading.",
            "Includes all the essential elements of the invoice.",
            "Auto calculates discounts, additional charges, GST.",
            "Add attachments and signatures.",
          ].map((item, index) => (
            <ListItem key={index} sx={{ display: "list-item", py: 0 }}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>

        {/* -------------------- EXTRA SECTION START -------------------- */}

        {/* Section 4 */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 6 }}>
          Special Purpose Invoice Format
        </Typography>
        <Typography variant="body1" gutterBottom>
          The Refrens team is very well aware of the importance of the{" "}
          <strong>invoice template</strong> for{" "}
          <Link href="#" color="primary" underline="hover">
            freelancers
          </Link>{" "}
          and small businesses. Knowing this fact, our team developed multiple
          templates according to the business run by small business owners and
          freelancers.
        </Typography>

        <List sx={{ listStyleType: "decimal", pl: 4 }}>
          {[
            "Professional Invoice Template - Designed for professionals like chemists, lawyers, designers, freelancers invoice templates, content writers, photography invoice, etc.",
            "Letterhead Template - Not just big corporates but businesses of all sizes can make their custom letterhead to communicate between two parties. Refrens team build letterhead for all types of businesses.",
            "Business Invoice Template - If the letterhead does not attract you, here is the template that is definitely made for all business purposes.",
            "Modern Invoice Template - Specially designed for startups and new businesses which helps to accept the payment faster.",
            "Print-friendly Invoice Template - Black and white template with compact and easy-to-print invoice.",
            "GST Invoice Template - Specially designed for traders and import & export businesses and for the businesses registered under GST.",
          ].map((item, index) => (
            <ListItem key={index} sx={{ display: "list-item", py: 0 }}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>

        {/* Section 5 */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 6 }}>
          Consulting Invoice Templates
        </Typography>
        <Typography variant="body1" gutterBottom>
          Consultants are those who advise or guide the organization or business as
          an individual to achieve the goal using expertise. Consultants vary for
          different industries such as IT consultants, software consultants,
          freelance consultants, legal consultants, business consultants, etc.
        </Typography>
        <Typography variant="body1" gutterBottom>
          After the completion of the project, these consultants bill their clients
          using a <strong>consultant invoice template</strong>. For different
          industries, different templates can be used. Most of the consultants charge
          per hour rate. If any consultant is GST registered and then they can ask
          for a GST invoice as well.
        </Typography>

        {/* Section 6 */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 6 }}>
          Which Invoice Format Template Should A Business Use?
        </Typography>
        <Typography variant="body1" gutterBottom>
          As mentioned earlier, there are individuals and businesses who prefer Word
          or Google Docs format for their business, then there are those who prefer
          Excel or Google Sheets to{" "}
          <strong>create invoice templates</strong>. Both these methods are best in
          their own way, but still, these two methods fail when you look at the
          different pictures of the invoice.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Using Word or Excel, you would never know the status of the invoices such
          as paid, unpaid, part-paid or How much are your earnings at the end of the
          week or month or even at the end of the year. It is always time-consuming
          to keep track of all your invoices in a particular folder.
        </Typography>
        <Typography variant="body1" gutterBottom>
          The best option is to use tools that are specially designed for making
          invoices. You can use the tool to minimize your invoice-creating effort.
          You can get the best of both Word and Excel in one tool. Auto calculation
          as well as amazing templates for invoices.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Use Refrens <strong>invoice template format</strong> to accomplish your
          invoicing cycle seamlessly and make your invoicing statement simple.{" "}
          <strong>LIFETIME FREE INVOICE TEMPLATES.</strong>
        </Typography>

        {/* Section 7 */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 6 }}>
          Invoice Templates in PDF Format
        </Typography>
        <Typography variant="body1" gutterBottom>
          Be it today or tomorrow, creating an invoice for your client will always
          remain an important aspect of your business. But the process of creating
          invoices has drastically changed. Earlier, business owners used to write
          invoices and paper mail to their clients. But today it isn’t an effective
          way to save time and get paid faster.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Using a <strong>ready-made invoice template</strong> for your business, not
          only saves your time but also helps you to get paid faster than usual. No
          matter what business you are into, create and send invoices to clients
          using Refrens invoice PDF templates free. Download your invoice in PDF
          format, print it, or email it to your client directly. Simply create an
          invoice, select the <strong>free invoice template</strong>, and send to
          your business. Email your client and get paid faster.
        </Typography>

        {/* -------------------- EXTRA SECTION END -------------------- */}

        {/* -------------------- NEW BENEFITS SECTION START -------------------- */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 6 }}>
          Benefits of Using Refrens Free Invoice Template Format
        </Typography>

        <List sx={{ listStyleType: "decimal", pl: 4 }}>
          {[
            "100% Free. Create Invoices. No Hidden Charges.",
            "Professional Layout Format.",
            "Fully Customizable Invoice.",
            "Save client data to reuse in the future which avoids retyping of client information again and again.",
            "Generate GST, TDS report.",
            "Collect Payment Online.",
            "Unlimited Bank and Card Transaction.",
            "Status of invoices like paid, unpaid, partly paid.",
            "Bulk upload Invoices and Expenses.",
            "Manage and download all payment reports.",
            "Add multiple team members or users.",
            "Send invoices through Email, WhatsApp, or through link sharing.",
            "Free Customer Support to resolve your queries.",
          ].map((item, index) => (
            <ListItem key={index} sx={{ display: "list-item", py: 0 }}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
          Is Invoice Format Free?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Yes, the default template available on Refrens for generating an invoice, quotation form, proforma invoice or purchase order are free.
        </Typography>
        <Typography variant="body1" gutterBottom>
          All you have to add is to add information about your company, client details, detailed information about the product or service you offer, and select the invoice template you love. If you are creating a proforma invoice then you can use proforma invoice format to customize the invoice. After creating the invoice, you can email the client, download the invoice as a PDF or you can print the same. The invoice gets saved and you can access it from anywhere and anytime.
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 2, mb: 4, px: 4, py: 1.5 , bgcolor:"#E2007B" , display:"block" , margin:"auto" }}
        >
          Create Invoice For Free
        </Button>
        {/* -------------------- NEW BENEFITS SECTION END -------------------- */}
      </Container>
    </Box>
  );
}
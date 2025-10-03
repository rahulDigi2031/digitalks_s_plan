import { Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function InvSoftwareWorks() {
    const router = useRouter(); 
  return (
    <>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        How invoicing software works?
      </Typography>

      <Typography variant="body1" paragraph>
        Invoicing software is not just about creating invoices online; it can also create multiple documents in invoicing software. Here is how Refrens' invoice software works:
      </Typography>

      <Typography variant="body1" paragraph>
        It is simple and easy to understand software. First, you have to sign up and create an account.
      </Typography>

      <Typography variant="body1" paragraph>
        As per the requirement, you can start creating the documents by clicking on the particular document section from the left sidebar. But here is a quick overview of how it works.
      </Typography>

      <Typography variant="body1" paragraph>
        Invoicing software has two main parts.
      </Typography>

      <List dense>
        <ListItem sx={{ pl: 4 }}>
          <ListItemText primary="• Receivables" />
        </ListItem>
        <ListItem sx={{ pl: 4 }}>
          <ListItemText primary="• Payables" />
        </ListItem>
      </List>

      <Typography variant="body1" fontWeight="bold" paragraph>
        First, starting with account receivables.
      </Typography>

      <Typography variant="body1" paragraph>
        Under accounts receivable, all those documents are created that help to generate revenue for the company by selling the product or service. It has quotations, proforma invoices, delivery challan, invoices, and payment receipts and accepts payments.
      </Typography>

      <Typography variant="body1" paragraph>
        A typical business first generates multiple leads using inbound or outbound lead method. Once the leads start to flow, the company assigns those leads to their salesperson.
      </Typography>

      <Typography variant="body1" paragraph>
        Now, a salesperson's job is to educate the customer regarding the product or service they are offering. Now that the salesperson thinks this lead will close, they offer the pricing of the company's product.
      </Typography>

      <Typography variant="body1" paragraph>
        And how is the pricing offered? By sending a quotation to the potential customer. Your salesperson creates a quotation for that particular product and sends it to the customer.
      </Typography>

      <Typography variant="body1" paragraph>
        Now, if the customer agrees to the price of your product, it is believed that the client has accepted the quotation. Now, from here, you send a pro forma invoice asking for the advance payment to fulfill the requirement. And also pro forma invoice works as an order confirmation document.
      </Typography>

      <Typography variant="body1" paragraph>
        Once the client pays an advance challan to deliver the business's responsibility to deliver the product at the same price within the delivery period. Many businesses also use a delivery challan to deliver the product.
      </Typography>

      <Typography variant="body1" paragraph>
        The product is delivered, a challan to deliver the invoice is sent for the rest of the payment. The client pays the pending amount, and to record the transaction of that product, a payment receipt is created and sent to the client, stating yes that the business has received the pending amount, and to record the transaction of the invoice.
      </Typography>

      <Typography variant="body1" paragraph>
        Here, now the accounts receivable cycle is complete. The business has generated revenue and recorded all the necessary transactions by creating the relevant documents from the quotation, proforma invoice, delivery challan, invoice, and payment receipt.
      </Typography>

      <Typography variant="body1" fontWeight="bold" paragraph>
        Now let's talk about accounts payable.
      </Typography>

      <Typography variant="body1" paragraph>
        Under accounts payable, businesses record all the expenses incurred at the time of business transactions. For instance, purchasing raw materials, daily expenses, office expenses, rent, etc.
      </Typography>

      <Typography variant="body1" paragraph>
        These documents include purchase orders, expense, debit notes.
      </Typography>

      <Button variant="contained" onClick={() => router.push("/contact")} sx={{ mt: 2 , bgcolor:"#E2007B" , color:"white" , display:"block" , margin:"auto" , mb:4}}>
  Get Started - It's FREE
</Button>
    </>
  );
}
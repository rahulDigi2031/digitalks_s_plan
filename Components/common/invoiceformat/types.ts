// types/invoice.ts
export interface InvoiceItem {
    name: string;
    hsn: string;
    qty: string;
    rate: string;
    amount: string;
    cgst: string;
    sgst: string;
    total: string;
  }
  
  export interface PartyDetails {
    businessName: string;
    gstin?: string;
    pan?: string;
    address?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    email?: string;
    phone?: string;
  }
  
  export interface InvoiceData {
    invoiceNo: string;
    invoiceDate: string;
    dueDate: string;
    billedBy: PartyDetails;
    billedTo: PartyDetails;
    items: InvoiceItem[];
    currency?: string;
    notes?: string;
    terms?: string;
    attachments?: string[];
    additionalInfo?: string;
  }
  
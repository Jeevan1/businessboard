import { TfiHome } from "react-icons/tfi";
import { TiMessages } from "react-icons/ti";
import {
  PiFileCloudLight,
  PiNotepad,
  PiCalculator,
  PiChartPieSlice,
} from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";

export const menuItems = [
  {
    id: 1,
    name: "Home",
    icon: <TfiHome />,
    color: "#5390F4",
    desc: `Track leads and opportunities and close more sales. Turn "won" opportunities into personalised quotes and email them to your new customers.`,
    active: false,
  },
  {
    id: 2,
    name: "Opportunities",
    icon: <TiMessages />,
    color: "#6AD83C",
    desc: `Track leads and opportunities and close more sales. Turn "won" opportunities into personalised quotes and email them to your new customers.`,
    active: true,
    moreLinks:[
      {
        name: "Sales Order",
        link:"/sales_order",
      },
      {
        name: "Projects",
        link:"",
      },
      {
        name: "Product and Services",
        link:"",
      },
      {
        name: "Customer Payenments",
        link:"",
      },
      {
        name: "Sales Receipts",
        link:"",
      },
      {
        name: "SCredit Memos",
        link:"",
      },
    ],
    subLinks: [
      {
        name: "Leads",
        links: "/leads",
        subLinks: [
          {
            name: "Import Leads",
            link: "/import_leads",
          },
          {
            name: "Dublicate Leads",
            link: "/dublicate_lead",
          },
          {
            name: "Export Leads",
            link: "",
          },
        ],
      },
      {
        name: "Opportunities",
        links: "/opportunities",
        subLinks: [
          {
            name: "Export Opportunities",
            link: "",
          },
        ],
      },
      {
        name: "Tasks",
        links: "/tasks",
        subLinks: [
          {
            name: "Export Tasks",
            link: "",
          },
        ],
      },
      {
        name: "Calls",
        links: "/calls",
        subLinks: [
          {
            name: "Export Calls",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Sales",
    icon: <PiFileCloudLight />,
    color: "#01BCAE",
    desc: "Create beautiful customised invoices and email them to your customers to get paid fast. Get email notifications for any past-due invoice.",
    active: true,
    moreLinks:[
      {
        name: "Sales Ordaer",
        link:"/sales_order",
      },
      {
        name: "Projects",
        link:"",
      },
      {
        name: "Product and Services",
        link:"",
      },
      {
        name: "Costumer Payenments",
        link:"",
      },
      {
        name: "Sales Receipts",
        link:"",
      },
      {
        name: "Credit Memos",
        link:"",
      },
    ],
    menuLinks :[
      {
        name: "Products",
        link: "./",
      },
      {
        name: "Purchase price list",
        link: "costumer",
      },
      {
        name: "VAT Rates",
        link: "quotes",
      },
      {
        name: "Customise Category",
        link: "invoices",
      },
    ],
    subLinks: [
      {
        name: "Dashboard",
        links: "/sales",
      },
      {
        name: "Customers",
        links: "/sales/costumer",
        subLinks: [
          {
            name: "Export Customers",
            link: "",
          },
          {
            name: "DublicateCustomers Opportunities",
            link: "",
          },
          {
            name: "Export Customers",
            link: "",
          },
          {
            name: "Edit Price Fimilies",
            link: "",
          },
        ],
        
      },
      {
        name: "Quotes",
        links: "/sales/quotes",
        subLinks: [
          {
            name: "Convert Quotes to Sales Orders",
            link: "",
          },
          {
            name: "Convert Quotes to Invoices",
            link: "",
          },
          {
            name: "Export Quotes",
            link: "",
          },
          {
            name: "Export Quotes Lines",
            link: "",
          },
        ],
      },
      {
        name: "Invoices",
        links: "/sales/invoice",
        subLinks: [
          {
            name: "Convert Sales Orders to Quotes",
            link: "",
          },
          {
            name: "Convert Quotes to Invoices",
            link: "",
          },
          {
            name: "Convert Delivery Notes to Invoices",
            link: "",
          },
          {
            name: "Export Invoices",
            link: "",
          },
          {
            name: "Export Invoice Lines",
            link: "",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    name: "Purchasing",
    icon: <PiNotepad />,
    color: "#27C2FF",
    desc: `Organise your tasks to increase productivity and profit. If used with sales feature, you can use “Bill Time” to bill your projects effortlessly.`,
    active: true,
    moreLinks:[
      {
        name: "Picking Lists",
        link:"",
      },
      {
        name: "Purchase Return",
        link:"",
      },
      {
        name: "Inventory Count Sheet",
        link:"",
      },
      {
        name: "Inventory Entries",
        link:"",
      },
      {
        name: "Inventoty Withdrawals",
        link:"",
      },
    ],
    menuLinks :[
      {
        name: "Purchase Price Lists",
        link: "./",
      },
      {
        name: "Products",
        link: "costumer",
      },
      {
        name: "Vat Rates",
        link: "quotes",
      },
      {
        name: "Customise Categories",
        link: "invoices",
      },
    ],
    subLinks: [
      {
        name: "Suppliers",
        links: "/purchasing",
        subLinks: [
          {
            name: "Import Suppliers",
            link: "",
          },
          {
            name: "Dublicate Supplier",
            link: "",
          },
          {
            name: "Export Suppliers",
            link: "",
          },
        ],
      },
      {
        name: "Expenses",
        links: "/expenses",
        subLinks: [
          {
            name: "Export Expenses",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Inventory",
    icon: <BsBoxSeam />,
    color: "#FFBB44",
    desc: `Enter expenses and document them by uploading receipts. Be ready to justify any company expense at tax time.`,
    active: true,
    moreLinks:[
      {
        name: "Picking Lists",
        link:"",
      },
      {
        name: "Purchase Return",
        link:"",
      },
      {
        name: "Inventory Count Sheet",
        link:"",
      },
      {
        name: "Inventory Entries",
        link:"",
      },
      {
        name: "Inventoty Withdrawals",
        link:"",
      },
    ],
    menuLinks :[
      {
        name: "Storage Locations",
        link: "./",
      },
      {
        name: "Products",
        link: "costumer",
      },
      {
        name: "Sales Price List",
        link: "quotes",
      },
      {
        name: "Product Price List",
        link: "invoices",
      },
    ],
    subLinks: [
      {
        name: "Stock",
        links: "/inventory",
        subLinks: [
          {
            name: "Inventory Withdrawals",
            link: "",
          },
          {
            name: "Inventory Transfers",
            link: "",
          },
          {
            name: "Inventory Count Sheet",
            link: "",
          },
          {
            name: "Export Inventory On Hand",
            link: "",
          },
        ],
      },
      {
        name: "Purchase Orders",
        links: "/inventory/purchase_order", 
        subLinks: [
          {
            name: "New Purchase Order",
            link: "",
          },
          {
            name: "Export Purchase Order",
            link: "",
          },
          {
            name: "Export Purchase Order Lines",
            link: "",
          },
        ],
      },
      {
        name: "Sales Orders",
        links: "/tasks",
        subLinks: [
          {
            name: "Convert Sales Orders To Invoices",
            link: "",
          },
          {
            name: "Convert Quotes to Sales Order",
            link: "",
          },
          {
            name: "Convert Sales Orders To Delivery Notes",
            link: "",
          },
          {
            name: "Convert Sales Orders To Picking Lists",
            link: "",
          },
          {
            name: "Export Sales Order",
            link: "",
          },
          {
            name: "Export Sales Orders Lines",
            link: "",
          },
        ],
      },
      {
        name: "Receiving Notes",
        links: "/calls",
        subLinks: [
          {
            name: "Export Receiving Notes",
            link: "",
          },
          {
            name: "Export Notes Lines",
            link: "",
          },
        ],
      },
      {
        name: "Delivery Notes",
        links: "/calls",
        subLinks: [
          {
            name: "Convert Delivery Notes To Incoices",
            link: "",
          },
          {
            name: "Convert Sale Orders To Delivery Notes",
            link: "",
          },
          {
            name: "Export Delivery Notes",
            link: "",
          },
          {
            name: "Export Delivery Notes Lines",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Accounting",
    icon: <PiChartPieSlice />,
    color: "#8150E4",
    desc: `Prepare and ship customer orders on time, easily re-order products and keep tight control over your inventory levels.`,
    active: true,
  },
  {
    id: 7,
    name: "Reports",
    icon: <TbReportSearch />,
    color: "#FE586C",
    desc: `Connect OneUp to your bank to download expenses and reconcile your accounts in zero time. Worry-free accounting automatically entered while you work.`,
    active: false,
  },
  {
    id: 8,
    name: "Apps",
    icon: <PiCalculator />,
    color: "#5390F4",
    desc: `Enter expenses and document them by uploading receipts. Be ready to justify any company expense at tax time.`,
    active: true,
  },
];

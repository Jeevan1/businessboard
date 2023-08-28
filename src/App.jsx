import { useState } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Menu from "./components/menuItems/Menu";
import Sales from "./pages/sales/dashboard/Sales";
import Reports from "./pages/reports/Reports";
import Apps from "./pages/apps/Apps";
import Costumer from "./pages/sales/costumer/Costumer";
import Quotes from "./pages/sales/quotes/Quotes";
import Invoive from "./pages/sales/invoice/Invoice";
import AddCustomer from "./components/addCustomer/AddCustomer";
import AddQuotes from "./components/addQuotes/AddQuotes";
import UserProfile from "./components/userprofile/UserProfile";
import Suppliers from "./pages/suppliers/dashboard/Suppliers";
import Expenses from "./pages/suppliers/expenses/Expenses";
import ProfitAndLoss from "./pages/reports/profitAndLoss/ProfitAndLoss";
import BalanceSheet from "./pages/reports/balanceSheet/BalanceSheet";
import GeneralLedger from "./pages/reports/generalLedger/GeneralLedger";
import TrailBalance from "./pages/reports/trialBalance/TrailBalance";
import VatReport from "./pages/reports/vatReport/VatReport";
import CustomerInvoice from "./pages/sales/customerInvoice/CustomerInvoice";
import NewInvoice from "./components/newInvoice/NewInvoice";
import Stock from "./pages/inventory/stock/Stock";
import AutoInventory from "./components/autoInventory/AutoInventory";
import PurchaseOrder from "./pages/inventory/purchaseOrder/PurchaseOrder";
import PriceList from "./components/priceList/PriceList";
import CompanySetting from "./components/companySetting/CompanySetting";
import ManageUsers from "./components/manageUsers/ManageUsers";
import ManageSubscription from "./components/ManageSubscription/ManageSubscription";
import Error from "./pages/error/Error";
import Opportunities from "./pages/opportunities/opportunities/Opportunities";
import Tasks from "./pages/opportunities/tasks/Tasks";
import Calls from "./pages/opportunities/calls/Calls";
import Leads from "./pages/opportunities/leads/Leads";
import ImportLeads from "./components/importLeads/ImportLeads";
import EmployeeList from "./components/employeeList/EmployeeList";
import NewEmployee from "./components/newEmployee/NewEmployee";
import Attachments from "./components/attachments/Attachments";
import NewMemo from "./components/newMemo/NewMemo";
import ResetAccount from "./components/resetAccount/ResetAccount";
import DeleteAccount from "./components/deleteAccount/DeleteAccount";
import { useExportItemContext, useMenuContext, useMobileMenuContext } from "./components/context/Context";
import SalesOrder from "./pages/inventory/salesOrder/SalesOrder";
import NewSalesOrder from "./components/newSalesOrder/NewSalesOrder";
import RecevingNotes from "./pages/inventory/recevingNotes/RecevingNotes";
import NewReceivingNotes from "./components/NewReceivingNotes/NewReceivingNotes";
import NewDeliveryNotes from "./components/newDeliveryNotes/NewDeliveryNotes";
import DeliveryNotes from "./pages/inventory/deliveryNotes/DeliveryNotes";
import AddLead from "./components/addLead/AddLead";
import DublicateLeads from "./components/dublicateLeads/DublicateLeads";
import ExportItems from "./components/exportItems/ExportItems";
import NewOpportunity from "./components/newOpportunity/NewOpportumity";
import NewTasks from "./components/newTasks/NewTasks";
import NewCalls from "./components/newCalls/NewCalls";
import VatRates from "./pages/sales/vatRates/VatRates";
import PayenmentTerms from "./pages/sales/payenmentTerms/PayenmentTerms";
import Payenment from "./pages/sales/payenments/Payenment";
import SalesReceipts from "./pages/sales/salesReceipt/SalesReceipts";
import CreditMemo from "./pages/sales/creditMemo/CreditMemo";
import Projects from "./pages/sales/Projects/Projects";
import ProductService from "./pages/sales/productService/ProductService";
import ProductsAndServices from "./components/newProductsAndServices/ProductsAndServices";
import AddSupplier from "./components/addSupplier/AddSupplier";
import Accounting from "./pages/accounting/Accounting";
import BankAccount from "./pages/accounting/bankAccount/BankAccount";
import MobileMenu from "./components/menuItems/MobileMenu";


const ShowName = {
  gridTemplateColumns:' 200px 1fr',
}

const HideName = {
  gridTemplateColumns:' 75px 1fr',
}

function App() {
  const [exportItem,setExportItem] = useExportItemContext();
  // const [state] = useMenuContext();
  const [menuname,setMenuName] = useMenuContext();
  const [mobileMenu,setMobileMenu] = useMobileMenuContext();
  const Layout = () => {
    return (
      <div className="app" style={menuname?ShowName:HideName}>
        <Navbar menuname={menuname} setMenuName = {setMenuName}/>
        <Menu menuname={menuname} setMenuName = {setMenuName}/>
        <MobileMenu mobileMenu={mobileMenu} setMobileMenu = {setMobileMenu}/>
        <div className="main__body d-flex position-relative">
          <Outlet />
        </div>
        { exportItem.state && <ExportItems />}  
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/#home",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/opportunities",
          element: <Opportunities />,
        },
        {
          path: "/tasks",
          element: <Tasks />,
        },
        {
          path: "/attachment",
          element: <Attachments />,
        },
        {
          path: "/calls",
          element: <Calls />,
        },
        {
          path: "/leads",
          element: <Leads />,
        },
        {
          path: "/sales",
          element: <Sales />,
        },
        {
          path: "/sales/costumer",
          element: <Costumer />,
        },
        {
          path: "/sales/quotes",
          element: <Quotes />,
        },
        {
          path: "/sales/invoice",
          element: <Invoive />,
        },
        {
          path: "/vat_rates",
          element: <VatRates />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/product_service",
          element: <ProductService />,
        },
        {
          path: "/payenment_terms",
          element: <PayenmentTerms />,
        },
        {
          path: "/customer_payenment",
          element: <Payenment />,
        },
        {
          path: "/sales_receipts",
          element: <SalesReceipts />,
        },
        {
          path: "/credit_memo",
          element: <CreditMemo />,
        },
        {
          path: "/apps",
          element: <Apps />,
        },

        {
          path: "/purchasing",
          element: <Suppliers />,
        },
        {
          path: "/inventory/purchase_order",
          element: <PurchaseOrder />,
        },
        {
          path: "/inventory",
          element: <Stock />,
        },
        {
          path: "/accounting",
          element: <Accounting />,
        },
        {
          path: "/bank_account",
          element: <BankAccount />,
        },
        {
          path: "/sales_order",
          element: <SalesOrder />,
        },
        {
          path: "/receiving_notes",
          element: <RecevingNotes />,
        },
        {
          path: "/delivery_notes",
          element: <DeliveryNotes />,
        },
        {
          path: "/expenses",
          element: <Expenses />,
        },
        {
          path: "/manage_users",
          element: <ManageUsers />,
        },
        {
          path: "/manage_subscription",
          element: <ManageSubscription />,
        },
        {
          path: "/employee_list",
          element: <EmployeeList />,
        },
        {
          path: "/user_settings",
          element: <UserProfile />,
        },

        {
          path: "/reports" || "/#reports",
          element: <Reports />,
        },
        // {
        //   path: "*",
        //   element: <Error />,
        // },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/company_setting",
      element: <CompanySetting />,
    },
    {
      path: "new/lead",
      element: <AddLead />,
    },
    {
      path: "dublicate_lead",
      element: <DublicateLeads />,
    },
    {
      path: "opportunity/new",
      element: <NewOpportunity />,
    },
    {
      path: "tasks/new",
      element: <NewTasks />,
    },
    {
      path: "calls/new",
      element: <NewCalls />,
    },
    {
      path: "/new/costumer",
      element: <AddCustomer />,
    },
    {
      path: "/new/supplier",
      element: <AddSupplier />,
    },
    {
      path: "/new/product_services",
      element: <ProductsAndServices />,
    },
    {
      path: "/new/invoice",
      element: <NewInvoice />,
    },
    {
      path: "/new/quotes",
      element: <AddQuotes />,
    },
    {
      path: "/employee/new",
      element: <NewEmployee />,
    },
    {
      path: "/credit_memo/new",
      element: <NewMemo />,
    },
    {
      path: "/new/sales_order",
      element: <NewSalesOrder />,
    },
    {
      path: "/new/receiving_notes",
      element: <NewReceivingNotes />,
    },
    {
      path: "/new/delivery_notes",
      element: <NewDeliveryNotes />,
    },
    {
      path: "/new/delivery_notes",
      element: <NewSalesOrder />,
    },
    {
      path: "/price_list",
      element: <PriceList />,
    },
    
    {
      path: "/automatic_inventory",
      element: <AutoInventory />,
    },
    {
      path: "/profit_loss",
      element: <ProfitAndLoss />,
    },
    {
      path: "/balance_sheet",
      element: <BalanceSheet />,
    },
    {
      path: "/general_ledger",
      element: <GeneralLedger />,
    },
    {
      path: "/trail_balance",
      element: <TrailBalance />,
    },
    {
      path: "/vat_report",
      element: <VatReport />,
    },
    {
      path: "/customer_invoice",
      element: <CustomerInvoice />,
    },
    {
      path: "/import_leads",
      element: <ImportLeads />,
    },
    {
      path: "/reset_account",
      element: <ResetAccount />,
    },
    {
      path: "/delete_account",
      element: <DeleteAccount />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

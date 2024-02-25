import CustomerActions from "../features/customers/CustomerActions";
import PageNav from "./PageNav";

function CustomerPage() {
  return (
    <main>
      <PageNav />
      <CustomerActions />
    </main>
  );
}

export default CustomerPage;

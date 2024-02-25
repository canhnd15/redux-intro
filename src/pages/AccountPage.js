import AccountOperations from "../features/accounts/AccountOperations";
import BalanceDisplay from "../features/accounts/BalanceDisplay";
import Customer from "../features/customers/Customer";
import PageNav from "./PageNav";

function AccountPage() {
  return (
    <main>
      <PageNav />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </main>
  );
}

export default AccountPage;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create } from "./customerSlide";

function CustomerActions() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const [updatedFullName, setUpdatedFullName] = useState("");
  const [updatedNationalId, setUpdatedNationalId] = useState("");

  const customer = useSelector((store) => store.customer);
  const dispatch = useDispatch(create());

  function handleCreate() {
    if (!fullName || !nationalId) return;
    dispatch({
      type: "customer/create",
      payload: {
        fullName: fullName,
        nationalID: nationalId,
      },
    });
    setFullName("");
    setNationalId("");
  }

  function handleUpdate() {
    if (!updatedFullName || !updatedNationalId) return;
    dispatch({
      type: "customer/update",
      payload: {
        fullName: updatedFullName,
        nationalID: updatedNationalId,
      },
    });
    setUpdatedFullName("");
    setUpdatedNationalId("");
  }

  return (
    <>
      {!customer.fullName ? (
        <div>
          <h2>Create new customer</h2>
          <div className="inputs">
            <div>
              <label>Customer full name</label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <label>National ID</label>
              <input
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
              />
            </div>
            <button onClick={handleCreate}>Create new customer</button>
          </div>
        </div>
      ) : (
        <div>
          <h3>Fullname: {customer.fullName}</h3>
          <h3>NationID: {customer.nationalID}</h3>
          <div className="inputs">
            <div>
              <label>Customer full name</label>
              <input
                value={updatedFullName}
                onChange={(e) => setUpdatedFullName(e.target.value)}
              />
            </div>
            <div>
              <label>National ID</label>
              <input
                value={updatedNationalId}
                onChange={(e) => setUpdatedNationalId(e.target.value)}
              />
            </div>
            <button onClick={handleUpdate}>Update customer</button>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomerActions;

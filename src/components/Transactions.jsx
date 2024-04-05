import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL,API_KEY } from "../components/util/Constant";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
} from "@react-pdf/renderer";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = sessionStorage.getItem("users")
      ? JSON.parse(sessionStorage.getItem("users")).id
      : null;

    if (userId) {
      const fetchTransactions = async () => {
        try {
          const response = await axios.post(API_URL, {
            action: "get_transactions",
            key: API_KEY,
            user_id: userId,
          });
          setTransactions(response.data.data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };

      fetchTransactions();
    } else {
      setLoading(false);
      setError(new Error("User ID not found in session storage"));
    }
  }, []);

  const renderTableRow = (transaction) => (
    <tr key={transaction.order_id} className="border-b border-gray-200">
      <td className="px-4 py-2">{transaction.order_id}</td>
      <td className="px-4 py-2">{transaction.txn_id}</td>
      <td className="px-4 py-2">{transaction.txn_amount}</td>
      <td className="px-4 py-2">{transaction.status}</td>
      <td className="px-4 py-2">{transaction.created_at}</td>
      <td className="px-4 py-2">
        <PDFDownloadLink
          document={<BillDocument transaction={transaction} />}
          fileName={`transaction_${transaction.order_id}.pdf`}
        >
          {({ blob, url, loading, error }) => (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {loading ? "Loading document..." : "Download"}
            </button>
          )}
        </PDFDownloadLink>
      </td>
    </tr>
  );

  const renderTable = () => (
    <table className="w-full table-auto border-collapse border border-primarySky shadow-md">
      <thead>
        <tr className="bg-primaryBlue text-white font-semibold">
          <th className="px-4 py-2">Order ID</th>
          <th className="px-4 py-2">Transaction ID</th>
          <th className="px-4 py-2">Amount</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Created At</th>
          <th className="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>{transactions.map(renderTableRow)}</tbody>
    </table>
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-[80%] mx-auto px-4 py-8 mt-20 overflow-x-auto">
      {renderTable()}
    </div>
  );
};

const BillDocument = ({ transaction }) => (
  <Document>
    <Page size="A4">
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
          Transaction Details
        </Text>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>Order ID:</Text>
          <Text>{transaction.order_id}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Transaction ID:
          </Text>
          <Text>{transaction.txn_id}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>Amount:</Text>
          <Text>{transaction.txn_amount}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>Status:</Text>
          <Text>{transaction.status}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Created At:
          </Text>
          <Text>{transaction.created_at}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Transactions;

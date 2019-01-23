import React from "react";
import AdminLayout from "../../Hoc/AdminLayout";
import Layout from "../../Hoc/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <AdminLayout>
        <div className="user_dashboard">
          <div>This is your dashboard.</div>
        </div>
      </AdminLayout>
    </Layout>
  );
};

export default Dashboard;

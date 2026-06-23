// App.jsx
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";

import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import AddFunds from "./pages/AddFunds";
import Rewards from "./pages/Reward";
import TransactionPage from "./pages/Transaction";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import MyProfile from "./pages/MyProfile";

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Send Money */}
        <Route
          path="/send-money"
          element={
            <ProtectedRoute>
              <Layout
                showBackButton={true}
                showQuickActions={true}
              >
                <SendMoney />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Layout
                title="My Profile"
                subtitle="Manage your account settings"
                showBackButton={true}
                showQuickActions={true}
              >
                <MyProfile />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Add Funds */}
        <Route
          path="/add-funds"
          element={
            <ProtectedRoute>
              <Layout
                showBackButton={true}
                showQuickActions={true}
              >
                <AddFunds />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Rewards */}
        <Route
          path="/rewards"
          element={
            <ProtectedRoute>
              <Layout
                showBackButton={true}
                showQuickActions={true}
              >
                <Rewards />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Transactions */}
        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <Layout
                showBackButton={true}
                showQuickActions={true}
              >
                <TransactionPage />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
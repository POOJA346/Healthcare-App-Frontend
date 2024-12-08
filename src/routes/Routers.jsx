import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/doctor-account/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import CheckoutSuccess from "../pages/Doctors/CheckoutSuccess";
import Lab from "../pages/VirtualLab/Lab";
import DiabetesPredictionForm from "../pages/VirtualLab/Component/DiabetesPredictionForm";
import LiverPredictionForm from "../pages/VirtualLab/Component/LiverPredictionForm";
import HepetitisPredictorForm from "../pages/VirtualLab/Component/HepetitisPredictorForm";
import HeartPredictionForm from "../pages/VirtualLab/Component/HeartPredictorForm";
import LungsPredictionForm from "../pages/VirtualLab/Component/LungsPredictorForm";
import KidneyPredictionForm from "../pages/VirtualLab/Component/KidneyPredictorForm";
import PaymentSuccess from "../components/paymentSuccess";
import AppointmentDetails from "../pages/AppointmentDetails";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
      <Route path="/appointment/:id" element={<AppointmentDetails/>}/>
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/labs"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <Lab />
          </ProtectedRoute>
        }
      />
      <Route
        path="/lab/diabetes-lab"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <DiabetesPredictionForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/lab/liver-lab"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <LiverPredictionForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/lab/hepatitis-lab"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <HepetitisPredictorForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/lab/heart-lab"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <HeartPredictionForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/lab/lungs-lab"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <LungsPredictionForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/lab/kidney-lab"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <KidneyPredictionForm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/success"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <PaymentSuccess />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routers;

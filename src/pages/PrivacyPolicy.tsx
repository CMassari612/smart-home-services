import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card className="glass border border-white/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">Our Privacy Commitment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-slate-700 dark:text-slate-300">
              <p>
                At Star Network Solutions, we respect your privacy. Any information you share through our website—such as your name, email, or phone number—is used only to respond to your inquiries and provide requested services. We do not sell or share your personal data with third parties. All information is stored securely and only for as long as necessary to serve your needs.
              </p>
              
              <p>
                For questions about our privacy practices, contact support@starnetworksolution.com.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


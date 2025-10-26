import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function CookiePolicy() {
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
              Cookie Policy
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card className="glass border border-white/20 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">Cookie Usage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-slate-700 dark:text-slate-300">
              <p>
                Our website uses basic cookies to enhance functionality and analyze site performance. These cookies help us understand traffic patterns and improve your browsing experience. You can disable cookies in your browser settings at any time, but some parts of the site may not function properly.
              </p>
              
              <p>
                By continuing to use our website, you consent to our use of cookies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


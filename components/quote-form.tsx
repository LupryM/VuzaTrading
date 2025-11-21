"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

// Define a type for our form data for better type-safety
type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function QuoteForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const formSubmitEmail =
      process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL;

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null); // Reset error on new submission

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${formSubmitEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Quote Request from Vuza Trading!",
        }),
      });

      if (response.ok) {
        setSubmissionSuccess(true); // Set success state to true
        setFormData(initialFormData); // Optional: Still reset form data in the background
      } else {
        throw new Error("Something went wrong on the server.");
      }
    } catch (error) {
      console.error(error);
      setSubmissionError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section
          id="quote"
          className="border-b border-border bg-muted/20 py-20 lg:py-32"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">
                  Request a Free Quote
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {submissionSuccess
                      ? "We have received your request."
                      : "Tell us about your project and we'll provide a detailed quote within 24 hours."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submissionSuccess ? (
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-foreground">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        Your quote request has been sent successfully. We will get
                        back to you shortly.
                      </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Optional: Disable captcha for development, but enable for production */}
                      {/* <input type="hidden" name="_captcha" value="false" /> */}

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                              id="name"
                              name="name"
                              required
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={handleChange}
                              disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              required
                              placeholder="+1 (555) 000-0000"
                              value={formData.phone}
                              onChange={handleChange}
                              disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Needed</Label>
                          <select
                              id="service"
                              name="service"
                              required
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                              value={formData.service}
                              onChange={handleChange}
                              disabled={isSubmitting}
                          >
                            <option value="">Select a service</option>
                            <option value="aluminium">Aluminium Fabrication</option>
                            <option value="cctv">CCTV Installation</option>
                            <option value="fencing">Electric Fencing</option>
                            <option value="alarm">Alarm Systems</option>
                            <option value="intercom">Intercom Systems</option>
                            <option value="complete">
                              Complete Security Package
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Project Details</Label>
                        <Textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Please describe your project requirements..."
                            className="min-h-32"
                            value={formData.message}
                            onChange={handleChange}
                            disabled={isSubmitting}
                        />
                      </div>

                      {submissionError && (
                          <p className="text-sm text-destructive">
                            {submissionError}
                          </p>
                      )}

                      <Button
                          type="submit"
                          className="w-full"
                          disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Submitting...
                            </>
                        ) : (
                            "Submit Quote Request"
                        )}
                      </Button>
                    </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  );
}

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export default function Contacts() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Contact & Enquiry
          </h2>
          <p className="text-gray-600 mt-2">
            Start your aviation career with us. Send your enquiry today.
          </p>
        </div>

        {/* Form Card */}
        <Card>
          <CardContent className="p-8">
            <form className="grid md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <Input placeholder="Full Name" />

              {/* Email */}
              <Input type="email" placeholder="Email Address" />

              {/* Phone */}
              <Input placeholder="Phone Number" />

              {/* Course */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cabin-crew">
                    Cabin Crew Training
                  </SelectItem>
                  <SelectItem value="ground-staff">
                    Ground Staff Training
                  </SelectItem>
                  <SelectItem value="aviation-management">
                    Aviation Management
                  </SelectItem>
                </SelectContent>
              </Select>

              {/* Message */}
              <Textarea
                placeholder="Your Message"
                className="md:col-span-2"
                rows={5}
              />

              {/* Submit Button */}
              <div className="md:col-span-2 text-center">
                <Button className="bg-green-600 hover:bg-green-700 px-10">
                  Submit Enquiry
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

      </div>
    </section>
  )
}

{/*

"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobile, setMobile] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const address = `Borjhar, Guwahati, Assam 781015`;
  const phone = `+91 98362 57030`;
  const officeEmail = `assakaaviation@gmail.com`;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (honeypot) return; // likely spam

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please complete all fields.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMobile("");
        setMessage("");
      } else if (res.status === 404) {
        const mailto = `mailto:info@example.com?subject=${encodeURIComponent(
          "Website contact: " + name
        )}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
        window.location.href = mailto;
        setStatus("idle");
      } else {
        const text = await res.text();
        setError(text || "Failed to send message.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section className="relative py-20 bg-[url('/hero-banner.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">

      <div className="absolute inset-0 bg-black/30 z-0" aria-hidden />

      <div className="relative z-10 px-6 max-w-4xl ml-6">
      <h2 className="text-2xl font-semibold mb-4">Contact Admissions</h2>
      <p className="text-sm text-slate-600 mb-6">
        Have questions about the Launch Your Career in Aviation program? Send us
        a message and we'll get back within 48 hours.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="grid gap-4">
          
          <label className="hidden" aria-hidden>
            Do not fill
            <Input
              name="phone"
              value={honeypot}
              onChange={(e) =>
                setHoneypot((e.target as HTMLInputElement).value)
              }
              tabIndex={-1}
              autoComplete="off"
            />
          </label>

          <div>
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName((e.target as HTMLInputElement).value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="mobile">Mobile</Label>
            <Input
              id="mobile"
              type="tel"
              value={mobile}
              onChange={(e) => setMobile((e.target as HTMLInputElement).value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="course">Course</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cabin-crew">Cabin Crew Training</SelectItem>
                <SelectItem value="ground-staff">
                  Ground Staff Training
                </SelectItem>
                <SelectItem value="aviation-management">
                  Aviation Management
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) =>
                setMessage((e.target as HTMLTextAreaElement).value)
              }
              required
              rows={6}
              className="mt-1"
            />
          </div>

          <div className="flex items-center gap-3">
            <Button
              type="submit"
              variant="default"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>

            <button
              type="button"
              onClick={() => {
                setName("");
                setEmail("");
                setMessage("");
                setError(null);
                setStatus("idle");
              }}
              className="text-sm text-slate-600 hover:underline"
            >
              Reset
            </button>
          </div>

          <div aria-live="polite" className="min-h-[1.25rem]">
            {status === "success" && (
              <p className="text-sm text-green-600">
                Message sent — we'll be in touch soon.
              </p>
            )}
            {status === "error" && error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
            {error && status === "idle" && (
              <p className="text-sm text-red-600">{error}</p>
            )}
          </div>
        </form>

        
        <aside className="rounded-md border p-4 bg-slate-50">
          <h3 className="text-lg font-medium">Our Campus</h3>
          <p className="mt-2 text-sm text-slate-700">{address}</p>

          <div className="mt-3 text-sm text-slate-700">
            <div>
              <strong>Phone:</strong>{" "}
              <a
                href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                className="text-indigo-600 hover:underline"
              >
                {phone}
              </a>
            </div>
            <div className="mt-1">
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${officeEmail}`}
                className="text-indigo-600 hover:underline"
              >
                {officeEmail}
              </a>
            </div>
            <div className="mt-1">
              <strong>Hours:</strong> Mon–Fri, 9:00 AM – 5:00 PM
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-md border">
            <iframe
              title="Campus location"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14330.657236806755!2d91.56961196766841!3d26.109874584154582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a41474b8a9197%3A0x495b03a3f040ce31!2sSoniadi%2C%20Assam%20781015!5e0!3m2!1sen!2sin!4v1768394333887!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`}
              width="100%"
              height="260"
              className="block border-0"
              loading="lazy"
            />
          </div>
        </aside>
      </div>
      </div>
    </section>
  );
}


*/}
# DEVLY - Delivery Rider Registration & Onboarding Platform

A modern, responsive, high-converting Rider Registration and Onboarding Platform for **DEVLY Delivery Service**.

---

## Overview

DEVLY Rider Platform provides a complete end-to-end recruitment and onboarding portal for delivery partners:
- **Landing Page (index.html)**: Interactive earning slabs, Rs 5 Lakh insurance overview, weekly payout highlights, and clear onboarding CTA.
- **Rider Registration Application (egister.html)**: Comprehensive 16-field multi-section form with client-side document uploads, live preview, duplicate prevention, and legal consent agreements.
- **Admin Verification Console (dmin.html)**: Private, secure management portal for applicant screening, document review, and full Excel data export (.xlsx).

---

## Features & Architecture

### 1. Rider Registration Form (egister.html)
- **16 Required Application Fields**:
  1. Full Name
  2. Mobile Number (10-digit validation)
  3. Email Address
  4. Date of Birth (Age 18+ validation)
  5. Gender
  6. Current Street Address
  7. City
  8. State
  9. PIN Code (6-digit validation)
  10. Emergency Contact Details (Name, Relationship, Phone Number)
  11. Profile Photo (Live image preview with camera capture/upload)
  12. Government ID Details (Aadhaar / PAN / Voter ID with document upload & preview)
  13. Driving Licence Details (DL Number, Expiry Date & document upload)
  14. Vehicle Details (Type: Bike/Scooter/EV/Cycle, Ownership, Model)
  15. Vehicle Registration (RC Number & document upload)
  16. Languages Known (Interactive multi-select pills)

- **Data Privacy & Legal Compliance**:
  - Declaration of Truth checkbox.
  - DEVLY Partner Terms of Service & Privacy Policy consent.
  - Interactive modal dialog explaining data usage and contractor terms.

- **Duplicate Application Prevention**:
  - Automatic duplicate screening against existing applications by Mobile, Email, Government ID, Driving Licence, and Vehicle Plate.
  - Clear user alert if an existing active application is detected.

- **Post-Submission Confirmation**:
  - Instant Application ID generation (DEVLY-YYYYMMDD-XXXX).
  - Clear message: Our team will contact you soon! (within 24-48 hours via Call/WhatsApp).
  - 4-step onboarding timeline visualization.

---

### 2. Admin Management Desk (dmin.html)
- **Real-Time Dashboard**: Metrics for Total Applications, Approved Riders, In Review, and EV Fleet.
- **Live Search & Filter**: Search by Name, Mobile, City, Vehicle, or Application ID.
- **Applicant Dossier Modal**: Comprehensive review modal displaying all applicant details and uploaded ID cards/documents.
- **Master Excel Export (.xlsx)**: One-click download of all rider applications with full 28-column structured data for HR and fleet operations using SheetJS.

---

### 3. Complete Brand Isolation
- Completely standalone and independent branding.
- Zero external legacy dependencies.

---

## Project Structure

`
DEVLY/
├── index.html        # Public Landing Page & Rider Recruitment CTA
├── register.html     # 16-Field Rider Registration Form + Legal Consent + Duplicate Guard
├── admin.html        # Secure Admin Dashboard & Excel (.xlsx) Exporter
├── favicon.svg       # DEVLY Brand SVG Icon
└── README.md         # Project Documentation & Architecture
`

---

## Getting Started

1. Clone or download the repository:
   `ash
   git clone https://github.com/Ankitjangam/DEVLY.git
   cd DEVLY
   `

2. Open in any modern web browser or deploy directly to GitHub Pages / Vercel / Netlify:
   - **Landing Page**: Open index.html
   - **Registration**: Open egister.html
   - **Admin Portal**: Open dmin.html

---

## License

Proprietary and Confidential - DEVLY Delivery Service.

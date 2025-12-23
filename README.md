care-xyz/
│
├── app/
│   ├── layout.js                 # Root layout (Navbar + Footer)
│   ├── page.js                   # Home page
│   ├── loading.js                # Global loading
│   ├── not-found.js              # 404 page
│
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.js
│   │   ├── register/
│   │   │   └── page.js
│
│   ├── services/
│   │   ├── page.js               # All services overview
│   │   └── [service_id]/
│   │       └── page.js           # Service detail page
│
│   ├── booking/
│   │   └── [service_id]/
│   │       └── page.js           # Booking page (Private)
│
│   ├── my-bookings/
│   │   └── page.js               # My bookings (Private)
│
│   ├── dashboard/                # (Optional Admin)
│   │   ├── page.js
│   │   ├── payments/
│   │   │   └── page.js
│   │   └── bookings/
│   │       └── page.js
│
│   └── api/
│       ├── auth/
│       │   └── route.js
│       ├── services/
│       │   └── route.js
│       ├── bookings/
│       │   └── route.js
│       ├── payment/
│       │   └── route.js
│       └── email/
│           └── route.js
│
├── components/
│   ├── shared/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Loader.jsx
│   │
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── Testimonials.jsx
│   │
│   ├── service/
│   │   ├── ServiceCard.jsx
│   │   └── ServiceDetails.jsx
│   │
│   ├── booking/
│   │   ├── DurationSelector.jsx
│   │   ├── LocationForm.jsx
│   │   └── CostSummary.jsx
│   │
│   └── booking-list/
│       └── BookingCard.jsx
│
├── hooks/
│   ├── useAuth.js
│   ├── usePrivateRoute.js
│   └── useAxiosSecure.js
│
├── lib/
│   ├── firebase.js
│   ├── mongodb.js
│   ├── stripe.js
│   └── mailer.js
│
├── models/
│   ├── User.js
│   ├── Service.js
│   ├── Booking.js
│   └── Payment.js
│
├── utils/
│   ├── costCalculator.js
│   ├── locationData.js
│   └── validators.js
│
├── middleware.js                # Route protection
│
├── public/
│   ├── images/
│   └── icons/
│
├── styles/
│   └── globals.css
│
├── .env.local
├── next.config.js
├── package.json
└── README.md

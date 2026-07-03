# MeetingRm
# Meeting Room Booking System

A frontend-only Meeting Room Booking System built using React.js, React Router, Tailwind CSS, and Local Storage.

The application allows users to manage meeting room bookings with authentication, validation, search, filtering, sorting, and pagination.

---

## Features

### Authentication
- Dummy login authentication
- Protected routes
- Session stored in Local Storage
- Logout functionality

### Dashboard
- Total Rooms
- Today's Bookings
- Available Rooms
- Upcoming Meetings

### Meeting Rooms
- View all meeting rooms
- Book Now
- View Schedule

### Booking Management
- Create Booking
- View Booking
- Edit Booking
- Delete Booking

### Validation
- Required fields
- Valid email
- End time must be greater than start time
- Past dates are not allowed
- Prevent overlapping bookings for the same room

### Additional Features
- Search bookings
- Filter by room, date, and status
- Sort by room, date, and time
- Pagination (10 records per page)
- Responsive design

---

## Tech Stack

- React.js
- React Router DOM
- JavaScript (ES6+)
- Tailwind CSS
- Local Storage

---

## Folder Structure

src/
│
components/
pages/
services/
utils/
data/
App.jsx/

---

## Installation

Clone the repository

```bash
git clone https://github.com/yourusername/meeting-room-booking-system.git
```

Go to the project folder

```bash
cd meeting-room-booking-system
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

---

## Login Credentials

Email
```
admin@test.com
```
Password
```
123456
```
---

## Project Workflow
Login
↓
Dashboard
↓
Meeting Rooms
↓
Book Meeting
↓
Booking List
↓
Booking Details
↓
Edit / Delete Booking
---
## Local Storage Data
The application stores data using Local Storage.

Keys used:

- rooms
- bookings
- user
- isLoggedIn

---

## Screenshots

### Login


### Dashboard

(Add screenshot)

### Rooms

(Add screenshot)

### Book Meeting

(Add screenshot)

### Booking List

(Add screenshot)

### Booking Details

(Add screenshot)

---

## Future Improvements

- Backend Integration
- User Roles
- Email Notifications
- Calendar View
- Export Bookings to PDF/Excel

---

## Author
Roshni Lakhani
GitHub - RoshniLakhani573/MeetingRm

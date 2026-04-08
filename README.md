# Codence Job Portal

This is a full-stack job portal built using MERN stack.

## Progress

- Day 1: Backend setup
- Day 2: Connected backend to MongoDB

## Day 3: Database Models Design

On Day 3, I designed and implemented the core database models for the Codence Job Portal using MongoDB and Mongoose.

### ✅ Models Created

#### 👤 User Model
- Stores user profile information
- Supports multiple roles (candidate, recruiter, admin)
- Includes:
  - Basic details (name, email, phone, place, DOB)
  - Skills, experience, and projects
  - Social links
  - Profile picture and resume
- Uses timestamps for tracking creation and updates

#### 💼 Job Model
- Stores job posting details
- Includes:
  - Job title, department, location
  - Employment type and experience level
  - Responsibilities and requirements
  - Salary structure (min, max, currency)
  - Visibility and application email
- Linked to recruiter (User model)

#### 🧪 Interview Template Model
- Defines interview process for each job
- Includes:
  - Multiple rounds (MCQ / Live Coding)
  - Slot duration and timezone
  - Active status and visibility
- Linked to Job and User (creator)

#### 📄 Application Model
- Tracks candidate applications
- Includes:
  - Job and candidate references
  - Application status and stage
  - Score and priority
  - Attachments (resume, files)
  - Timeline fields (applied, shortlisted, interview, decision)

---

### 🔗 Relationships

- A **User** can apply for multiple jobs
- A **Job** is posted by a recruiter (User)
- An **Application** connects User and Job
- An **Interview Template** is linked to a Job

---

### 🚀 Key Highlights

- Implemented real-world scalable schema design
- Used Mongoose references for relationships
- Applied enums for controlled data (status, roles, priority)
- Structured nested data (experience, projects, rounds)
- Enabled timestamps for all models

---

### 📌 Tech Used
- Node.js
- Express.js
- MongoDB
- Mongoose
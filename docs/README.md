# BrewSplit
BrewSplit is a web application for managing and tracking shared group expenses.
## Features
* User Login Page
* Dashboard displaying expense groups
* Group Details Page
* CSV Expense Import
* Anomaly Detection during CSV import
* Import Report Generation

## Tech Stack
### Frontend
* React
* TypeScript
* React Router DOM
* Vite
### Backend
* Node.js
* Express.js
* Multer
* CSV Parser
## Setup Instructions
### Backend
```
cd backend
npm install
npm run dev
```
### Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on:
http://localhost:5173
Backend runs on:
http://localhost:5000

## AI Tools Used
* ChatGPT
* 
# SCOPE

## CSV Anomalies Detected

### Row 12

Issue:

* Missing Payer

Action Taken:

* Flagged as anomaly in Import Report

### Row 25

Issue:

* Negative Amount Found

Action Taken:

* Flagged as anomaly in Import Report

## Database Schema (Planned)

Users

* id
* name
* email

Groups

* id
* group_name

Expenses

* id
* description
* amount
* paid_by
* group_id

ImportReports

* id
* anomaly
* row_number
* action_taken

# DECISIONS

## Decision 1

Problem:

* Need a frontend framework

Options:

* React
* Angular
* Vue

Selected:

* React

Reason:

* Fast development and simple routing.

## Decision 2

Problem:

* CSV Upload Handling

Options:

* Manual parsing
* CSV Parser package

Selected:

* CSV Parser package

Reason:

* Reliable and easy integration.

## Decision 3

Problem:

* File Upload Middleware

Options:

* Custom upload handling
* Multer

Selected:

* Multer

Reason:

* Standard Express middleware for file uploads.

## Decision 4

Problem:

* Routing

Options:

* Single page
* React Router

Selected:

* React Router

Reason:

* Better navigation between pages.

# AI_USAGE

## AI Tool Used

* ChatGPT
## How AI Was Used

* Project structure guidance
* Express route creation
* React page creation
* CSV import workflow guidance
* Git and GitHub setup assistance

## Example Prompts

1. How to create Express routes?
2. How to upload CSV files using Multer?
3. How to create React Router pages?
4. How to push a project to GitHub?

## Cases Where AI Was Wrong

### Case 1

Issue:

* Route structure generated incorrectly.

How It Was Caught:

* Application returned route errors.

Fix:

* Corrected route imports and exports.

### Case 2

Issue:

* Import controller had syntax issues.

How It Was Caught:

* Node.js threw syntax errors.

Fix:

* Corrected missing brackets and function structure.

### Case 3

Issue:

* Git push process failed because remote repository already contained files.

How It Was Caught:

* Git returned non-fast-forward errors.

Fix:

* Used force push after verifying repository contents.

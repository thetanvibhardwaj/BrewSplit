# SCOPE.md

## Project Scope

Build a shared expense application capable of:

* User authentication
* Group management
* Expense management
* Balance calculations
* Debt settlements
* CSV import
* Anomaly detection

## Known Anomalies

1. Duplicate expenses
2. Missing payer
3. Missing currency
4. Negative amounts
5. Ambiguous dates
6. Settlement recorded as expense
7. Membership mismatch
8. Inconsistent user names
9. Zero amount expenses
10. Invalid split information

## Handling Strategy

All anomalies will be:

* Detected
* Logged
* Shown to the user
* Included in the import report
## Database Schema

### Users

* id
* name
* email
* password

### Groups

* id
* name

### Memberships

* id
* user_id
* group_id
* joined_at
* left_at

### Expenses

* id
* title
* amount
* currency
* date
* payer_id
* group_id

### ExpenseSplits

* id
* expense_id
* user_id
* amount

### Settlements

* id
* payer_id
* receiver_id
* amount
* date

### ImportLogs

* id
* file_name
* import_date

### Anomalies

* id
* expense_id
* type
* description
* status

# School Management System

This is a simple School Management System built using Node.js and MySQL. It provides functionality for adding schools to a database, calculating distances between user locations and schools, and fetching a list of schools sorted by proximity.

## Features

- Add schools to the database with their name, address, latitude, and longitude.
- Calculate and return the distance between a user's location and schools.
- List all schools sorted by proximity to a given latitude and longitude.

## API Endpoints

| **Endpoint**        | **Method** | **Description**                             |
|---------------------|------------|---------------------------------------------|
| `/addSchool`        | `POST`     | Adds a new school if not already present.   |
| `/listSchools`      | `POST`     | Lists schools sorted by proximity.          |


## Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Before you start, ensure you have the following installed:

- **Node.js** 
- **MySQL** or another database system (ensure your database is set up and running)

### Clone the Repository

  ```bash
  git clone https://github.com/Arpreetkhare/school-management.git
  cd school-management

```
### Run the Application 

  ```bash
  npm start



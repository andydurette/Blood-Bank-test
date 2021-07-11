# Book Giving Blood Test Application
Test for University of Junior Application Developer at logicalDox

MERN stack application that add users to a nosql mongo database using the google oath passport strategy and allows them to book or cancel blood giving appointments.

The front end is unfinished aside from creating and account however the backend operations have been developed and can be used in a local environment.

This is accomplished using REST to complete CRUD operations to view and modify data.


## Technical Requirements:

In the project directory, you can run:

**Requirement 1**
 There should be 2 types of users that can log into the application: Public Users and Admin Users.

**Requirement 1 Completion:** Success
Depending on the email after the @example.com if it is either a public or admin account. If @instructors.2u.com it will be admin for this example Ed has such an account and will be able to see the difference in pages sign in with one of these accounts. That said I didn't implement checking if an account was an admin account or not when implementing queries as it would have taken more and required a more finished front end.

**Requirement 2**
As any User I should be able to log into my account with an email address and password that will have my account specific information.

**Requirement 2 Completion:** Partial Success

The requirements above of name, email address and password are all handled through googleoath.
Partial success as I did it through oath which was not the method asked for.

**Requirement 3**
 As a Public User I should be able to register an account by providing a name, email address and password.

**Requirement 3 Completion:** Partial Success

The requirements above of name, email address and password are all handled through googleoath.
Partial success as I did it through oath which was not the method asked for.

**Requirement 4 & 5** 
As a Public User I should be able to schedule an appointment to donate blood at a location of my choice selected from a list of available dates and times.
As a Public User I should be able to cancel or reschedule my appointments.

**Requirement 4 & 5 Completion:** Success

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run Locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.




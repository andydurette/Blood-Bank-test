# Book Giving Blood Test Application

MERN stack application that adds users to a nosql mongo database using the google oath passport strategy and allows them to book or cancel blood giving appointments.

The front end is unfinished aside from creating an account however the backend operations have been developed and can be used in a local environment.

This is accomplished using REST to complete CRUD operations to view and modify data.


## Technical Requirements:

In the project directory, you can run:

**Requirement 1**
 There should be 2 types of users that can log into the application: Public Users and Admin Users.

**Requirement 1 Completion:** Success
Depending on the email after the @example.com if it is either a public or admin account in this case I set it to falsecompany.com. 

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

**Requirement 6 & 7:** Not completed, at this point I had already worked more than a few hours which I was asked to stop at.
As an Admin User I should be able to manage the donation locations, ability to change information such as address, open time slots and appointment length.
As an Admin User I should be able to see a report of how much blood has been collected at each location over a given period of time.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run Locally

To run locally follow the following steps

1. In your local mongo instance make a database called blood-bank then in your mongo console run use blood-bank.
2. Next you want to the seed the database with some appointments so we want to use the seed file from the coding terminal.

### `npm run seed`

3. Next You need to run the site.

### `npm start`

4. Open [http://localhost:3000/login](http://localhost:3000/login) to make an account with the googleOath.
5. Now you can either check your userId from the console, redux state or from a tool like mongoDB compass.
6. I didn't make a front end to use all the functionality as I didn't have time, so I opted to test all my work with insomnia which I exported the test cases from and included in the readMeAdditons folder. Insomnia for download can be found here https://insomnia.rest/
7. Import the cases from the insomnia json file to your insomnia document and use it to run all the functionality. Grab the proper id's from mongoCompass or alike to get the proper ids.
8. The end 




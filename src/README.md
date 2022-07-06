MIM - MolesInMotion

MIM is a mole tracking web app designed to allow users to accurately and promptly track any pigmented lesions on their skin.

This project is for any user wanting to keep a closer eye on their moles, with an emphasis on people with a history of skin cancer. 

ProblemSpace

One of the greatest issues facing dermatologists, their staff, and their patients is the ever increasing wait time for appointments. 
With a shortage in dermatoligsts and patient lists growing larger, it can be very hard to schedule an appointment with your dermatologist, and even harder to get a referral to see a new one.
A large contributing factor to increased wait times is the need to see existing patients, specifically ones with a history of skin cancer, whenever they feel a mole has changed. Often times the patient is unsure if the spot has changed, as they cannot keep track all the pigmented lesions on their body. 
This results in an anxious patient who needs to be seen, just in case the mole HAS changed. 

The Design

MIM allows patients to create individual records for each mole they feel merits supervision. With multiple fields for in depth description, the hope is that patients will be able to compare past photos, measurement, and descriptions to their current mole profile to definitviely know if something has changed. This will help to decrease patient anxiety, as well as free up appointment slots for their dermatologists. 

Features

Account sign up and login for to ensure sensitive information is secure.

Make, edit and delete records of individual moles, wth a list of recent records on dashboard, and full record page. 

Modal on click of record for in depth information and edit/delete functions. 

Separate page for common skin lesions and how to identify them, as well as a page of anatomical terminaology to help with specific labelling. 

Tech Stack

ClientSide: React, JS, JSX, SCSS

ServerSide: Node.js, Express,js, SQL/MySQL

Dependencies 

ClientSide: axios, react-router-dom@5.3, sass

ServerSide: axios, bcryptjs, cloudinary, multer, cors, dotenv, express, jsonwebtoken, knex, multer-storage-cloudinary, mysql, uuid

Installation 

ServerSide
This can be done first, as the client side application depends on the server running.

1. Open VSCode, select Clone Git Repository in Get Started tab.
2. A search bar will pop up at the top of the window, with an option to select 'Clone from GitHub'. Click on this. 
3. Allow pop up to use Github to open and follow authentication instructions. 
4. From the dropdown, select sstockall/MIM-server and choose a folder to save repository in (recommended saving directly to Desktop).
5. You will be asked if you would like to open new repository, select yes.
6. Once repository is open, navigate to the tool bar at the top of the screen and select 'Terminal' --> 'New Terminal'.

**Each command typed into the terminal should be followed by enter**

7. If you are not in the repository, navigate into it on the command line (i.e cd <desktop> (enter), followed by cd <repo name> (enter)).
8. Once in the appropriate repository, initialize and install by running the command 'npm i'.
9. Install all of the SERVER Side dependencies listed above by typing 'npm i <dependency-name> (just type actual dependency name, no need for the brackets).
10. Run the command 'npm i nodemon'.
11. You should see the message in the terminal that the server is listening on port 8080. You can now install the ClientSide app, as describe below. 

ClientSide: 
1. Follow steps 1-8 from above, with some small changes as follows:
    Step 4: select sstockall/MIM-client from dropdown instead
2.Install all of the CLIENT side dependencies listed above by typing 'npm i <dependency-name> (just type actual dependency name, no need for the brackets).
10. Once these have finished installing, start running app by typing 'npm start' into command line. This will open the app in your browser. It may take some time, be patient and watch for any errors in your terminal. 

Lessons Learned

Cloudinary is a very helpful and intuitive cloud storage option for beginners.

React hooks make life so much easier, especially for a junior dev!

Make it work, then make it right, THEN make it pretty. I definitely got wrapped up in styling a bit too much at the beginning, and ended up having to restyle or even throw out some work after incorporating the functionality and realising it wouldnt work the way I had it styled.

Next Steps

My original vision for MIM was to have an interactive map of the body, with clickability and pin dropping. I still hope to eventually get there, but in the mean time will be working on the responsive design (mostly the desktop breakpoint), as well as bring in more information to the common lesion and terminology pages. 

# Final-Projec-Catch-


“Catch” Dating App 
Team Members: Coco, Jacob, and PJ
Concept: Dating site that is a catch & release model. You can only have one person on the hook at each time.
Reason: Easy break ups and prevents users from serial dating
Every user has a basic account profile with a picture / name / age / neighborhood
The user is first prompted to choose a city and a neighborhood. We will only offer Philadelphia in a first rollout

Philadelphia would be:
•	Northeast
•	Center City
•	Old City
•	Northern Liberties
•	Fairmount
•	South Philly
•	West Philadelphia
•	Passayunk Square
•	Manayunk

Create matches. If two people match, they are on each other’s hook. You CANNOT match with anyone else until you “release” that person.
We hold a database of places where these people can meet for coffee or a drink (paid for by the establishment). Simple JSON database to start, and maybe build it out to work with Google API.
If date doesn’t go so well, either person can release them on the app, and both your queues are empty.

Screens & Responsibilities:
1.)	Login Screen (Assigned: Coco)
a.	Unique user email + password verification – stored in MongoDB
2.)	Sign Up Screen (Assigned: Coco)
a.	Includes attributes about person and survey questions
b.	Stored in MongoDB
3.)	Dating Profile Screen (Assigned: PJ)
a.	Users own profile screen
4.)	Find Matches Screen (Assigned: PJ)
a.	Carousel to flip through matches and a click on match button
b.	Store matches in DB
5.)	Instant Message Screen (Assigned: Jacob)
a.	When there are two users that choose to match with each other, they can DM
b.	Once you click on the hook, you then can schedule a date through app
c.	DMing is prevented with anyone else until you “release” that one person
6.)	On-the-hook Screen (Assigned: Group for now)
a.	Displays who your current match is
b.	Allows you to release them and submit a reason why – complaints can also be filed through this method – helps us to maintain quality of users


# lynkme

## Description

A community where you can connect with locals in your area. 
A better designed Craigslist where you can post about Art/Music in your area or reconnect with people who you've lost connection or want to connect with. 
Users can post with tags to enable faster search and other users can comment or respond to them. 
The missed connections section will be able to connect with the poster through email or chat. 
The Art/Music section will allow users to post their own local Art/Music or post Art/Music around the city that they like.

## Challenges 

I expect to have some issues with the search feature as I would like to connnect the tags that a user can add (i.e. twitter) and have that be searcheable feature that displays the results for that tag. 
I also would like a drag and drop feature to enhance the user experience which may be challenge. 
I also would like to implement an anonymous feature to mask the users i.d. or email as an option.

###### MVP
MVP would be allowing a user to sign in and create a profile as well as update, delete, and create their own post. 
Creating a system where a user can click a link to connect with a user.

###### POST MVP
Implement an anonymous feature where a user can post anonymously and a few animations for the card feature of the website.

## Features

Create an Account
Post/Comment
Update/Edit Profile
Users can connect with other Users
Drag and Drop

 ## ERD
 
![LynkMe (1)](https://user-images.githubusercontent.com/55125468/69986589-b8f35600-150b-11ea-9825-2ae2aa7c94d0.png)

## WireFrames

![Home](https://user-images.githubusercontent.com/55125468/69986516-919c8900-150b-11ea-87f4-0d188d1a3e11.jpg)
![Art](https://user-images.githubusercontent.com/55125468/69986522-96613d00-150b-11ea-9e88-a95faa7a6b76.jpg)
![Connection](https://user-images.githubusercontent.com/55125468/69986532-99f4c400-150b-11ea-8d44-a6fb1ea54148.jpg)
![Gigs-Events](https://user-images.githubusercontent.com/55125468/69986538-9bbe8780-150b-11ea-999a-ff6d472c7c54.jpg)
![Profile](https://user-images.githubusercontent.com/55125468/69986549-a0833b80-150b-11ea-9e2e-aad47a93aaf1.jpg)

## API Endpoints

'/users' : A list of all Users 
'/user/:id' : Find a particular User. 
'/posts' : This will display all the post for a paticular category or on the homepage as an update.
'/post/:id' : find a particular post.
'/post/:id/comments' : This will display the comments for a particular post if this is implemented. 
'/posts/connection' : List of all connection post. 


## Dependencies

Google Maps.

## Timeframes

 Adding Form 1.5hr
 API/backend 5hrs
 MVP Front-end

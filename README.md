This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


# Cloud Lock ( Demo MVP )
###### Smart lock demo application with both user and admin abilities to control and manage door locks, as well as manage employees and their permissions to locks.

#### Objectives:
- Simple user interface for employees to:
  - Login
  - See available doors:
    - unlock ones they have access to
    - request access to others
- Admin portal interface that allows admin user to:
  - Add/Edit Doors and set permissions
  - Add/Edit Employees and set door access
  - See complete event list of all doors and users

## Table of Contents
- [Development](#developers)
  - [Getting Started](#getting-started)
- [Usign the Demo](#using-the-demo)
  - [Login](#login)
  - [Doors List](#doors-list)
  - [Admin Panel](#admin-panel)
    - [Door](#doors)
    - [Employees](#employees)
    - [Events History](#events-history)
  - [Logout](#logout)


## Development
### Getting Started:
There are only a few steps to use and develop this app locally. After cloning or downloading the repo, from the root folder:

1. run `$ yarn install` or `$ npm install` to download and install packages
2. After packages are installed, run `$ yarn start` or `$ npm start` to start up a local server
3. Enjoy! thats it, you can now use the app on localhost which will update with any changes while the server runs.

- __NOTE: this demo was developed to mock a mobile app, so it is best viewed in a thin window or with Chromes mobile/responsive setting__

## Using the Demo
After running a local server the app can be viewed at `localhost:3000` by default, or can be viewed as a live version at https://sean6bucks.github.io/cloud-lock

### Login:
- user can login by entering any credentials, this is just to show a simple login dialog
- After login, an auth token will be generated and stored in localStorage to maintain session

### Doors List:
#### Door Locks: filterable list of Door Locks available to the User
  - Default view is only accessable locks to User
  - "ALL" Filter allows user to see all available doors/locks and request access permission

#### Lock:
  - Unlock dialog for user to trigger Open
  - If user does not have lock permission they will have the ability to request access
  - **Note: "Private Office" door will always fail to mock what happens if API call fails**


### Admin Panel:
###### ( visible only to Admin Users )
#### Doors: 
###### All doors currently in the system
  - Ability to create new Door Lock with name and Permissions
  - Ability to update name or permissions of any available door

#### Employees:
###### All Employees currently in the system
  - Ability to create new Employees and set Lock permissions
  - Ability to update name or lock permissions of any employee


#### Events History: 
###### List of all lock events
  - Shows list of events: "Unlock", "Failed Unlock", or "Access Requested"
  - Each event will display the Employee, Door/Lock, and Time of event
  
### Logout
  - At any time user can logout from the header, this will remove any auth token from the localStore, reset data in state, and bring user to the login page

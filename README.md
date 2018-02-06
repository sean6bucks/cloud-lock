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
- [User Interface](#user-interface)
  - [Doors List](#doors-list)
  - [Admin Panel](#admin-panel)


## Development
### Getting Started:
There are only a few steps to use and develop this app locally. After cloning or downloading the repo, from the root folder:

1. run `$ yarn install` or `$ npm install` to download and install packages
2. After packages are installed, run `$ yarn start` or `$ npm start` to start up a local server
3. Enjoy! thats it, you can now use the app on localhost which will update with any changes while the server runs.

## User Interface
### Doors List:
#### Door Locks: filterable list of Door Locks available to the User
  - Default view is only accessable locks to User
  - "ALL" Filter allows user to see all available doors/locks and request access permission

#### Lock:
  - Unlock dialog for user to trigger Open
  - If user does not have lock permission they will have the ability to request access


### Admin Panel:
( visible only to Admin Users )
#### Doors: All doors currently in the system
  - Ability to create new Door Lock with name and Permissions
  - Ability to update name or permissions of any available door

#### Employees: All Employees currently in the system
  - Ability to create new Employees and set Lock permissions
  - Ability to update name or lock permissions of any employee


#### Events History: List of all lock events
  - Shows list of events: "Unlock", "Failed Unlock", or "Access Requested"
  - Each event will display the Employee, Door/Lock, and Time of event

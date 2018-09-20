# Wyft

Do you like using Lyft, the app that's basically your friend with a car? Wouldn't it be cool to meet people and use their wifi in exchange for a (completely optional) gift? Wyft allows you to search for users within a zip code offering to host you and give you access to their wifi. You might just meet your next best friend.

## Team

  - __Product Owner__: Arianna
  - __Scrum Master__: Arianna
  - __Development Team Members__: Rosita, Al, Josh, Roy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)
1. [Import Seed file](#import-seed-file)

## Usage

<!-- tbd -->
Install nodes package
`npm install`

Turn on the server, go to localhost:3000
`npm run server-dev`


## Making endpoint request from client as
- Guest
 1. POST request (search nearby wifi hosts)
 ```javascript
   $.ajax({
   	  url: "/api/guests/search",
   	  type: "POST",
   	  data: {"zipcode": "91234"},
   	  contentType: 'application/json'
   	}).done((data) => {
   		console.log(data)
   	});
 ```

- Host
 1. POST request (create a new host)
  ```javascript
    $.ajax({
      type: 'POST',
      url: '/api/hosts',
      data: JSON.stringify({data: host}),
      contentType: 'application/json',
      success: function(data){
        console.log(data)
      },
      error: function(err){
        console.log(err);
      }
    })
 ```

## Requirements

Express 4.16.3

<!-- - Node 0.10.x
- Redis 2.6.x
- Postgresql 9.1.x
- etc
- etc -->

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```
## Config with SQL
login to sql
```
mysql -u root
```

```sql
create database wyft;
```

## Config Env variables
1. Create a .env file in the root directory of your project.  Add environment-specific variables on new lines in the form of NAME=VALUE.  For example: 

```javascript
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```

### Import Seed file
1. run `mysql -u root -p < seed/truncate_table.sql` to delete all existing tables
2. run `node seed/seed.js` to import seed data

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

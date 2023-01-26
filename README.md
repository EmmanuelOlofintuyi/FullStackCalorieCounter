# FullStackCalorieCounter
this project should be able to tell a user what specific calories they should be having based on many factors

## User
A user has these properties
- name( _String_ )
- date of birth(_LocalDate_)
- age( _int_ )
- weight( _double_ )
- suggested calories ( _int_ )
   - the suggested calories are based on an enum class called Goal and a variable called lifeStyle.
## GUI 
When I develop the UI user should be able to
### POST
  this lets the user input there informaition
  - name
  - date of birth
  - weight
  - lifestyle
  - goal
### GET
  this lets the user view ther and others information <br/>
  _maybe in the future I will make two type of users. A General User and a Admin, this would let me control who can see all the users_
### PUT
  User will be able to edit there information
### DELETE
  User will be able to delete a user from the database
  


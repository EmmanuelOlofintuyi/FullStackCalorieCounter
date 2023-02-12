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
The user will be first introduced to the home page where all of the actions a User can do is present. 
![image](https://user-images.githubusercontent.com/46730204/216980728-cd8a786c-7b05-48fa-a948-659c203f096c.png)
When I develop the UI user should be able to

- ### POST
  this lets the user input there informaition and then it will be posted in the Database.
  - name
  - date of birth
  - weight
  - lifestyle
  - goal
  This function will be be in the Add user page where the User will enter all of the corresponding charateristics
   ![image](https://user-images.githubusercontent.com/46730204/216979302-0c1571ed-a106-4556-81f1-0836a9c5f13c.png)

- ### GET
  this lets the user view ther and others information <br/>
  This will be implemented in the View page where you enter in your username and your user information comes out at the bottom.
   ![image](https://user-images.githubusercontent.com/46730204/216979887-23f96295-4e6f-42c6-96b4-69c2e9335ca8.png)
  _maybe in the future I will make two type of users. A General User and a Admin, this would let me control who can see all the users_
- ### PUT
  User will be able to edit there information
- ### DELETE
  User will be able to delete a user from the database
  


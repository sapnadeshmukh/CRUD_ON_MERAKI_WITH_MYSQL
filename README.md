# CRUD_ON_MERAKI_WITH_MYSQL



*   In this project I have performed simple CRUD(GET, POST, UPDATE & DELETE) operation on mysql database with JSON data which       
    i have fetched from MERAKI api.


    


 *  1.GET:--while working with GET firstly i fetch data from meraki API and stored that 
    in DATABASE .so here i am checking  wheather that fetched data is availbale in DATABASE.
    if availvalble then we will get all the data if not then we won't get.

 
 
    2.POST:--while working with POST firstly i fetch data from meraki API .That data was in JSON format then one by one i stored it in table format in MYSQL DATABASE also taking care if ID of data is exists in DATABASE so we should get message ID already exists if not then add th data in DATABASE.


    3.UPDATE:--while working with UPDATE i update data which is already stored in DATABASE  but now according to user choice if i want to modify in that specific data can modify and then store that in DATABASE again.

    4.DELETE:--while working with DELETE according to user choice if i want to remove  specific data from DATABASE can delete and then modify data of DATABASE..

# Content Discussed :

    *How to perform CRUD on DATABASE with JSON file in Node.js

 # Built With

    *ExpressJS - Framework

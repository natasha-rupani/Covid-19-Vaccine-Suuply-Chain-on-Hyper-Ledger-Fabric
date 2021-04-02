# Blockchain solution for Covid 19 Vaccine supply chain

Blockchain based solution to track corona vaccine. The project employees ReactJs as frontend, ExpressJs as the middleware and solidity for smart contracts.This project is a final assignment for BCDV1011 Design Patterns for Blockchain as group project.

Below are the steps to install and run the project:
1. Clone the folder in your local workplace 
git clone https://github.com/natasha-rupani/Covid-19VaccineSuuplyChain
2. Change directory to cloned project
3. Update the .env file under backend folder to add the MONGODB_URI_DEV, PRIVATE_KEY, BLOCKCHAIN_EMULATOR_URI
4. Open a separate terminal to migrate the smart contracts
  cd smart_contract
  truffle develop
  develop> migrate
5. Open another terminal and run the backend
    cd backend
    npm install // installs the dependancies 
    
    To fill the database with test data run the following command
    npm run populate
    this will create 4 users in the backend with different roles:
    1. admin user testAdmin/123456
    2. distributer user testDist/123456
    3. manufacturer user testManu/123456
    4. transporter user testTrans/123456
    
    Also it will a vaccine document in the mongodb that is assigned to a manufacturer
    
    Start the application
    npm run start
 6. Open another terminal to run the frontend
    cd frontend
    npm install
    npm run start
    
Truffle will run on http://127.0.0.1:9545/

Backend Server will run on http://localhost:5000/

Frontend web application will run on http://localhost:3000/
    
  

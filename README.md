# web-academics
A School Management System (SMS)

1. git clone https://github.com/raviurlams/web-academics.git
   
   open git bash on the project folder

2.  Removing the dist/tmp/node_modules

    ```
    rm -rf node_modules dist tmp
    ```

3. run the MongoDB from below path

   C:\Program Files\MongoDB\Server\3.4\bin  :: mongod.exe


4. Install and Compile the dependencies
    
    ```   
    npm install
    
    ng build

    npm run prod 
    
    ```

5. http://localhost:3000


6. This is for production  --- This is optional
    ``` 
    ng build

    npm run dev 

    npm run prod   : For Production 

    ```   

7.Production DB
mongodb://root:root@ds111204.mlab.com:11204/web-academics
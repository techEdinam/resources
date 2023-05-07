# Installing Node
1. Open any terminal in your preferred IDE or text editor. And in  the terminal check if you have "node" installed. Type "node -v" in the terminal and press enter. If u have it installed, the version should appear, else you would have to install it. (Move to Installing the dependencies for the server side if you have it installed)

2. Download and install node from here https://nodejs.org/en/download (download the LTS version)

3. Repeat step 1 to confirm that node was indeed installed


# Installing the dependecies for the Server side
1. In a terminal, navigate to the "server" folder. For example if you are in the resources folder, use "cd registration/server" and press enter. At this point, you should be in the "server" folder.

2. Once in the "server" folder, type "npm install" and press enter to install all the dependencies necessary for the server side to run. The installation will take a minute or two

3. If the installation was successfull, you should see a "node_modules" folder in the "server" folder

4. Still in the server folder, type "npm run dev" in the terminal and press enter to start the development server for the server side. The server for the registration project should open in the terminal after a few seconds. If it works, you should see "Server running on port 4000" in the terminal


# Installing the dependencies for the Client side
1. In another terminal (at this point 2 terminals should be open), navigate to the "client" folder. For example if you are in the resources folder, use "cd registration/client" and press enter. At this point, you should be in the "client" folder.

2. Once in the "client" folder, type "npm install" and press enter to install all the dependencies necessary for the client side to run. The installation will take a minute or two

3. If the installation was successfull, you should see a "node_modules" folder in the "client" folder

4. Still in the client folder, type "npm start" in the terminal and press enter to start the development server for the client side. The registration project should open in a browser after a minute or two. If for some reason the browser did not open, type "http://localhost:3000" in the address bar in any your browser and press enter.

# Note
Both servers should be running at all times. Thus the client terminal and the server terminal should always be open, with both servers running. To stop any of the servers, use the "ctrl + c" command in the terminal

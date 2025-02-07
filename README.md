# HNG Stage 1 API
This is a simple REST API project that provides a single GET endpoint which takes a number as a query parameter, and returns interesting mathematical properties about it, along with a fun fact, in JSON format.

## Features 
+ Provides the number's mathematical properties and fun fact
+ Returns response in JSON format
+ Handles CORS for cross-origin requests

## Tech Stack
+ Node.js
+ Express.js 

## Local setup instructions
1. Clone the repository

```bash
git clone https://github.com/njaumatilda/HNGX-Stage1-Number-Classification/
```

2. Navigate to the project directory

```bash
cd HNGX-Stage1-Number-Classification/
```

3. Navigate to the project subdirectory

```bash
cd number-classification/
```

4. Install dependencies

```bash
npm install
```

5. Configure environment variables

To run this project, you will need to create a `.env` file in the project directory and make sure it is included in the `.gitignore` file. Configure the following environment variables:

```env
PORT = your-port
```

> Replace `your-port` with your specified port

6. Start the server

```bash
npm start
```

## API Documentation
Here is the reference on the usage of the API: 
[API Documentation](https://documenter.getpostman.com/view/38132076/2sAYX5K2mA)

## Deployment
The API has been deployed to a publicly accessible endpoint on Vercel:
[Live URL](https://hngx-stage1-number-classification-matilda-njaus-projects.vercel.app/api/classify-number)

## Author
[Matilda Njau](https://github.com/njaumatilda) 
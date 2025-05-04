# Steps to run the project

## 1. Install the required packages

Once you have cloned the repository, navigate to the project directory and run the following command to install the required packages:

```bash
pnpm install
```

## 2. Create your .env file

Create a `.env` file in the root directory of the project. You can use the `.env.example` file as a template. Make sure to fill in the required environment variables.

## 3. Create the database

You can create the database by running the following command:

```bash
pnpm db:hard-reset
```

This command will use the docker-compose file to create the database and run the migrations. Make sure you have Docker installed and running on your machine. If needed, you can change the port in the docker-compose file.

## 4. Run the application

To run the application, use the following command:

```bash
pnpm dev
```

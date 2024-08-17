# VideoStore Front-End

VideoStore is a web application where you can manage your favorite videos. This repository contains the front-end code for VideoStore, built with React, TypeScript, and Vite.

## Description

The front-end application allows users to:

- View a list of videos.
- Add new videos.
- Edit existing videos.
- Delete videos from their list.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Vite**: Build tool for fast development and optimized production builds.
- **React Router DOM**: For handling routing within the application.
- **React Toastify**: For toast notifications.
- **React Player**: For embedding video players.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Javierdigital85/front-favouritesVideos
   cd front-favouritesVideos
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the application:**
   ```bash
   npm run dev
   ```

## Usage

Once the application is up and running, you can interact with it through the following features:

- **View Videos:**
  - Navigate to the main page to see a list of all your saved videos, including their titles, descriptions, and embedded video players.

- **Add a New Video:**
  - Go to the `/new-video` page to add a new video.
  - Fill in the form with the video's title, URL, and description.
  - Click "Create Video" to save the new video to your list.

- **Edit an Existing Video:**
  - On the main page, click on a video's title to open the edit form.
  - Modify the video's title, URL, or description as needed.
  - Click "Update Video" to apply the changes.

- **Delete a Video:**
  - On the main page, click the delete icon (an "x") next to the video you want to remove.

## API Endpoints

- **GET /api/videos**: Retrieve the list of videos.
- **POST /api/videos**: Create a new video.
- **GET /api/videos/:id**: Retrieve a specific video by ID.
- **PUT /api/videos/:id**: Update an existing video by ID.
- **DELETE /api/videos/:id**: Delete a video by ID.

## Contact

For any inquiries or support, please contact:

- **Name:** Javier
- **Email:** javiercolodro@gmail.com

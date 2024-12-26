# Project Documentation


## Project Overview
This project allows users to upload a text file, parse its content, and interact with the parsed 
structure. It leverages modern web technologies such as React, TypeScript, Material UI, and
react-dnd for drag-and-drop functionality.


## Key Features
- Text File Upload: Allows users to upload a .txt file via a button or drag-and-drop.
- File Parsing: The content of the file is read and parsed into a structured format using a custom parseDocument function.
- Draggable Components: The parsed structure can be manipulated using drag-and-
drop functionality powered by react-dnd.
- User Interface: Clean UI with Material UI components and responsive design.

##Getting Started

Follow these steps to set up and run the project locally.
- Clone the Repository
Start by cloning the project repository to your local machine.
git clone <repo link>

cd react-dnd
- Install Dependencies
Install the required dependencies using npm or yarn.

# Using npm
npm install
# Using yarn
yarn install

- Start the Development Server
Once the dependencies are installed, you can start the development server.
# Using npm
npm run dev
# Using yarn
yarn dev

This will start the app on http://localhost:3000 by default.

- File Upload Component
The file upload component allows users to upload .txt files and see their content parsed and structured in the app.

- Code Breakdown
UI for File Upload The file upload button and drag-and-drop area are rendered using 
Material UI's Button component and custom styles.
1. File Reading and Parsing When a file is uploaded, the handleFileUpload 
function is called, which reads the file using the FileReader API. Once the file is 
loaded, it’s parsed using the parseDocument function.
 const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setFileContent(parseDocument(content));
    };
    reader.readAsText(file);
  }
};

2. Parsing the File Content
The parseDocument function is responsible for parsing the content of the uploaded .txt 
file into a structured format. The implementation of this function can vary depending on how the content is structured. For instance, it may return an array of objects representing the headings or sections in the document.
This is a basic example that processes a Markdown-like document, extracting headings 
based on the number of # characters at the beginning of each line.

- Drag-and-Drop Feature
The app also includes drag-and-drop functionality for manipulating the parsed structure of the document. This is achieved using the react-dnd library.

- Setting up react-dnd
DndProvider: Wrap the component tree in a DndProvider with HTML5Backend to enable 
drag-and-drop functionality.
 <DndProvider backend={HTML5Backend}>
  <DraggableStructure data={fileContent} />
</DndProvider>

- Draggable Components: The DraggableStructure component is responsible for
rendering the parsed document as draggable items. You can add interactivity such 
as dragging, dropping, and reordering elements.

- Styling
The project uses Tailwind CSS for utility-based styling. You can customize the theme and apply various utility classes for responsive design.
For Material UI, you can adjust styles using the sx prop or customize them globally.
Example:
<Button
  component="label"
  variant="contained"
  startIcon={<CloudUploadIcon />}
  sx={{
    backgroundColor: "lightGreen", // Customize background color
    color: "white", // Customize text color
    "&:hover": {
      backgroundColor: "primary.dark", // Customize hover color
    },
  }}
>
  Upload File
</Button>

## Folder Structure
Here's a quick breakdown of the folder structure:
src
├── components/            # Reusable UI components (e.g., DraggableStructure)
├── pages/                 # Page components (e.g., Home)
├── utils/                 # Utility functions (e.g., parseDocument)
├── styles/                # Global styles (Tailwind config, etc.)
├── App.tsx                # Main component that contains the app's layout
└── index.tsx              # Entry point for the React app


## Conclusion
This project provides a simple but powerful way for users to upload and interact with text 
files. The key technologies involved are React, TypeScript, Material UI, and react-dnd, 
making it easy to extend and customize for future features.
Feel free to modify the file parsing logic, add more UI components, or integrate more 
complex drag-and-drop functionalities to suit your needs.
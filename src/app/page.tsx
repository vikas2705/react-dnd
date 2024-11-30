"use client"

import { Button } from "@mui/material"
import { Heading, parseDocument } from "../utils/parseDocument"
import { useState } from "react"
import { DraggableStructure } from "../components/DraggableStructure"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

export default function Home() {
  const [fileContent, setFileContent] = useState<Heading[]>([])

 

  return (
    <div className="container mx-auto mt-16 flex flex-col gap-4">
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        sx={{
          backgroundColor: 'lightGreen', // Customize background color
          color: 'white', // Customize text color
          '&:hover': {
            backgroundColor: 'primary.dark', // Customize hover color
          },
        }}
      >
        Upload file
        <input
          type="file"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) {
              const reader = new FileReader()
              reader.onload = (e) => {
                const content = e.target?.result as string
                setFileContent(parseDocument(content)) // Update state with parsed content
              }
              reader.readAsText(file)
            }
          }}
        />
      </Button>

      <DndProvider backend={HTML5Backend}>
        <DraggableStructure structure={fileContent} />
      </DndProvider>

      
    </div>
  )
}
import { Dispatch, FC, SetStateAction, useRef, useState } from "react"
import { Heading } from "../utils/parseDocument"
import { Box, Grid2, Typography } from "@mui/material"
import { useDrop } from "react-dnd"
import { SortableAccordion } from "./SortableAccordion"


export interface DraggableHeading extends Heading {
  parent?: string | null // To keep track of the parent heading for nested structures
}


export const DraggableStructure: FC<{ structure: Heading[] }> = ({
  structure,
}) => {
  const [restructured, setRestructured] = useState<Heading[]>([])
  const [expandedOg, setExpandedOg] = useState<string[]>([])
  const [expandedRestructured, setExpandedRestructured] = useState<string[]>([])


  return (
    <div className="">
      <div className="flex justify-between " >
      
        <div className="">
          <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", paddingTop:"12px" }}>
            Table of contents
          </Typography>
          <div className="pt-5">
          {structure.map((heading, index) => (
            <SortableAccordion
              key={index}
              heading={heading}
              expanded={expandedOg}
              isDraggable
              setExpanded={setExpandedOg}
              setAllHeadings={setRestructured}
              isDroppable={false}
            />
          ))}
          </div>
        </div>
        <div className="w-[65%] "  >
          <Typography variant="h5" sx={{ textAlign: "center", fontStyle: "italic", paddingBottom:"16px" , paddingTop:"4px" }}>
            Drag and drop headings here
          </Typography>


          <Box sx={{ border: "2px dashed #ccc", padding: "16px", borderRadius: "8px" , paddingTop:"16px" }}>
            {restructured.map((heading, index) => (
              <>
                <SortableAccordion
                  key={index}
                  heading={heading}
                  expanded={expandedRestructured}
                  isDraggable={true}
                  setExpanded={setExpandedRestructured}
                  setAllHeadings={setRestructured}
                  isDroppable={true}
                />
                <DroppableContainer
                  setAllHeadings={setRestructured}
                  showInfo={restructured.length === 0}
                  allHeadings={restructured}
                  short
                  dropIndex={index + 1}
                />
              </>
            ))}


            {restructured.length === 0 ? (
              <DroppableContainer setAllHeadings={setRestructured} showInfo />
            ) : null}
          </Box>
        </div>
      </div>
    </div>
  )
}


const DroppableContainer: FC<{
  setAllHeadings: Dispatch<SetStateAction<DraggableHeading[]>>
  showInfo: boolean
  allHeadings?: DraggableHeading[]
  short?: boolean
  dropIndex?: number
}> = ({ setAllHeadings, showInfo, allHeadings, short, dropIndex }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "HEADING",
    drop: (draggedItem: DraggableHeading) => {
      setAllHeadings((prev) => {
        if (
          showInfo ||
          !allHeadings?.find((h) => h.randomKey === draggedItem.randomKey)
        ) {
          const newHeadings = [...prev, draggedItem]
          return newHeadings
        } else {
          const newHeadings = [...prev]
          const draggedIndex = newHeadings.findIndex(
            (h) => h.randomKey === draggedItem.randomKey
          )


          newHeadings.splice(draggedIndex, 1)
          if (dropIndex !== undefined) {
            newHeadings.splice(dropIndex, 0, draggedItem)
          } else {
            newHeadings.push(draggedItem)
          }


          return newHeadings
        }
      })
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })


  const dropRef = useRef(null)


  drop(dropRef)


  return (
    <Box
      ref={dropRef}
      sx={{
        height: short ? "10px" : "100px",
        backgroundColor: isOver ? "lightGreen" : "white",
        borderRadius: "8px",
        marginTop: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.3s",
        boxShadow: isOver ? "0px 4px 8px rgba(0,0,0,0.2)" : "none",
      }}
    >
      {!showInfo ? undefined : (
        <Typography variant="body2" sx={{ color: "gray" }}>
          Drop here to start rearranging
        </Typography>
      )}
    </Box>
  )
}

import React, { useState } from "react";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Box, Typography, Stack ,Checkbox,FormControl,FormGroup,FormControlLabel} from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid"; 



const App = () => {
  const [formStructure, setFormStructure] = useState([
    {
      id: uuidv4(),
      title: "What is your name",
      type: "input",
      name: "Text Input",
      is_required: true,
      multi_select: false,
    },

    {
      id:uuidv4(),
      title: "What is your gender",
      type: "radio",
      name: "Radio Option",
      is_required: true,
      multi_select: false,
      option: ["Male", "female"],
    },
    {
      id: uuidv4(),
      title: "What is your address",
      type: "input",
      name: "Single Checkbox",
      is_required: true,
      multi_select: false,
    },
    {
      id: uuidv4(),
      title: "Whatare yoour hobbies",
      type: "checkbox",
      name: "Multi Checkbox",
      is_required: true,
      multi_select: false,
      option: ["chess"],
    },
    {
      id: uuidv4(),
      title: "What is your name",
      type: "input",
      name: "Date selector",
      is_required: true,
      multi_select: false,
    },
  ]);

  const handleDragStart = (event, draggableId) => {
    if (draggableId !== "dehaze-icon") {
      event.preventDefault();
    }
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return; // Item was dropped outside of a droppable area
    }

    const { source, destination } = result;

    // Reorder the items in the formStructure array based on the drag and drop result
    const draggedItem = formStructure[source.index];
    const updatedFormStructure = Array.from(formStructure);
    updatedFormStructure.splice(source.index, 1);
    updatedFormStructure.splice(destination.index, 0, draggedItem);

    setFormStructure(updatedFormStructure);
  };


  return (
    <>
       <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="formItems">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {formStructure.map((e, index) => (
              <Draggable key={e.id} draggableId={e.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    onDragStart={(event) => handleDragStart(event, e.id)}
                  >
                    {e.name === "Text Input" && (
                      <Box
                        sx={{
                          bgcolor: "background.paper",
                          boxShadow: 24,
                          pt: 2,
                          my: 2,
                          px: 4,
                          borderRadius: 1,
                          pb: 3,
                        }}
                      >
                        <Stack
                          direction="row"
                          spacing={2}
                          sx={{ borderBottom: "1px solid grey" }}
                        >
                          <Typography
                            variant="body1"
                            style={{ color: "rgb(19 117 137)" }}
                          >
                            {index + 1}
                          </Typography>
                          <Stack
                            direction="row"
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "100%",
                            }}
                          >
                            <Stack>
                              <Typography variant="body1">
                                Text Input
                              </Typography>
                            </Stack>
                            <Stack direction="row" spacing={2}>
                              <span {...provided.dragHandleProps}>
                                <DehazeIcon sx={{ color: "rgb(19 117 137)" }} />
                              </span>
                              <EditIcon
                                onClick={() => editTextInput(index)}
                                sx={{ color: "rgb(19 117 137)" }}
                              />
                              <DeleteForeverIcon
                                onClick={() => deleteTextInput(index)}
                                sx={{ color: "rgb(19 117 137)" }}
                              />
                            </Stack>
                          </Stack>
                        </Stack>
                        <Typography variant="body2">{e.title}</Typography>
                      </Box>
                    )}

                    {e.name === "Radio Option" && (
                      <Box
                        sx={{
                          bgcolor: "background.paper",
                          boxShadow: 24,
                          pt: 2,
                          my: 2,
                          px: 4,
                          borderRadius: 1,
                          pb: 3,
                        }}
                      >
                        <Stack>
                          <Stack
                            direction="row"
                            spacing={2}
                            sx={{ borderBottom: "1px solid grey" }}
                          >
                            <Typography
                              variant="body1"
                              style={{ color: "rgb(19 117 137)" }}
                            >
                              {index + 1}
                            </Typography>
                            <Stack
                              direction="row"
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%",
                              }}
                            >
                              <Stack>
                                <Typography variant="body1">
                                  Radio Options
                                </Typography>
                              </Stack>
                              <Stack direction="row" spacing={2}>
                                <span {...provided.dragHandleProps}>
                                  <DehazeIcon
                                    sx={{ color: "rgb(19 117 137)" }}
                                  />
                                </span>
                                <EditIcon
                                  onClick={() => editRedioOption(index)}
                                  sx={{ color: "rgb(19 117 137)" }}
                                />
                                <DeleteForeverIcon
                                  onClick={() => deleteRedioOption(index)}
                                  sx={{ color: "rgb(19 117 137)" }}
                                />
                              </Stack>
                            </Stack>
                          </Stack>
                          <Stack>
                            <Typography variant="body2" sx={{ pt: 2 }}>
                              {e.title}
                            </Typography>
                            {/* Render radio options here */}
                          </Stack>
                        </Stack>
                      </Box>
                    )}

                    {e.name === "Single Checkbox" && (
                      <Box
                        sx={{
                          bgcolor: "background.paper",
                          boxShadow: 24,
                          pt: 2,
                          my: 2,
                          px: 4,
                          borderRadius: 1,
                          pb: 3,
                        }}
                      >
                        <Stack>
                          <Stack
                            direction="row"
                            spacing={2}
                            sx={{ borderBottom: "1px solid grey" }}
                          >
                            <Typography
                              variant="body1"
                              style={{ color: "rgb(19 117 137)" }}
                            >
                              {index + 1}
                            </Typography>
                            <Stack
                              direction="row"
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%",
                              }}
                            >
                              <Stack>
                                <Typography variant="body1">
                                  Single Checkbox
                                </Typography>
                              </Stack>
                              <Stack direction="row" spacing={2}>
                              <span {...provided.dragHandleProps}>
                                <DehazeIcon sx={{ color: "rgb(19 117 137)" }} />
                              </span>
                                <EditIcon
                                  onClick={() =>
                                    handleEditSingleCheckbox(index)
                                  }
                                  sx={{ color: "rgb(19 117 137)" }}
                                />
                                <DeleteForeverIcon
                                  onClick={() =>
                                    handleDeleteSingleCheckbox(index)
                                  }
                                  sx={{ color: "rgb(19 117 137)" }}
                                />
                              </Stack>
                            </Stack>
                          </Stack>
                          <Typography variant="body2" sx={{ pt: 1 }}>
                            <Checkbox />
                            {e.title}
                          </Typography>
                        </Stack>
                      </Box>
                    )}

                    {e.name === "Multi Checkbox" && (
                      <Box
                       
                        sx={{
                          bgcolor: "background.paper",
                          boxShadow: 24,
                          pt: 2,
                          my: 2,
                          px: 4,
                          borderRadius: 1,
                          pb: 3,
                        }}
                      >
                        <Stack>
                          <Stack
                            direction="row"
                            spacing={2}
                            sx={{ borderBottom: "1px solid grey" }}
                          >
                            <Typography
                              variant="body1"
                              style={{ color: "rgb(19 117 137)" }}
                            >
                              {index + 1}
                            </Typography>
                            <Stack
                              direction="row"
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%",
                              }}
                            >
                              <Stack>
                                <Typography variant="body1">
                                  Multiple Checkbox
                                </Typography>
                              </Stack>
                              <Stack direction="row" spacing={2}>
                              <span {...provided.dragHandleProps}>
                                <DehazeIcon sx={{ color: "rgb(19 117 137)" }} />
                              </span>
                                <EditIcon
                                  onClick={() => editMultiCheckBox(index)}
                                  sx={{ color: "rgb(19 117 137)" }}
                                />
                                <DeleteForeverIcon
                                  onClick={() => deleteMultiCheckBox(index)}
                                  sx={{ color: "rgb(19 117 137)" }}
                                />
                              </Stack>
                            </Stack>
                          </Stack>
                          <Typography variant="body2" sx={{ pt: 2 }}>
                            {e.title}
                          </Typography>
                          <FormControl>
                            <FormGroup>
                              {e.option.map((option, optionIndex) => (
                                <FormControlLabel
                                  key={optionIndex}
                                  control={<Checkbox />}
                                  label={option}
                                />
                              ))}
                            </FormGroup>
                          </FormControl>
                        </Stack>
                      </Box>
                    )}

                    {e.name === "Date selector" && (
                      <Box
                       
                        sx={{
                          bgcolor: "background.paper",
                          boxShadow: 24,
                          pt: 2,
                          my: 2,
                          px: 4,
                          borderRadius: 1,
                          pb: 3,
                        }}
                      >
                        <Stack>
                          <Stack
                            direction="row"
                            spacing={2}
                            sx={{ borderBottom: "1px solid grey" }}
                          >
                            <Typography
                              variant="body1"
                              style={{ color: "rgb(19 117 137)" }}
                            >
                              {index + 1}
                            </Typography>
                            <Stack
                              direction="row"
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%",
                              }}
                            >
                              <Stack>
                                <Typography variant="body1">
                                  Date Selector
                                </Typography>
                              </Stack>
                              <Stack direction="row" spacing={2}>
                              <span {...provided.dragHandleProps}>
                                <DehazeIcon sx={{ color: "rgb(19 117 137)" }} />
                              </span>
                                <EditIcon
                                  onClick={() => handleEditDateSelector(index)}
                                  sx={{ color: "rgb(19 117 137)" }}
                                />
                                <DeleteForeverIcon
                                  onClick={() =>
                                    handleDeleteDateSelector(index)
                                  }
                                  sx={{ color: "rgb(19 117 137)" }}
                                />
                              </Stack>
                            </Stack>
                          </Stack>
                          <Typography variant="body2" sx={{ pt: 2 }}>
                            {e.title}
                          </Typography>
                        </Stack>
                      </Box>
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    </>
  )
}

export default App

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "./components/SideBar";
import Box from "@material-ui/core/Box";
import Controller from "./components/Controller";
import clsx from "clsx";
import { useVideoConf } from "core/hooks/useVideoConf";

interface Props {
  a?: unknown;
}

const useStyles = makeStyles((theme) => ({
  content: {
    width: "100%",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentOff: {
    marginRight: "440px",
  },
}));

const App: React.FC<Props> = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles({ open });
  const { myStream, peerStream } = useVideoConf();
  console.log(myStream);

  return (
    <>
      <Box display="flex" height="88vh">
        <Box
          bgcolor="pink"
          className={clsx(classes.content, open && classes.contentOff)}
        >
          Left
        </Box>
      </Box>
      <SideBar open={open} setOpen={setOpen} />
      <Controller />
    </>
  );
};
export default App;

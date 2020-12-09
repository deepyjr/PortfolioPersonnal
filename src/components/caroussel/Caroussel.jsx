import React from "react";
import "./Caroussel.css";
import Typical from "react-typical";
import {
  createStyles,
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);
const ColorButton = withStyles((theme) => ({
  root: {
    marginTop:'1%',
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#FF5B2B",
    '&:hover': {
      backgroundColor: "#FF5B2B",
    },
  },
}))(Button);
function Caroussel() {
  const classes = useStyles();
  return (
    <div className="containerCarou">
      <h1>Bonjour, je m'appelle Raphaël</h1>
      <p className="contentUnderTitle">
        Je fais du{" "}
        <strong>
          <Typical
            steps={["Développement Web", 1500,"Design UI/UX", 1500, "Développement Mobile", 1500]}
            loop={Infinity}
            wrapper="span"
          />
        </strong>
      </p>
      <ColorButton variant="contained" color="primary" className={classes.margin}>
        En Savoir Plus
      </ColorButton>
    </div>
  );
}

export default Caroussel;

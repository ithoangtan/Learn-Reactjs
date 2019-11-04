const styles = theme => ({
  taskBoard: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.color.primary
  },
  shape: {
    // backgroundColor: "red",
    backgroundColor: theme.shape.backgroundColor,
    // color: "white",
    color: theme.shape.textColor,
    // borderColor: "#cccccc",
    borderColor: theme.shape.border,
    padding: "20px",
    margin: "10px",
    // borderRadius: "3px"
    borderRadius: theme.shape.borderRadius
  }
});

export default styles;

import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MoodIcon from "@material-ui/icons/Mood";

export default class EditSlot extends Component {
  render() {
    let time = this.props.selectedAppointment.time
      ? this.props.selectedAppointment.time
      : "";
    let name = this.props.selectedAppointment.name
      ? this.props.selectedAppointment.name
      : "";
    let phone = this.props.selectedAppointment.phone
      ? this.props.selectedAppointment.phone
      : "";
    let isEnabled =
      (name !== "" && phone !== "") || (name === "" && phone === "");

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
          color="primary"
        >
          <DialogTitle className="dialog-title" id="form-dialog-title">
            Schedule Information
            <MoodIcon />
          </DialogTitle>
          <DialogContent>
            <DialogContentText>{time}</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              variant="outlined"
              type="text"
              fullWidth
              value={this.props.selectedAppointment.name}
              onChange={this.props.handleChange}
            />
            <TextField
              margin="dense"
              id="phone"
              label="Phone Number"
              variant="outlined"
              type="tel"
              fullWidth
              value={this.props.selectedAppointment.phone}
              onChange={this.props.handleChange}
            />
          </DialogContent>
          <DialogActions className="button-grp">
            <Button
              className="button-cancel"
              onClick={this.props.handleClose}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              className="button-save "
              onClick={this.props.handleSave}
              variant="contained"
              disabled={!isEnabled}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

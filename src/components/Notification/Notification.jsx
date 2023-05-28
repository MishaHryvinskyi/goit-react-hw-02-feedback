import React from "react";
import PropTypes from "prop-types";
import { Paragraph, ContainerMessage} from "./Notification.styled";

const Notification = ({ message }) => (
  <ContainerMessage>
    <Paragraph>{message}</Paragraph>
  </ContainerMessage>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
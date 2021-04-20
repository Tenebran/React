import React from 'react';
import './UserListItem.scss';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

export default function UserListItem({ list, index, onDelete }) {
  function onUserDelete(e) {
    e.stopPropagation();

    setTimeout(() => {
      onDelete(list.id);
    }, 100);
  }
  return (
    <>
      <Accordion className="user-list">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-headker"
        >
          <Typography>
            <span className="user-list__wrapp">
              <span className="user-list__number">{index}</span>
              <span className="user-list__img"></span>
              {list.name}
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <span className="user-list__current-info">
              <span className="user-list__label">
                <span className="user-list__name">Name:</span> {list.name}
              </span>
              <span className="user-list__label">
                <span className="user-list__name">Email:</span> {list.email}
              </span>
              <span className="user-list__label">
                <span className="user-list__name">Phone: </span>
                {list.phone}
              </span>
            </span>

            <Button variant="contained" className="button button__left" onClick={onUserDelete}>
              Delete
            </Button>

            <Button variant="contained" className="button">
              Edit
            </Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

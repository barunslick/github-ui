import React from 'react';
import moment from 'moment';
import { PropTypes } from 'prop-types';


import './RepositoryListItem.scss';

/**
 * Displays the details of repository.
 *
 * @param {Object} props
 * @returns
 */
function RepositoryLIstItem(props) {
  return (
    <div className="Repository-list">
      <div className="Repository-list__title">
        <a href={props.item.html_url} title={props.item.name}>{props.item.name}</a>
      </div>
      <div className="Repository-list__details">
        {props.item.language &&
          <div className="Repository-list__language">
            [{props.item.language}]
          </div>
        }
        <div className="Repository-list__update-time">
          [Updated: {moment(props.item.updated_at).fromNow()}]
        </div>
      </div>
    </div>
  );
}

RepositoryLIstItem.propTypes = {
  item: PropTypes.object,
};

export default RepositoryLIstItem;

import { Avatar } from '@material-ui/core';
import React from 'react';

const SidebarRow = ({ title, Icon, src }) => {
	return (
		<div className="sidebar-row">
			{src && <Avatar src={src} />}
			{Icon && <Icon />}
			<h4> {title} </h4>
		</div>
	)
}

export default SidebarRow

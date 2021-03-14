import React from 'react';
import SidebarRow from '../components/SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<SidebarRow src=""  title="Gintaras Jasaitis" />
			<SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
			<SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
			<SidebarRow Icon={PeopleIcon} title="Friends" />
			<SidebarRow Icon={ChatIcon} title="Messenge" />
			<SidebarRow Icon={StoreFrontIcon} title="Marketplace" />
			<SidebarRow Icon={VideoLibraryIcon} title="Videos" />
			<SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
		</div>
	)
}

export default Sidebar
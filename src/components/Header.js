import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
	return (
		<div className="header">
			<div class="header__left">
				<img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" />
				<div class="header__input">
					<SearchIcon />
					<input type="text" />
				</div>
			</div>
			<div class="header__middle">
				<div class="header__option">
					<HomeIcon fontSize="large" />
				</div>
				<div class="header__option">
					<FlagIcon fontSize="large" />
				</div>
				<div class="header__option">
					<SubscriptionsOutlinedIcon fontSize="large" />
				</div>
				<div class="header__option">
					<StorefrontOutlinedIcon fontSize="large" />
				</div>
				<div class="header__option">
					<SupervisedUserCircleOutlinedIcon fontSize="large" />
				</div>
			</div>
			<div class="header__right">
				<div class="header__info">
					<Avatar />
					<h4>Gintaras</h4>
				</div>
				<IconButton>
					<AddIcon />
				</IconButton>
				<IconButton>
					<ForumIcon />
				</IconButton>
				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
		</div>
	)
}

export default Header

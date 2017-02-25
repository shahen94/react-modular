import React, { PropTypes } from 'react';
import styles from './styles';
import { css } from 'aphrodite';

export default function Header() {
	return (
		<header className={css(styles.container)}>
			I'm a header component
		</header>
	);
}

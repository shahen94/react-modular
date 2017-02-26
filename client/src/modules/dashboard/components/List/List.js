import React, { PropTypes } from 'react';
import { css } from 'aphrodite';
import styles from './styles';

export default function List({ data }) {
	return (
		<div className={css(styles.container)}>
			{data.map((result) => (
				<div key={result.id} className={css(styles.item)}>
					{result.title}
				</div>
			))}
		</div>
	);
}

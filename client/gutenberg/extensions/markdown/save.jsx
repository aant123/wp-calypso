/** @format */

/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import MarkdownRenderer from './renderer';

export default ( { attributes, className } ) => (
	<MarkdownRenderer className={ className } source={ attributes.source } />
);

import React from "react";
import { Helmet } from "react-helmet";

const MetaHelmet = ({ title}) => {
	return (
		<Helmet>
			<title>{String(title)}</title>
			<meta property="og:title" content={String(title)} />		
		</Helmet>
	);
};
export default MetaHelmet;

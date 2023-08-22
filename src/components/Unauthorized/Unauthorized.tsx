import React, { FC } from 'react';

const Unauthorized: FC<{label?: string}> = ({ label='404 - Unauthorized'}) => {
	return (
		<div className="flex w-screen h-screen justify-center items-center">
			<div className="w-1/2 flex justify-center items-center text-3xl font-bold p-8">
				{label}
			</div>
		</div>
	);
};

export default Unauthorized;

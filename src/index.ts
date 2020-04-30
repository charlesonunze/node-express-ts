import { application as app } from 'express';

app.listen(3000, (error, _) => {
	if (error) throw new Error(error);
	console.log('server running on port:3000');
});

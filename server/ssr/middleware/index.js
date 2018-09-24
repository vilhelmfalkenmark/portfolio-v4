import React from "react";
import ReactDOMServer from "react-dom/server";

// import our main App component
import Root from "layout/Root";

const path = require("path");
const fs = require("fs");
require("ignore-styles");

export default (req, res, next) => {

	// point to the html file created by CRA's build tool
	const filePath = path.resolve(__dirname, '..', '..','..', 'build', 'index.html');

	fs.readFile(filePath, 'utf8', (err, htmlData) => {
			if (err) {
					console.error('err', err);
					return res.status(404).end()
			}

			// render the app as a string
			const html = ReactDOMServer.renderToString(<Root />);

			// inject the rendered app into our html and send it
			return res.send(
					htmlData.replace(
							'<div id="root"></div>',
							`<div id="root">${html}</div>`
					)
			);
	});
}

// export default (req, res, next) => {
// 	console.log("kommer in här!!!!");
	
//   // res.sendFile(path.resolve(__dirname, "../build", "index.html"));

//   // point to the html file created by CRA's build tool
//   const filePath = path.resolve(
//     __dirname,
//     "..",
//     "..",
//     "..",
//     "build",
//     "index.html"
//   );

//   fs.readFile(filePath, "utf8", (err, htmlData) => {
//     if (err) {
//       console.error("err", err);
//       return res.status(404).end();
//     }

//     // render the app as a string
//     const html = ReactDOMServer.renderToString(<Root />);

//     // inject the rendered app into our html and send it
//     return res.send(
//       htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
//     );
//   });
// };

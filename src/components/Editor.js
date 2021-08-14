import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { on } from "codemirror";

const Editor = (props) => {
	const [open, setOpen] = useState(true);
	const { language, displayName, value, onChange } = props;

	function handleChange(editor, data, value) {
		onChange(value);
	}
	return (
		<div className={`editor-container ${open ? "" : "collapsed"}`}>
			<div className="editor-title">
				{displayName}
				<button onClick={() => setOpen((prevOpen) => !prevOpen)}>
					<i class="fas fa-expand-alt"></i>
				</button>
			</div>
			<ControlledEditor
				onBeforeChange={handleChange}
				value={value}
				options={{
					lineWrapping: true,
					lint: true,
					mode: language,
					lineNumbers: true,
					theme: "material",
				}}
			/>
		</div>
	);
};

export default Editor;

import React from 'react'
import Repository from './components/repository'

import './app.sass'

const App = () => (
	<div className="App Wrapper">
		<h1>React.js</h1>
		{/** Put repos componenets here */}
		<Repository name="factoryhr/CustomUISwitch" />
		<Repository name="factoryhr/laravel-attachments" />
		<Repository name="factoryhr/Http2-Setup" />
		<Repository name="factoryhr/blog-post-introduction-to-redux-for-web-application-development" />
		<Repository name="factoryhr/js-workshop" />
	</div>
)

export default App

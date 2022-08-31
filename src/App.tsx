import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CBSetup from 'pages/CBSetup'
import 'scss/style.scss'

function App() {
	return (
		<div className='App'>
			<ToastContainer
				position='top-right'
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				pauseOnHover={false}
				pauseOnFocusLoss={false}
				rtl={false}
				draggable
			/>
			<CBSetup />
		</div>
	)
}

export default App

import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Companymodule from "./components/Companymodule"
import Dashboard from "./components/Dashboard"
//import Tabs from "./components/Tabs"
//import Settings from "./components/Settings"
import Login from "./components/Login"
import ProtectedRoutes from "./components/ProtectedRoutes"
import PublicRoutes from "./components/PublicRoutes"
import Repairform from "./components/RepairForm"
import Usermodule from "./components/Usermodule"







const MainRoutes = () => (
	<Routes>
			<Route path="/login" element={<Login />} />			
			<Route path='/dashboard' element={<Dashboard />} />
			<Route path='/Companymodule' element={<Companymodule />} />
			<Route path='/Usermodule' element={<Usermodule />} />
			<Route path='/RepairForm' element={<Repairform />} />
			{/* </PrivateRoute> */}
	</Routes>
)

const PrivateRoute = ({ children, Authenticated, ...rest }: any) => {
	console.log('reaching here');
	return (
		<Route
			{...rest}
			render={() =>
				Authenticated ? (
					children
				) : (
					<Navigate
						to={{
							pathname: '/Dashboard',
						}}
					/>
				)}
		/>
	);
};
export default MainRoutes




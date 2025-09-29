import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import NewHotel from "./pages/newHotel/newHotel";
import NewRoom from "./pages/newRoom/newRoom";


// Columns
import { userColumns, hotelColumns, roomColumns } from "./datatablesource";

// Form inputs
import { productInputs, userInputs, hotelInputs, roomInputs } from "./formSource";

function App() {
    const { darkMode } = useContext(DarkModeContext);

    const ProtectedRoute = ({ children }) => {
        const { user } = useContext(AuthContext);

        if (!user) {
            return <Navigate to="/login" />;
        }

        return children;
    };

    return (
        <div className={darkMode ? "app dark" : "app"}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="login" element={<Login />} />

                        {/* Home */}
                        <Route
                            index
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />

                        {/* Users */}
                        <Route path="users">
                            <Route
                                index
                                element={
                                    <ProtectedRoute>
                                        <List columns={userColumns} />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path=":userId"
                                element={
                                    <ProtectedRoute>
                                        <Single />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="new"
                                element={
                                    <ProtectedRoute>
                                        <New inputs={userInputs} title="Add New User" />
                                    </ProtectedRoute>
                                }
                            />
                        </Route>

                        {/* Hotels */}
                        <Route path="hotels">
                            <Route
                                index
                                element={
                                    <ProtectedRoute>
                                        <List columns={hotelColumns} />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path=":hotelId"
                                element={
                                    <ProtectedRoute>
                                        <Single />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="new"
                                element={
                                    <ProtectedRoute>
                                        <New inputs={hotelInputs} title="Add New Hotel" />
                                    </ProtectedRoute>
                                }
                            />
                        </Route>

                        {/* Rooms */}
                        <Route path="rooms">
                            <Route
                                index
                                element={
                                    <ProtectedRoute>
                                        <List columns={roomColumns} />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path=":roomId"
                                element={
                                    <ProtectedRoute>
                                        <Single />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="new"
                                element={
                                    <ProtectedRoute>
                                        <NewRoom />
                                    </ProtectedRoute>
                                }
                            />
                        </Route>

                        {/* Products */}
                        <Route path="products">
                            <Route
                                index
                                element={
                                    <ProtectedRoute>
                                        <List />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path=":productId"
                                element={
                                    <ProtectedRoute>
                                        <Single />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="new"
                                element={
                                    <ProtectedRoute>
                                        <NewHotel />
                                    </ProtectedRoute>
                                }
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;


// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import List from "./pages/list/List";
// import Single from "./pages/single/Single";
// import New from "./pages/new/New";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { productInputs, userInputs } from "./formSource";
// import "./style/dark.scss";
// import { useContext } from "react";
// import { DarkModeContext } from "./context/darkModeContext";
// import { AuthContext } from "./context/AuthContext";
// import { userColumns } from "./datatablesource";
// import { hotelColumns } from "./datatablesource";
// import { productInputs, userInputs, hotelInputs, roomInputs } from "./formSource";


// function App() {
//     const { darkMode } = useContext(DarkModeContext);

//     const ProtectedRoute = ({ children }) => {
//         const { user } = useContext(AuthContext);

//         if (!user) {
//             return <Navigate to="/login" />;
//         }

//         return children;
//     }

//     return (
//         <div className={darkMode ? "app dark" : "app"}>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/">
//                         <Route path="login" element={<Login />} />
//                         <Route index element={
//                             <ProtectedRoute>
//                                 <Home />
//                             </ProtectedRoute>} />

//                         <Route path="users">
//                             <Route index element={<ProtectedRoute>
//                                 <List columns={userColumns}/>
//                             </ProtectedRoute>} />
//                             <Route path=":userId" element={<ProtectedRoute>
//                                 <Single />
//                             </ProtectedRoute>} />
//                             <Route
//                                 path="new"
//                                 element={<ProtectedRoute><New inputs={userInputs} title="Add New User" /></ProtectedRoute>}
//                             />
//                         </Route>
//                         <Route path="hotels">
//                             <Route index element={<List columns={hotelColumns}/>} />
//                             <Route path=":productId" element={<ProtectedRoute>
//                                 <Single />
//                             </ProtectedRoute>} />
//                             <Route
//                                 path="new"
//                                 element={<ProtectedRoute><New inputs={productInputs} title="Add New Product" /></ProtectedRoute>}
//                             />
//                         </Route>
//                         <Route path="products">
//                             <Route index element={<List />} />
//                             <Route path=":productId" element={<ProtectedRoute>
//                                 <Single />
//                             </ProtectedRoute>} />
//                             <Route
//                                 path="new"
//                                 element={<ProtectedRoute><New inputs={productInputs} title="Add New Product" /></ProtectedRoute>}
//                             />
//                         </Route>
//                         <Route path="products">
//                             <Route index element={<List />} />
//                             <Route path=":productId" element={<ProtectedRoute>
//                                 <Single />
//                             </ProtectedRoute>} />
//                             <Route
//                                 path="new"
//                                 element={<ProtectedRoute><New inputs={productInputs} title="Add New Product" /></ProtectedRoute>}
//                             />
//                         </Route>
//                     </Route>
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }

// export default App;
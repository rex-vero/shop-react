import './App.css';
import Navbar from './components/navbar/Navbar';
import Input from './components/navbar/Input';
import MainContent from './maincontent/MainContent';
import Main from './pages/Main';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Login';
import AuthLayout from './layouts/AuthLayout';
import SearchItems from './components/navbar/SearchItems';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import { routs } from './routs';
import Single from './pages/Single';
import NotFound from './pages/NotFound';

const App = () => {
  // const buildRouts = routs => {
  //   return (
  //     routs.map((item, key) => {
  //       if (item.children) {
  //         return (
  //           <Route key={key} path={item.path} element={item.element}>
  //             {item.children.map((child, key) => <Route key={key} path={child.path} element={child.element} />)}
  //           </Route>
  //         )
  //       } else {
  //         return <Route path={item.path} element={item.element} />
  //       }
  //     })
  //   )
  // }
  // {/* {buildRouts(routs)} */ }

  const router = createBrowserRouter(routs);
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<MainLayout />}>
    //       <Route path='/' element={<Main />} />
    //       <Route path='/admin' element={<MainContent />} />
    //       <Route path='/admin/:id' element={<Single />} />
    //     </Route>
    //     <Route path='/auth' element={<AuthLayout />}>
    //       <Route path='/auth/login' element={<Login />} />
    //     </Route>
    //     <Route path='*' element={<NotFound />} />
    //   </Routes>
    // </BrowserRouter>
    // <>
    //   <Navbar />
    //   {/* <Input /> */}
    //   <MainContent />
    //   <SearchItems />
    // </>
    //   <Route path='/' element={<MainLayout />}>
    //   <Route path='/' element={<Main />} />
    //   <Route path='/admin' element={<MainContent />} />
    // </Route>
    // <Route path='/auth' element={<AuthLayout />}>
    //   <Route path='/auth/login' element={<Login />} />
    // </Route>
  );
}

export default App;
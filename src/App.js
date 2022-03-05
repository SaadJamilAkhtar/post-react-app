import './App.css';
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import {Provider} from "react-redux";
import store from "./store";

function App() {



    return (
        <Provider store={store}>
            <header className={'bg-primary'}>
                <div className={'text-center text-white p-4'}>
                    <h1>Post Tracker App</h1>
                </div>
            </header>
            <div className="container">
                <div className={'m-5'}>
                    <PostForm/>
                </div>
                <div className={''}>
                    <Post/>
                </div>
            </div>
        </Provider>
    );
}

export default App;

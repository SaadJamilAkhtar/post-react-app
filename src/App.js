import './App.css';
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <div className={'m-4'}>
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

import './App.css';
import Post from "./components/Post";
import PostForm from "./components/PostForm";

function App() {
    return (
        <div className="container">
            <div className={'m-4'}>
                <PostForm/>
            </div>
            <div className={''}>
                <Post/>
            </div>
        </div>
    );
}

export default App;

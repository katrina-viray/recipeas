import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex h-screen items-center justify-center bg-gradient-to-t from-white to-main-purple">
          <div className="text-white text-center">
            <h1 className="font-bold">Wrong page!</h1>
            <p>Here are some helpful links:</p>
            <Link className="underline mr-5" to='/'>Home</Link>
            <Link  className="underline" to='/recipes'>Blog</Link>
          </div>
        </div>
    )
}